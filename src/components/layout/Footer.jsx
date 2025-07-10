import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../common/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Speakers", path: "/speakers" },
        { name: "Gallery", path: "/gallery" },
      ],
    },
    {
      title: "Registration",
      links: [
        { name: "Delegate Registration", path: "/registration/delegate" },
        { name: "Vendor Registration", path: "/registration/vendor" },
        { name: "Call for Papers", path: "/registration/call-for-papers" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Venue & Accommodation", path: "/venue" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms & Conditions", path: "/terms-conditions" },
        { name: "Refund Policy", path: "/refund-policy" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/ayurvedakumbh?mibextid=ZbWKwL",
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/AyurvedaKumbh?t=7UB0fCItyiM_v2kSzKebdQ&s=09",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/ayurvedakumbh?igsh=MXV1YjU1N21ibjBweQ==",
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com/@ayurvedakumbh?si=ejHo38tdsM8slLWi",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ayurveda-kumbh-arogya-expo-269b9827a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <footer className="bg-secondary-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img
              src="/src/assets/logo2.png"
              alt="Jivan Amrit Ayurveda Logo"
              className="h-20 w-auto"
            />
            <p className="mt-4 text-gray-300">
              Ayurveda Kumbh is a large-scale pan-India Ayurvedic gathering that
              brings together practitioners, scholars, and enthusiasts to
              celebrate and promote the ancient wisdom of Ayurveda.
            </p>
            <div className="flex mt-6 space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-light transition-colors duration-200"
                  aria-label={`Visit our ${
                    social.url.split(".com")[0].split("https://")[1]
                  } page`}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-primary-light transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Ayurveda Kumbh. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link
                to="/contact"
                className="text-gray-400 hover:text-primary-light transition-colors duration-200 text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
