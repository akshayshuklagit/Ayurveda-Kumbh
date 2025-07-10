import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const kumbhEvents = [
  {
    id: 1,
    title: "Ayurveda Kumbh 1 - Ayodhya",
    image: "/assets/images/kumbh3.png",
  },
  {
    id: 2,
    title: "Ayurveda Kumbh 1 - Ayodhya",
    image: "/assets/images/kumbh4.png",
  },

  {
    id: 3,
    title: "Ayurveda Kumbh 2 - Haridwar",
    image: "/assets/images/Screenshot 2025-06-21 181730.png",
  },
  {
    id: 4,
    title: "Ayurveda Kumbh 2 - Haridwar",
    image: "/assets/images/Screenshot 2025-06-21 181808.png",
  },
  {
    id: 5,
    title: "Ayurveda Kumbh 2 - Haridwar",
    image: "/assets/images/Screenshot 2025-06-21 181822.png",
  },
];

const KumbhSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % kumbhEvents.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + kumbhEvents.length) % kumbhEvents.length
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative max-w-5xl mx-auto my-16">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            isAnimating ? "opacity-80" : "opacity-100"
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {kumbhEvents.map((event) => (
            <div key={event.id} className="w-full flex-shrink-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-96 object-cover"
              />
              <div className="bg-primary text-white text-center py-4 text-xl font-semibold">
                {event.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md text-primary hover:bg-primary hover:text-white"
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-md text-primary hover:bg-primary hover:text-white"
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {kumbhEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default KumbhSlider;
