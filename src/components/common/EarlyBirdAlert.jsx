import { useState, useEffect } from "react";
import { FaClock, FaTimes, FaBolt, FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";

const EarlyBirdAlert = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(12, 0, 0, 0); // Set to 12:00 PM tomorrow

      const now = new Date();
      const difference = tomorrow - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
        setIsExpired(false);
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible || isExpired) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        {/* Modal */}
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden animate-pulse">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white hover:text-yellow-300 z-10"
          >
            <FaTimes size={20} />
          </button>

          {/* Content */}
          <div className="p-8 text-center">
            <div className="text-6xl mb-4 animate-bounce">🔥</div>

            <h2 className="text-2xl font-bold mb-2">
              ⚡ EARLY BIRD ENDING SOON! ⚡
            </h2>

            <p className="text-lg mb-6">
              Registration closes tomorrow at 12:00 PM
            </p>

            {/* Countdown */}
            <div className="bg-white/20 rounded-lg p-4 mb-6">
              <div className="flex justify-center gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">{timeLeft.hours}</div>
                  <div className="text-xs">HOURS</div>
                </div>
                <div className="text-3xl font-bold">:</div>
                <div>
                  <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-xs">MINUTES</div>
                </div>
                <div className="text-3xl font-bold">:</div>
                <div>
                  <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-xs">SECONDS</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <FaGift className="text-yellow-300" />
              <span className="font-bold">
                Save ₹500+ with Early Bird Pricing!
              </span>
            </div>

            <Link
              to="/registration/delegate"
              onClick={() => setIsVisible(false)}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Register Now</span>
              <FaBolt />
            </Link>

            <p className="text-sm mt-4 opacity-80">
              Don't miss this limited-time offer!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarlyBirdAlert;
