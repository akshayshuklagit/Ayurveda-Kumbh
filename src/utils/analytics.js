// Simple analytics tracking with debouncing
let lastTrackedPage = null;
let trackingTimeout = null;

export const trackPageView = (page) => {
  const currentPage = page || window.location.pathname;
  
  // Don't track if it's the same page
  if (lastTrackedPage === currentPage) {
    return;
  }
  
  // Clear previous timeout
  if (trackingTimeout) {
    clearTimeout(trackingTimeout);
  }
  
  // Debounce tracking calls
  trackingTimeout = setTimeout(() => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      fetch(`${API_URL}/api/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: currentPage,
          timestamp: new Date().toISOString()
        }),
      }).catch(err => {});
      
      lastTrackedPage = currentPage;
    } catch (error) {

    }
  }, 1000); // 1 second debounce
};