import { useState, useEffect } from "react";

const CountdownTimer = ({ title, targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="bg-gradient-to-br from-[#ffe4e6] to-[#ffe0b2] p-6 rounded-3xl shadow-2xl text-center max-w-2xl mx-auto border-4 border-pink-200 animate-pulse">
      <h2 className="text-3xl md:text-4xl font-extrabold text-pink-800 mb-6 tracking-wide">
        {title}
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="flex flex-col items-center w-20 h-24 md:w-24 md:h-28 bg-white/90 rounded-xl shadow-inner transition-all duration-300"
          >
            <div className="text-4xl md:text-5xl font-bold text-pink-600 mt-2">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm uppercase mt-1 text-pink-800 tracking-wider">
              {unit}
            </div>
          </div>
        ))}
        {!Object.keys(timeLeft).length && (
          <p className="text-lg text-pink-700">🎉 The event has started!</p>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
