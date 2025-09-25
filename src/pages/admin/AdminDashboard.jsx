import React, { useState, useEffect } from 'react';
import { FaUsers, FaCalendarAlt, FaFileAlt, FaChartBar, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import EmailManager from './EmailManager';
import ContactsManager from './ContactsManager';
import ApiService from '../../config/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState([
    { title: 'Today Visits', count: 0, icon: FaUsers, color: 'bg-blue-500' },
    { title: 'Total Visits', count: 0, icon: FaChartBar, color: 'bg-green-500' },
    { title: 'Email Subscribers', count: 0, icon: FaEnvelope, color: 'bg-purple-500' },
    { title: 'Contact Inquiries', count: 0, icon: FaEnvelope, color: 'bg-orange-500' }
  ]);
  const [recentSubscribers, setRecentSubscribers] = useState([]);
  const [trafficData, setTrafficData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    ApiService.logout();
    onLogout();
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch stats and traffic data using ApiService
      const [statsData, trafficStats, subscribers] = await Promise.all([
        ApiService.get('/api/admin/stats'),
        ApiService.get('/api/traffic/stats'),
        ApiService.get('/api/subscribers')
      ]);
      
      // Update stats with real data
      setStats([
        { title: 'Today Visits', count: statsData.todayVisits, icon: FaUsers, color: 'bg-blue-500' },
        { title: 'Total Visits', count: statsData.totalVisits, icon: FaChartBar, color: 'bg-green-500' },
        { title: 'Email Subscribers', count: statsData.subscribers, icon: FaEnvelope, color: 'bg-purple-500' },
        { title: 'Contact Inquiries', count: statsData.contacts, icon: FaEnvelope, color: 'bg-orange-500' }
      ]);
      
      setTrafficData(trafficStats);
      
      // Get recent subscribers (last 5)
      const recent = subscribers
        .slice(0, 5)
        .map(sub => ({
          name: sub.name,
          email: sub.email,
          type: 'Subscriber',
          date: new Date(sub.createdAt).toLocaleDateString()
        }));
      setRecentSubscribers(recent);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Ayurveda Kumbh Admin</h1>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: FaChartBar },
                { id: 'traffic', label: 'Traffic Analytics', icon: FaUsers },
                { id: 'subscribers', label: 'Subscribers', icon: FaEnvelope },
                { id: 'contacts', label: 'Contact Inquiries', icon: FaEnvelope }
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id 
                        ? 'bg-primary text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                      <div className={`${stat.color} p-3 rounded-lg`}>
                        <stat.icon className="text-white text-xl" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.count}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Section */}
              {trafficData && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Daily Traffic Chart */}
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold mb-4">Daily Traffic (Last 7 Days)</h3>
                    <div className="h-64">
                      <Line
                        data={{
                          labels: trafficData.dailyStats?.map(stat => 
                            new Date(stat._id).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                          ) || [],
                          datasets: [{
                            label: 'Daily Visits',
                            data: trafficData.dailyStats?.map(stat => stat.count) || [],
                            borderColor: 'rgb(59, 130, 246)',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            tension: 0.4
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { display: false }
                          },
                          scales: {
                            y: {
                              beginAtZero: true,
                              ticks: { precision: 0 }
                            }
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Top Pages Chart */}
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold mb-4">Popular Pages</h3>
                    <div className="h-64">
                      <Bar
                        data={{
                          labels: trafficData.topPages?.map(page => page._id.replace('/', '') || 'Home') || [],
                          datasets: [{
                            label: 'Page Views',
                            data: trafficData.topPages?.map(page => page.count) || [],
                            backgroundColor: [
                              'rgba(59, 130, 246, 0.8)',
                              'rgba(16, 185, 129, 0.8)',
                              'rgba(139, 92, 246, 0.8)',
                              'rgba(245, 158, 11, 0.8)',
                              'rgba(239, 68, 68, 0.8)'
                            ]
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { display: false }
                          },
                          scales: {
                            y: {
                              beginAtZero: true,
                              ticks: { precision: 0 }
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Stats Overview */}
              {trafficData && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Traffic Stats Doughnut */}
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold mb-4">Traffic Distribution</h3>
                    <div className="h-64">
                      <Doughnut
                        data={{
                          labels: ['Today', 'Yesterday', 'This Week', 'This Month'],
                          datasets: [{
                            data: [
                              trafficData.todayVisits,
                              trafficData.yesterdayVisits,
                              trafficData.weekVisits - trafficData.todayVisits - trafficData.yesterdayVisits,
                              trafficData.monthVisits - trafficData.weekVisits
                            ],
                            backgroundColor: [
                              'rgba(59, 130, 246, 0.8)',
                              'rgba(16, 185, 129, 0.8)',
                              'rgba(139, 92, 246, 0.8)',
                              'rgba(245, 158, 11, 0.8)'
                            ]
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'bottom'
                            }
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                        <span className="font-medium">Today's Visits</span>
                        <span className="text-2xl font-bold text-blue-600">{trafficData.todayVisits}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                        <span className="font-medium">This Week</span>
                        <span className="text-2xl font-bold text-green-600">{trafficData.weekVisits}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                        <span className="font-medium">This Month</span>
                        <span className="text-2xl font-bold text-purple-600">{trafficData.monthVisits}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                        <span className="font-medium">Total Visits</span>
                        <span className="text-2xl font-bold text-orange-600">{trafficData.totalVisits}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold">Recent Subscribers</h3>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Name</th>
                          <th className="text-left py-2">Email</th>
                          <th className="text-left py-2">Type</th>
                          <th className="text-left py-2">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan="4" className="py-4 text-center text-gray-500">
                              Loading...
                            </td>
                          </tr>
                        ) : recentSubscribers.length > 0 ? (
                          recentSubscribers.map((reg, index) => (
                            <tr key={index} className="border-b">
                              <td className="py-2">{reg.name}</td>
                              <td className="py-2">{reg.email}</td>
                              <td className="py-2">
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                  {reg.type}
                                </span>
                              </td>
                              <td className="py-2">{reg.date}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="py-4 text-center text-gray-500">
                              No recent activity
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'traffic' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Traffic Analytics</h2>
              {trafficData ? (
                <div className="space-y-6">
                  {/* Charts Grid */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {/* Daily Traffic Trend */}
                    <div className="bg-white rounded-lg shadow p-6">
                      <h3 className="text-xl font-semibold mb-4">Daily Traffic Trend</h3>
                      <div className="h-80">
                        <Line
                          data={{
                            labels: trafficData.dailyStats?.map(stat => 
                              new Date(stat._id).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                            ) || [],
                            datasets: [{
                              label: 'Daily Visits',
                              data: trafficData.dailyStats?.map(stat => stat.count) || [],
                              borderColor: 'rgb(59, 130, 246)',
                              backgroundColor: 'rgba(59, 130, 246, 0.1)',
                              tension: 0.4,
                              fill: true
                            }]
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: { display: false }
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Page Views Bar Chart */}
                    <div className="bg-white rounded-lg shadow p-6">
                      <h3 className="text-xl font-semibold mb-4">Top Pages</h3>
                      <div className="h-80">
                        <Bar
                          data={{
                            labels: trafficData.topPages?.map(page => page._id.replace('/', '') || 'Home') || [],
                            datasets: [{
                              label: 'Page Views',
                              data: trafficData.topPages?.map(page => page.count) || [],
                              backgroundColor: 'rgba(59, 130, 246, 0.8)'
                            }]
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: { display: false }
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg shadow p-4 text-center">
                      <p className="text-3xl font-bold text-blue-600">{trafficData.todayVisits}</p>
                      <p className="text-sm text-gray-600">Today</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 text-center">
                      <p className="text-3xl font-bold text-green-600">{trafficData.weekVisits}</p>
                      <p className="text-sm text-gray-600">This Week</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 text-center">
                      <p className="text-3xl font-bold text-purple-600">{trafficData.monthVisits}</p>
                      <p className="text-sm text-gray-600">This Month</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 text-center">
                      <p className="text-3xl font-bold text-orange-600">{trafficData.totalVisits}</p>
                      <p className="text-sm text-gray-600">All Time</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-gray-600">Loading traffic data...</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'subscribers' && (
            <EmailManager />
          )}

          {activeTab === 'contacts' && (
            <ContactsManager />
          )}


        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;