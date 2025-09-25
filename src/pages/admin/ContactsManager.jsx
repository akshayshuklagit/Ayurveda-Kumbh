import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaEye, FaReply, FaTrash, FaFilter, FaPaperPlane, FaUpload, FaDownload } from 'react-icons/fa';
import ApiService from '../../config/api';

const ContactsManager = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailData, setEmailData] = useState({ subject: '', message: '', recipients: 'all' });
  const [sending, setSending] = useState(false);
  const [csvFile, setCsvFile] = useState(null);
  const [importing, setImporting] = useState(false);
  const [selectedEmails, setSelectedEmails] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const data = await ApiService.get('/api/contacts');
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredContacts = contacts.filter(contact => {
    if (filter === 'all') return true;
    return contact.inquiryType === filter;
  });

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const recipients = emailData.recipients === 'all' 
        ? 'all' 
        : emailData.recipients === 'selected'
        ? selectedEmails
        : [selectedContact.email];

      await ApiService.post('/api/send-contact-emails', {
        subject: emailData.subject,
        message: emailData.message,
        recipients: recipients
      });

      alert('Email sent successfully!');
      setEmailData({ subject: '', message: '', recipients: 'all' });
      setShowEmailForm(false);
    } catch (error) {
      alert('Error sending email');
    }
    setSending(false);
  };

  const handleCsvImport = async (e) => {
    e.preventDefault();
    if (!csvFile) return;

    setImporting(true);
    const formData = new FormData();
    formData.append('csvFile', csvFile);

    try {
      // For file uploads, we need to use fetch directly but with auth headers
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${ApiService.baseURL}/api/import-contacts-csv`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const result = await response.json();
      if (response.ok) {
        alert(`Successfully imported ${result.imported} contacts`);
        setCsvFile(null);
        fetchContacts();
      } else {
        alert(`Failed to import: ${result.error}`);
      }
    } catch (error) {
      alert('Error importing CSV');
    }
    setImporting(false);
  };

  const downloadSampleCsv = () => {
    const csvContent = 'name,email,phone,subject,message,inquiryType\nJohn Doe,john@example.com,+1234567890,General Inquiry,Hello there,general\nJane Smith,jane@example.com,+0987654321,Registration Help,Need help with registration,registration';
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sample_contacts.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSelectEmail = (email) => {
    setSelectedEmails(prev => 
      prev.includes(email) ? prev.filter(e => e !== email) : [...prev, email]
    );
  };

  const getInquiryTypeColor = (type) => {
    const colors = {
      general: 'bg-blue-100 text-blue-800',
      registration: 'bg-green-100 text-green-800',
      speaker: 'bg-purple-100 text-purple-800',
      exhibitor: 'bg-orange-100 text-orange-800',
      media: 'bg-red-100 text-red-800',
      sponsorship: 'bg-yellow-100 text-yellow-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Contact Inquiries</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setShowEmailForm(true)}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark flex items-center gap-2"
          >
            <FaPaperPlane />
            Send Email
          </button>
        </div>
      </div>

      {/* CSV Import Section */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FaUpload className="text-primary" />
          Import Contacts from CSV
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <form onSubmit={handleCsvImport} className="flex gap-2">
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setCsvFile(e.target.files[0])}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              disabled={importing || !csvFile}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {importing ? 'Importing...' : 'Import'}
            </button>
          </form>
          
          <button
            onClick={downloadSampleCsv}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <FaDownload />
            Download Sample CSV
          </button>
        </div>
      </div>
      
      {/* Filter */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex items-center gap-4">
          <FaFilter className="text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Inquiries</option>
            <option value="general">General</option>
            <option value="registration">Registration</option>
            <option value="speaker">Speaker</option>
            <option value="exhibitor">Exhibitor</option>
            <option value="media">Media</option>
            <option value="sponsorship">Sponsorship</option>
          </select>
          <span className="text-gray-600">
            Showing {filteredContacts.length} of {contacts.length} inquiries
          </span>
        </div>
      </div>

      {/* Email Form Modal */}
      {showEmailForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Send Email to Contacts</h3>
            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Recipients</label>
                <select
                  value={emailData.recipients}
                  onChange={(e) => setEmailData({...emailData, recipients: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="all">All Contacts ({contacts.length})</option>
                  <option value="selected">Selected ({selectedEmails.length})</option>
                  {selectedContact && <option value="current">Current Contact</option>}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  value={emailData.subject}
                  onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  value={emailData.message}
                  onChange={(e) => setEmailData({...emailData, message: e.target.value})}
                  rows="4"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="flex-1 bg-primary text-white py-2 rounded-lg disabled:opacity-50"
                >
                  {sending ? 'Sending...' : 'Send Email'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmailForm(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contacts List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Inquiries</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {loading ? (
              <div className="p-6 text-center text-gray-500">Loading...</div>
            ) : filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <div
                  key={contact._id}
                  className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                    selectedContact?._id === contact._id ? 'bg-blue-50 border-l-4 border-l-primary' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1" onClick={() => setSelectedContact(contact)}>
                      <input
                        type="checkbox"
                        checked={selectedEmails.includes(contact.email)}
                        onChange={() => handleSelectEmail(contact.email)}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{contact.name}</h4>
                        <p className="text-sm text-gray-600">{contact.email}</p>
                        <p className="text-sm font-medium text-gray-800 mt-1">{contact.subject}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getInquiryTypeColor(contact.inquiryType)}`}>
                            {contact.inquiryType}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(contact.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <FaEnvelope className="text-gray-400 mt-1" />
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                No inquiries found for the selected filter.
              </div>
            )}
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Inquiry Details</h3>
          </div>
          <div className="p-6">
            {selectedContact ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <p className="text-gray-800">{selectedContact.name}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p className="text-gray-800">{selectedContact.email}</p>
                </div>
                
                {selectedContact.phone && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <p className="text-gray-800">{selectedContact.phone}</p>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getInquiryTypeColor(selectedContact.inquiryType)}`}>
                    {selectedContact.inquiryType}
                  </span>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <p className="text-gray-800">{selectedContact.subject}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-800 whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Submitted</label>
                  <p className="text-gray-600 text-sm">
                    {new Date(selectedContact.createdAt).toLocaleString()}
                  </p>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <button
                    onClick={() => window.open(`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`)}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
                  >
                    <FaReply />
                    Reply
                  </button>
                  <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <FaEye className="text-4xl mx-auto mb-4 text-gray-300" />
                <p>Select an inquiry to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsManager;