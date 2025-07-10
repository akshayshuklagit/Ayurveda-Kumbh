import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Venue", path: "/venue" },
    { name: "Contact", path: "/contact" },
  ];
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <header
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 
          ${
            isHome
              ? "lg:bg-white/30 lg:backdrop-blur-md lg:shadow-lg lg:border lg:border-white/20"
              : isScrolled
              ? "bg-white shadow-md"
              : "bg-transparent"
          } 
          ${isScrolled ? "py-2" : "py-4"}`}
      >
        <div className="container flex items-center justify-between">
          <Link to="/" className="z-10" onClick={closeMenu}>
            <img
              src="/assets/Kumbhlogo.png"
              alt="Ayurveda Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-medium text-xl  transition duration-300 ease-in-out relative group ${
                        isActive
                          ? "text-[#d97706]" // active = saffron
                          : "text-[#333] hover:text-[#0ea5e9]" // dark gray with blue hover
                      }`
                    }
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[#0ea5e9] group-hover:w-full transition-all duration-300"></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Register Button */}
          <Link
            to="/registration/delegate"
            className={`hidden lg:block btn transition duration-300 animate-pulse ${
              isScrolled
                ? "bg-[#d97706] text-white hover:bg-[#b45309]"
                : "bg-[#c006d9c8] text-white hover:bg-[#b45309]  hover:text-white"
            }`}
          >
            Register Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="z-10 p-2 lg:hidden "
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes
                className={isScrolled ? "text-gray-800" : "text-primary"}
                size={24}
              />
            ) : (
              <FaBars
                className={isScrolled ? "text-gray-800" : "text-blue-500"}
                size={24}
              />
            )}
          </button>

          {/* Mobile Navigation */}
          <div
            className={`fixed inset-0 z-0 flex flex-col items-center justify-center bg-background transition-transform duration-300 ease-in-out lg:hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <nav className="w-full px-6">
              <ul className="space-y-6 text-center">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-xl font-medium transition duration-300 ${
                          isActive
                            ? "text-[#d97706]"
                            : "text-[#333] hover:text-[#0ea5e9]"
                        }`
                      }
                      onClick={closeMenu}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <Link
                    to="/registration/delegate"
                    className="inline-block w-full btn btn-primary"
                    onClick={closeMenu}
                  >
                    Register Now
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
