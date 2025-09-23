import React, { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import SectionTitle from "../components/common/SectionTitle";
import { FaClock, FaCalendarAlt, FaMapMarkerAlt, FaBell, FaEnvelope } from "react-icons/fa";

const Schedule = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };
  return (
    <>
      <PageHeader
        title="Event Schedule"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Schedule" }]}
      />

      <section className="section bg-background">
        <div className="container">
          <SectionTitle>Event Schedule</SectionTitle>

          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12 mb-12">
              <div className="text-6xl mb-6 text-primary">📅</div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Detailed Schedule Coming Soon
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are finalizing the comprehensive schedule for Ayurveda Kumbh
                2025. The detailed program with session timings, speaker slots,
                and activities will be updated soon.
              </p>

              {/* Event Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg">
                  <FaCalendarAlt className="text-3xl text-primary mb-3 mx-auto" />
                  <h3 className="font-bold text-lg mb-2">Event Dates</h3>
                  <p className="text-gray-700">December 22-24, 2025</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                  <FaMapMarkerAlt className="text-3xl text-accent mb-3 mx-auto" />
                  <h3 className="font-bold text-lg mb-2">Venue</h3>
                  <p className="text-gray-700">Prem Nagar Ashram, Haridwar</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <FaClock className="text-3xl text-secondary mb-3 mx-auto" />
                  <h3 className="font-bold text-lg mb-2">Duration</h3>
                  <p className="text-gray-700">3 Days of Wisdom</p>
                </div>
              </div>

              {/* Notification */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <FaBell className="text-primary animate-bounce" />
                  <h3 className="font-bold text-lg text-primary">
                    Stay Updated
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Get notified when the detailed schedule is released. Follow us
                  for the latest updates.
                </p>
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full sm:w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                      >
                        <FaEnvelope />
                        Subscribe
                      </button>
                    </div>
                    <a
                      href="/Ayurveda kumbh 2025.pdf"
                      download="Ayurveda_Kumbh_2025_Brochure.pdf"
                      className="w-full sm:w-auto border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors inline-block text-center"
                    >
                      Download Brochure
                    </a>
                  </form>
                ) : (
                  <div className="text-center">
                    <p className="text-green-600 font-semibold mb-4">✅ Successfully subscribed! We'll notify you when the schedule is ready.</p>
                    <a
                      href="/Ayurveda kumbh 2025.pdf"
                      download="Ayurveda_Kumbh_2025_Brochure.pdf"
                      className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors inline-block"
                    >
                      Download Brochure
                    </a>
                  </div>
                )}
              </div>
            </div>

          {/* Placeholder Schedule Preview */}
          <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Expected Program Highlights
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-primary mb-2">
                    Day 1 - December 22
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Registration & Welcome</li>
                    <li>• Inaugural Ceremony</li>
                    <li>• Keynote Sessions</li>
                    <li>• Ayurveda Yajna</li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold text-accent mb-2">
                    Day 2 - December 23
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Research Presentations</li>
                    <li>• Panel Discussions</li>
                    <li>• Health Camp</li>
                    <li>• Cultural Programs</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-secondary mb-2">
                    Day 3 - December 24
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Workshops</li>
                    <li>• Maha Aarti</li>
                    <li>• Samhita Recitation</li>
                    <li>• Closing Ceremony</li>
                  </ul>
                </div>
              </div>
          </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
