import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import PageHeader from "../components/common/PageHeader";
import SectionTitle from "../components/common/SectionTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxRpBDyyB9G3yv3nd8gvkAIN91yhQl2IJ843oKgiuSXSPr3rU8aKOtad1d7utGhDfC7/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `Name=${formData.name}&Email=${formData.email}&Phone=${formData.phone}&Subject=${formData.subject}&Message=${formData.message}&InquiryType=${formData.inquiryType}`,
        }
      );

      const result = await response.text();
      if (result.includes("Added")) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });
        setSubmitSuccess(true);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  return (
    <>
      <PageHeader title="Contact Us" breadcrumbs={[{ label: "Contact" }]} />

      {/* Contact Information */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Location</h3>
              <p className="text-gray-600 mb-2">Jivan Amrit Ayurveda</p>
              <p className="text-gray-600">Wazirganj Gonda, India</p>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone Numbers</h3>
              <p className="text-gray-600 mb-2">
                General Inquiries: +91 9984276035
              </p>
              <p className="text-gray-600 mb-2">
                Registration Support: +91 8303576319
              </p>
              <p className="text-gray-600">Media Relations: +91 8543979584</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Addresses</h3>
              <p className="text-gray-600 mb-2">
                General Inquiries: ayurvedakumbh@gmail.com
              </p>
              <p className="text-gray-600 mb-2">
                Registration: ayurvedakumbh@gmail.com
              </p>
              <p className="text-gray-600">Media: ayurvedakumbh@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle title="Send Us a Message" centered={false} />
              <p className="text-gray-600 mb-6">
                Have questions about the event? Fill out the form below and our
                team will get back to you as soon as possible.
              </p>

              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center justify-between">
                  <span>
                    Thank you for your message! We'll get back to you soon.
                  </span>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-green-700"
                  >
                    <FaEnvelope className="w-4 h-4" />
                  </button>
                </div>
              )}

              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 flex items-center justify-between">
                  <span>
                    There was an error sending your message. Please try again.
                  </span>
                  <button
                    onClick={() => setSubmitError(false)}
                    className="text-red-700"
                  >
                    <FaEnvelope className="w-4 h-4" />
                  </button>
                  pe
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="registration">Registration Support</option>
                    <option value="speaker">Speaker Inquiry</option>
                    <option value="exhibitor">Exhibitor Information</option>
                    <option value="media">Media & Press</option>
                    <option value="sponsorship">
                      Sponsorship Opportunities
                    </option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.subject ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {formErrors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.message ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Map and Social Media */}
            <div>
              {/* Map */}
              <div className="mb-8">
                <SectionTitle title="Find Us" centered={false} />
                <div className="rounded-lg overflow-hidden shadow-md h-[400px] mb-4">
                  {/* Replace with actual Google Maps embed */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.0962562654935!2d81.99654387536463!3d27.140972448059797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a01f85b3c17a7%3A0x2a5202e674e230cd!2sWazir%20Ganj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1719056472190!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  The Ayurveda Kumbh will be held at the Prem Nagar Ashram,
                  Haridwar, India
                </p>
              </div>

              {/* Social Media */}
              <div>
                <SectionTitle title="Connect With Us" centered={false} />
                <p className="text-gray-600 mb-4">
                  Follow us on social media for the latest updates,
                  announcements, and behind-the-scenes content.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.facebook.com/ayurvedakumbh?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="https://x.com/AyurvedaKumbh?t=7UB0fCItyiM_v2kSzKebdQ&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/ayurvedakumbh?igsh=MXV1YjU1N21ibjBweQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ayurveda-kumbh-arogya-expo-269b9827a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="https://youtube.com/@ayurvedakumbh?si=ejHo38tdsM8slLWi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <SectionTitle title="Frequently Asked Questions" centered={true} />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">
                  What are the dates for the next Ayurveda Kumbh?
                </h3>
                <p className="text-gray-600">
                  The next Ayurveda Kumbh is scheduled for December 22-24, 2025.
                  Please check our website for any updates or changes to the
                  schedule.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">
                  How can I register for the event?
                </h3>
                <p className="text-gray-600">
                  You can register for the event through our online registration
                  portal. Visit the Registration page for more information on
                  different registration types and fees.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">
                  Is there accommodation available for delegates?
                </h3>
                <p className="text-gray-600">
                  Yes, we have partnered with several hotels near the venue to
                  provide accommodation options for delegates. Details will be
                  provided during the registration process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">
                  How can I become a sponsor or exhibitor?
                </h3>
                <p className="text-gray-600">
                  For sponsorship and exhibition opportunities, please contact
                  our team at sponsors@ayurvedakumbh.org or fill out the contact
                  form on this page selecting "Sponsorship Opportunities" as
                  your inquiry type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">
                  Is there a mobile app for the event?
                </h3>
                <p className="text-gray-600">
                  Yes, we will be launching a mobile app closer to the event
                  date. The app will include the full program, speaker profiles,
                  venue maps, and networking features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
