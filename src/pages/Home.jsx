import { Link } from "react-router-dom";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaBook,
  FaLeaf,
  FaHandHoldingHeart,
} from "react-icons/fa";
import CountdownTimer from "../components/home/CountdownTimer";
import SectionTitle from "../components/common/SectionTitle";
import Highlights from "../components/home/Highlights";
import KumbhSlider from "../components/home/KumbhSlider";
import Infoslider from "../components/home/Infoslider";
const Home = () => {
  // Event details
  const eventDetails = {
    date: "December 22-24, 2025",
    location: "Prem Nagar Ashram, Haridwar, India",
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage: "url('/assets/banner1.jpg')",
        }}
      >
        <div className="container mx-auto px-4 text-center text-slate-800">
          <div className="flex justify-center mb-6">
            <img
              src="/assets/Kumbhlogo.png"
              alt="Ayurveda Kumbh Logo"
              className="h-96 w-auto object-contain"
            />
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            A Grand Congregation of Ayurvedic Wisdom & Wellness
          </p>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 text-lg font-medium text-gray-800">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-amber-600" />
              <span>{eventDetails.date}</span>
            </div>
            <div className="hidden md:block text-xl font-bold">|</div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-amber-600" />
              <span>{eventDetails.location}</span>
            </div>
          </div>

          {/* Countdown */}
          <CountdownTimer
            title="Event Starts In"
            targetDate="2025-12-22T00:00:00"
          />

          {/* Buttons */}
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/registration/delegate"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md shadow"
            >
              Register Now
            </Link>
            <Link
              to="/speakers"
              className="border border-amber-500 text-amber-700 hover:bg-amber-100 font-medium px-6 py-3 rounded-md"
            >
              Speakers
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-blue-50 py-20">
        <div className="container mx-auto px-4 text-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <SectionTitle>About Ayurveda Kumbh 2025</SectionTitle>
              <p className="text-lg leading-relaxed mb-4">
                The Ayurveda Kumbh is a global platform celebrating India’s
                timeless healing wisdom. Every two years, thousands of Ayurveda
                practitioners, scholars, students, and researchers gather in one
                of the seven sacred cities of India.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                In 2025, the Kumbh is dedicated to Lord Ashwini Kumars — the
                divine physicians of the gods — with a central focus on "Rasa
                Chikitsa and Cancer Management." With over 10,000 Vaidyas
                expected, it will be the largest Ayurvedic congregation of the
                year.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Join us from December 22–24, 2025, at Prem Nagar Ashram,
                Haridwar for three days of spiritual depth, medicinal knowledge,
                Ayurveda Yajna, Maha Aarti, Samhita recitation, and divine
                blessings.
              </p>
            </div>
            <div>
              <img
                src="/assets/banner2.png"
                alt="Ayurvedic herbs and treatments"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Divine Call */}
          <div className="text-center">
            <SectionTitle>A Divine Invitation</SectionTitle>
            <p className="text-lg leading-relaxed mb-4">
              It is a sacred joy for Jivan Amrit Organization and Ayurveda
              Samhita Dham to extend a heartfelt invitation to every Ayurveda
              seeker. Let us together preserve our ancient Guru-Shishya
              tradition, enrich the world with Ayurvedic values, and carry the
              light of healing to every home.
            </p>

            <div className="text-center mt-8">
              <img
                src="/assets/abhayji.jpg"
                alt="Vaidya Abhay Narayan Mishra"
                className="w-64 h-auto mx-auto rounded-lg shadow-md"
              />
              <h3 className="text-xl font-bold mt-4 text-primary">
                Vaidya Abhay Narayan Mishra
              </h3>
              <p className="text-sm text-gray-700">
                (Ayurveda Samhita Dham, Vaidyagaon)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto">
          <SectionTitle>Event Highlights</SectionTitle>
          <Highlights />
        </div>
      </section>

      <section className="section bg-blue-50">
        <div className="container">
          <SectionTitle>Poster Parade</SectionTitle>
          <Infoslider />
        </div>
      </section>

      <section className="section bg-blue-100 py-16">
        <div className="container mx-auto px-4 text-slate-800">
          <div className="text-center mb-12">
            <SectionTitle>Mega Health Camp at Ayurveda Kumbh</SectionTitle>
            <p className="text-lg md:text-xl max-w-4xl mx-auto">
              Join us for a <strong>Free Ayurveda Health Camp</strong> at Prem
              Nagar Ashram, Haridwar from{" "}
              <strong>22nd – 24th December 2025</strong>. Benefit from expert
              Ayurvedic Vaidyas and traditional healing methods — completely{" "}
              <strong>free of charge</strong>.
            </p>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Special OPD Focus Areas
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              This free Ayurvedic OPD offers specialized consultation and
              treatment for a wide range of chronic and lifestyle disorders.
              Explore the focused areas below:
            </p>
          </div>

          {/* Text-only OPD Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-primary mb-2">
                Cancer (Arbud)
              </h4>
              <p className="text-gray-700 text-sm">
                Expert Ayurvedic perspective and supportive care for tumors and
                malignancies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-primary mb-2">
                Gynecological Disorders
              </h4>
              <p className="text-gray-700 text-sm">
                Women’s health concerns including PCOS, hormonal imbalance, and
                fertility care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-primary mb-2">
                Heart Issues
              </h4>
              <p className="text-gray-700 text-sm">
                Management of heart-related conditions like hypertension and
                angina through Ayurveda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-primary mb-2">
                Joint Disorders
              </h4>
              <p className="text-gray-700 text-sm">
                Relief for arthritis, spondylitis, and other joint or mobility
                issues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-primary mb-2">
                Kidney Disorders
              </h4>
              <p className="text-gray-700 text-sm">
                Ayurvedic care for kidney stones, infections, and related
                complications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-primary mb-2">
                Digestive Issues
              </h4>
              <p className="text-gray-700 text-sm">
                Comprehensive Ayurvedic approach to indigestion, IBS,
                constipation, and acidity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of This Grand Ayurvedic Congregation
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of Ayurveda enthusiasts, practitioners, and scholars
            for a transformative experience.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/registration/delegate"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Register as Delegate
            </Link>
            <Link
              to="/registration/vendor"
              className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary"
            >
              Become an Exhibitor
            </Link>
            <Link
              to="/registration/call-for-papers"
              className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary"
            >
              Submit Research Paper
            </Link>
          </div>
        </div>
      </section>
      <section className="section bg-background">
        <div className="container">
          <SectionTitle>Ayurveda Kumbh Editions</SectionTitle>

          <KumbhSlider />
        </div>
      </section>
    </>
  );
};

export default Home;
