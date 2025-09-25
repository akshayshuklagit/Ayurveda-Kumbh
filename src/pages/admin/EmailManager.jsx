import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPaperPlane,
  FaUsers,
  FaEdit,
  FaTrash,
  FaUpload,
  FaDownload,
} from "react-icons/fa";
import ApiService from '../../config/api';

const EmailManager = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [emailData, setEmailData] = useState({
    subject: "",
    message: "",
    recipients: "all",
  });
  const [sending, setSending] = useState(false);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [csvFile, setCsvFile] = useState(null);
  const [importing, setImporting] = useState(false);

  // Fetch subscribers from API
  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const data = await ApiService.get('/api/subscribers');
      setSubscribers(data);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    }
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const recipients =
        emailData.recipients === "all"
          ? subscribers.map((s) => s.email)
          : selectedEmails;

      const result = await ApiService.post('/api/send-bulk-email', {
        subject: emailData.subject,
        message: emailData.message,
        recipients: recipients,
      });

      alert(`Email sent successfully to ${recipients.length} recipients!`);
      setEmailData({ subject: "", message: "", recipients: "all" });
      setSelectedEmails([]);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Make sure the backend server is running.");
    }

    setSending(false);
  };

  const handleSelectEmail = (email) => {
    setSelectedEmails((prev) =>
      prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
    );
  };

  const handleSelectAll = () => {
    if (selectedEmails.length === subscribers.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(subscribers.map((s) => s.email));
    }
  };

  const handleCsvImport = async (e) => {
    e.preventDefault();
    if (!csvFile) {
      alert("Please select a CSV file");
      return;
    }

    setImporting(true);
    const formData = new FormData();
    formData.append("csvFile", csvFile);

    try {
      // For file uploads, we need to use fetch directly but with auth headers
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${ApiService.baseURL}/api/import-csv`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert(
          `Successfully imported ${result.imported} subscribers from ${result.total} rows`
        );
        setCsvFile(null);
        fetchSubscribers(); // Refresh the list
      } else {
        alert(`Failed to import CSV: ${result.error}`);
      }
    } catch (error) {
      console.error("Error importing CSV:", error);
      alert("Error importing CSV file");
    }

    setImporting(false);
  };

  const downloadSampleCsv = () => {
    const csvContent =
      "name,email\nJohn Doe,john@example.com\nJane Smith,jane@example.com";
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sample_subscribers.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Email Manager</h2>

      {/* CSV Import Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaUpload className="text-primary" />
          Import Subscribers from CSV
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <form onSubmit={handleCsvImport} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select CSV File
                </label>
                <input
                  type="file"
                  accept=".csv"
                  onChange={(e) => setCsvFile(e.target.files[0])}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={importing || !csvFile}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {importing ? (
                  <>Importing...</>
                ) : (
                  <>
                    <FaUpload />
                    Import CSV
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-600 mb-4">
              CSV file should contain 'name' and 'email' columns.
            </p>
            <button
              onClick={downloadSampleCsv}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <FaDownload />
              Download Sample CSV
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Email Composer */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaPaperPlane className="text-primary" />
            Compose Email
          </h3>

          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipients
              </label>
              <select
                value={emailData.recipients}
                onChange={(e) =>
                  setEmailData({ ...emailData, recipients: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">
                  All Subscribers ({subscribers.length})
                </option>
                <option value="selected">
                  Selected ({selectedEmails.length})
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={emailData.subject}
                onChange={(e) =>
                  setEmailData({ ...emailData, subject: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter email subject"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={emailData.message}
                onChange={(e) =>
                  setEmailData({ ...emailData, message: e.target.value })
                }
                rows="8"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your message here..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {sending ? (
                <>Sending...</>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Email
                </>
              )}
            </button>
          </form>
        </div>

        {/* Subscribers List */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FaUsers className="text-primary" />
              Subscribers ({subscribers.length})
            </h3>
            <button
              onClick={handleSelectAll}
              className="text-sm text-primary hover:text-primary-dark"
            >
              {selectedEmails.length === subscribers.length
                ? "Deselect All"
                : "Select All"}
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {subscribers.map((subscriber, index) => (
              <div
                key={subscriber._id || subscriber.id || index}
                className="flex items-center justify-between p-3 border-b hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedEmails.includes(subscriber.email)}
                    onChange={() => handleSelectEmail(subscriber.email)}
                    className="rounded"
                  />
                  <div>
                    <p className="font-medium">{subscriber.name}</p>
                    <p className="text-sm text-gray-600">{subscriber.email}</p>
                    <p className="text-xs text-gray-500">
                      Subscribed: {subscriber.subscribed}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit size={14} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Email Templates */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Schedule Update",
              subject: "Ayurveda Kumbh 2025 - Schedule Released!",
              message:
                "Dear Participant,\n\nWe are excited to announce that the detailed schedule for Ayurveda Kumbh 2025 is now available...",
            },
            {
              name: "Registration Reminder",
              subject: "Last Chance - Register for Ayurveda Kumbh 2025",
              message:
                "Dear Friend,\n\nThis is a friendly reminder that registration for Ayurveda Kumbh 2025 is closing soon...",
            },
            {
              name: "Event Update",
              subject: "Important Update - Ayurveda Kumbh 2025",
              message:
                "Dear Participant,\n\nWe have an important update regarding Ayurveda Kumbh 2025...",
            },
          ].map((template, index) => (
            <button
              key={index}
              onClick={() =>
                setEmailData({
                  ...emailData,
                  subject: template.subject,
                  message: template.message,
                })
              }
              className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 text-left"
            >
              <h4 className="font-medium">{template.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{template.subject}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailManager;
