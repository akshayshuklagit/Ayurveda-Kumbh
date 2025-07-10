import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import PageHeader from "../components/common/PageHeader";

const Venue = () => {
  return (
    <>
      <PageHeader title="Venue" breadcrumbs={[{ label: "Venue" }]} />

      <section className="section bg-background-light min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <SectionTitle>Venue</SectionTitle>
          <div className="bg-white shadow-lg rounded-2xl p-6 mb-10">
            <h2 className="text-2xl font-semibold mb-4">📍Event Location</h2>
            <p className="text-lg text-gray-700 mb-6">
              Ayurveda Kumbh 2025 will be held at:{" "}
              <b className="text-red-400">Prem Nagar Ashram</b>
            </p>
            <p className="text-xl font-medium text-green-800">
              Jwalapur Road, Haridwar, Uttarakhand249407, India
            </p>
          </div>

          <div className="w-full mb-10">
            <img
              src="src/assets/images/Shree-Prem-Nagar-Ashram-Haridwar-1.jpg"
              alt="Prem Nagar Ashram Venue"
              className="w-full h-auto rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Venue Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "🌟 Iconic Venue",
                  image: "src/assets/images/venue1.png",
                },
                {
                  title: "🌿 Greenery Environment",
                  image: "src/assets/images/venue6.png",
                },
                {
                  title: "🏛️ India's Biggest Hall",
                  image: "src/assets/images/venue3.png",
                },

                {
                  title: "🎤 Exhibition & Conference Hall",
                  image: "src/assets/images/venue4.png",
                },
                {
                  title: "🌳 Panch Pallava",
                  image: "src/assets/images/venue5.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
                >
                  <img
                    src={item.image}
                    alt={item.title || `venue-${index + 1}`}
                    className="w-full h-60 object-cover rounded-lg mb-4"
                  />
                  {item.title && (
                    <h4 className="text-lg font-medium text-center text-gray-800">
                      {item.title}
                    </h4>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 mt-8">
            <iframe
              title="Venue Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.634587264589!2d78.13092337531953!3d29.932625076615988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390948a0eafffffb%3A0x87c2549286adaa2c!2sShri%20Prem%20Nagar%20Ashram%2C%20Haridwar!5e0!3m2!1sen!2sin!4v1718969867890!5m2!1sen!2sin"
              className="w-full h-[400px] rounded-xl border"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How to Reach</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  <strong>By Air:</strong> Jolly Grant Airport, Dehradun
                  (Approx. 42 km)
                </li>
                <li>
                  <strong>By Train:</strong> Haridwar Railway Station (Approx. 4
                  km) or Jwalapur Station (Approx. 2 km)
                </li>
                <li>
                  <strong>By Road:</strong> Well connected via national highways
                  and public/private buses from all major cities
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nearby Stay Options
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Shri Prem Nagar Ashram (On Venue)</li>
                <li>Hotel Ganga Exotica</li>
                <li>La Casa Hotel, Haridwar</li>
                <li>Hotel Godwin Haridwar</li>
                <li>Hotel Urmi</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6">
            <SectionTitle>Accommodation Request Form</SectionTitle>
            <a
              href="https://forms.gle/8XmJT2QGN39MZpP18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-primary-dark transition"
            >
              Fill the Form
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Scan the QR code or click above to register
            </p>
            <img
              src="src/assets/Accomodation.png"
              alt="Scan QR for Accommodation Form"
              className="w-80 mx-auto mt-6 mb-8"
            />
          </div>

          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Venue & Accomodation Contact Info
            </h3>
            <p className="text-gray-700">For venue-related queries, contact:</p>
            <p className="text-green-800 font-medium mt-2">
              Dr. Vaibhav Mishra
            </p>
            <p>Email: ayurvedakumbh@gmail.com</p>
            <p>Phone: +91-9984276035</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Venue;
