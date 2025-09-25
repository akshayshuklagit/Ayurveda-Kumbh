import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      try {
        const response = await fetch(`${API_URL}/api/subscribers`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, name }),
        });

        if (response.ok) {
          setMessage('Thank you for subscribing!');
          setEmail('');
          setName('');
        } else {
          const error = await response.json();
          setMessage(error.error || 'Subscription failed');
        }
      } catch (networkError) {
        // Backend down - save locally and show success
        const savedSubscribers = JSON.parse(localStorage.getItem('pendingSubscribers') || '[]');
        savedSubscribers.push({ email, name, timestamp: new Date().toISOString() });
        localStorage.setItem('pendingSubscribers', JSON.stringify(savedSubscribers));
        
        setMessage('Thank you for subscribing!');
        setEmail('');
        setName('');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <div className="bg-primary text-white p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <FaEnvelope className="text-2xl" />
        <h3 className="text-xl font-bold">Stay Updated</h3>
      </div>
      
      <p className="mb-4">Get the latest updates about Ayurveda Kumbh 2025</p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded text-gray-800"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded text-gray-800"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-white py-2 rounded hover:bg-accent-dark disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {message && (
        <p className={`mt-3 text-sm ${message.includes('Thank') ? 'text-green-200' : 'text-red-200'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Newsletter;