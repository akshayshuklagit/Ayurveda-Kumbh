import React, { useState } from 'react';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!email || !name.trim()) {
      alert('Please fill in all fields');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    if (name.trim().length < 2) {
      alert('Name must be at least 2 characters long');
      return;
    }
    
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim(), name: name.trim() }),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail('');
        setName('');
        setTimeout(() => setSuccess(false), 3000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Subscription failed');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert(error.message || 'Error subscribing. Please try again later.');
    }

    setLoading(false);
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <FaCheckCircle className="text-green-500 text-3xl mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">Successfully Subscribed!</h3>
        <p className="text-green-600">Thank you for subscribing to Ayurveda Kumbh updates.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary to-amber-600 rounded-lg p-6 text-white">
      <div className="text-center mb-4">
        <FaEnvelope className="text-3xl mx-auto mb-3" />
        <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
        <p className="text-amber-100">Get the latest news and updates about Ayurveda Kumbh 2025</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-primary py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 disabled:opacity-50 transition-colors"
        >
          {loading ? 'Subscribing...' : 'Subscribe Now'}
        </button>
      </form>
    </div>
  );
};

export default Newsletter;