import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

const VideoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [
    {
      id: "G68mCL4xtb0",
      title: "Organizing Committee Interview",
      description: "Special sessions on holistic health and wellness",
    },
    {
      id: "XO-H_i8Cvho",
      title: "Speaker Interview",
      description: "Get a glimpse of what awaits at the grand event",
    },
    {
      id: "CBSiu1a4fZE",
      title: "Speaker Interview",
      description: "Relive the magical moments from past Kumbh events",
    },
    {
      id: "3bbWsdQ-l3Q",
      title: "Speaker Interview",
      description: "Learn from renowned Ayurveda experts",
    },
    {
      id: "Ryh_jMzF7Jg",
      title: "Speaker Interview",
      description: "Free Ayurvedic consultations and treatments",
    },
    {
      id: "TJVCkEN79Ao",
      title: "Speaker Interview",
      description: "Traditional performances and spiritual ceremonies",
    },
    {
      id: "664JuQQf_5Y",
      title: "Speaker Interview",
      description: "Exclusive conversations with Ayurveda masters",
    },
    {
      id: "ZkhxGx81xtY",
      title: "Speaker Interview",
      description: "Special sessions on holistic health and wellness",
    },
    {
      id: "IWXzkFLp3ms",
      title: "Speaker Interview",
      description: "Step-by-step guide to register for the event",
    },
    {
      id: "qPVd2Sby14U",
      title: "Speaker Interview",
      description: "Preparation and organization of the grand event",
    },
  ];

  const videosPerSlide = 3;
  const totalSlides = Math.ceil(videos.length / videosPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentVideos = () => {
    const start = currentSlide * videosPerSlide;
    return videos.slice(start, start + videosPerSlide);
  };

  return (
    <div className="relative">
      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {getCurrentVideos().map((video, index) => (
          <div
            key={`${currentSlide}-${index}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="aspect-video relative group">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                {video.title}
              </h3>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevSlide}
          className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors"
          disabled={currentSlide === 0}
        >
          <FaChevronLeft />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors"
          disabled={currentSlide === totalSlides - 1}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default VideoSlider;
