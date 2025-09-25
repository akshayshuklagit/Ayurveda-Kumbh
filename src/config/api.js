const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  getToken() {
    return localStorage.getItem('adminToken');
  }

  setToken(token) {
    if (token) {
      localStorage.setItem('adminToken', token);
    } else {
      localStorage.removeItem('adminToken');
    }
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    const token = this.getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    
    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (response.status === 401) {
        this.setToken(null);
        window.location.href = '/admin';
        throw new Error('Authentication required');
      }
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Request failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      
      // Backend fallback - return mock data for critical endpoints
      if (error.name === 'TypeError' || error.message.includes('fetch')) {
        return this.getFallbackData(endpoint);
      }
      
      throw error;
    }
  }

  getFallbackData(endpoint) {
    console.warn('Backend unavailable, using fallback data for:', endpoint);
    
    // Return appropriate fallback data based on endpoint
    if (endpoint.includes('/subscribers')) {
      return [];
    }
    
    if (endpoint.includes('/contacts')) {
      return [];
    }
    
    if (endpoint.includes('/admin/stats')) {
      return {
        subscribers: 0,
        contacts: 0,
        todayVisits: 0,
        totalVisits: 0
      };
    }
    
    if (endpoint.includes('/traffic/stats')) {
      return {
        todayVisits: 0,
        yesterdayVisits: 0,
        weekVisits: 0,
        monthVisits: 0,
        totalVisits: 0,
        topPages: [],
        dailyStats: []
      };
    }
    
    return { success: false, error: 'Backend unavailable' };
  }

  async login(credentials) {
    const response = await fetch(`${this.baseURL}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Login failed');
    }
    
    const data = await response.json();
    this.setToken(data.token);
    return data;
  }

  logout() {
    this.setToken(null);
  }

  async get(endpoint) {
    return this.request(endpoint);
  }

  async post(endpoint, data) {
    try {
      return await this.request(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (error) {
      // For POST requests, show user-friendly message when backend is down
      if (error.name === 'TypeError' || error.message.includes('fetch')) {
        if (endpoint.includes('/contact')) {
          throw new Error('Unable to submit form. Please try again later or contact us directly.');
        }
        if (endpoint.includes('/subscribers')) {
          throw new Error('Unable to subscribe. Please try again later.');
        }
        throw new Error('Service temporarily unavailable. Please try again later.');
      }
      throw error;
    }
  }
}

export default new ApiService();