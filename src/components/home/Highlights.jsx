import React from "react";

const highlights = [
  { stat: "3", label: "DAYS" },
  { stat: "12+", label: "EVENTS" },
  { stat: "20+", label: "SESSIONS" },
  { stat: "200+", label: "EXHIBITORS" },
  { stat: "500+", label: "PAPER & POSTER" },
  { stat: "10,000", label: "VAIDYA" },
  { stat: "20,000", label: "VISITORS" },
];

const keyHighlights = [
  "World’s Biggest Conference on Rasachikitsa",
  "Ayurveda’s Biggest Conference on Cancer",
  "Paper & Poster Presentation",
  "YouthVaidya Sanmvad",
  "Awards Ceremony",
  "Mega Health Camp",
  "Shri Ashwino Yagya",
  "Shri Ashwino Mahaarti",
  "Ayurveda Samhita Dham Shobha Yatra",
  "Arogya Expo",
  "Showcase of Rasashastra",
  "Ayurveda Samhita Dham Gallery",
];

const Highlights = () => {
  return (
    <section className="w-full">
      {/* Top Highlights Section */}
      <div className="bg-blue-500 py-12">
        <h2 className="text-3xl text-white text-center font-bold mb-8 uppercase">
          Highlights
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto px-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md flex flex-col justify-center items-center p-4 text-center"
            >
              <div className="text-green-700 text-3xl md:text-4xl font-bold">
                {item.stat}
              </div>
              <div className="text-sm font-semibold mt-2 text-gray-700 uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Highlights Section */}
      <div className="bg-gradient-to-b from-blue-100 to-blue-300 py-12">
        <h2 className="text-3xl font-bold text-center text-yellow-900 mb-8 uppercase">
          Key Highlights
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {keyHighlights.map((item, index) => (
            <div
              key={index}
              className="bg-white text-green-900 font-medium text-center py-3 px-4 rounded-lg shadow hover:shadow-lg transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
