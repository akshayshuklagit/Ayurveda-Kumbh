import { useState } from "react";
import {
  FaDownload,
  FaCheck,
  FaInfoCircle,
  FaUserGraduate,
  FaHandHoldingHeart,
} from "react-icons/fa";
import PageHeader from "../../components/common/PageHeader";
import SectionTitle from "../../components/common/SectionTitle";

const VendorRegistration = () => {
  const [selectedBooth, setSelectedBooth] = useState(null);

  const boothOptions = [
    {
      id: "premium",
      name: "Build Up Booth",
      size: "(Minimum-9 sq.m)",
      price: "5500/SQM+ (18 % GST)",
      available: 5,
      recommended: true,
    },
    {
      id: "standard",
      name: "Bare Space",
      size: "(Minimum-18 sq.m)",
      price: "5000/SQM+ (18 % GST)",
    },
  ];

  return (
    <>
      <PageHeader
        title="Vendor / Exhibitor Registration"
        breadcrumbs={[
          { label: "Registration", path: "/registration" },
          { label: "Vendor / Exhibitor Registration" },
        ]}
      />

      {/* Booth Information */}
      <section className="section bg-background">
        <div className="container">
          <SectionTitle>Exhibition Opportunities</SectionTitle>

          <section className="section bg-white">
            <div className="container max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Register to Exhibit at Ayurveda Kumbh 2025
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
                Showcase your products, innovations, or services to thousands of
                attendees at
                <span className="font-semibold text-primary">
                  {" "}
                  Ayurveda Kumbh 2025
                </span>{" "}
                — the grand confluence of Ayurveda, Health, and Spirituality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-left text-gray-800 justify-center ">
                <div className="max-w-4xl mx-auto mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h3 className="text-xl font-bold mb-4">
                      Why Exhibit at Ayurveda Kumbh?
                    </h3>
                    <ul className="space-y-3">
                      {[
                        {
                          title: "Connect with Your Target Audience",
                          desc: "Meet over 5,000+ attendees including Ayurvedic practitioners, researchers, students, and wellness enthusiasts.",
                        },
                        {
                          title: "Showcase Your Products",
                          desc: "Demonstrate your products and services to a highly engaged audience interested in Ayurveda and holistic wellness.",
                        },
                        {
                          title: "Build Brand Awareness",
                          desc: "Increase visibility for your brand among key decision-makers in the Ayurveda and wellness industry.",
                        },
                        {
                          title: "Generate Leads",
                          desc: "Collect qualified leads and expand your customer base.",
                        },
                        {
                          title: "Network with Industry Leaders",
                          desc: "Connect with key stakeholders, potential partners, and industry influencers.",
                        },
                      ].map((item, index) => (
                        <li className="flex items-start" key={index}>
                          <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                          <span>
                            <strong>{item.title}:</strong> {item.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-gray-700 text-base max-w-2xl mx-auto">
                Choose your exhibition plan and confirm your space below.
                <span className="text-primary font-semibold">
                  {" "}
                  Limited slots available!
                </span>
              </p>
            </div>
          </section>

          {/* Download Exhibitor Prospectus */}
          <div className="text-center mb-8 mt-8">
            <a
              href="/exhibationProspectus.pdf"
              download
              className="inline-flex items-center btn btn-secondary"
            >
              <FaDownload className="mr-2" />
              Download Exhibitor Prospectus
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <SectionTitle>Glimpses of Previous Exhibitions</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mb-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <img
            key={i}
            src={`/assets/exhibition/ex${i}.jpg`}
            alt={`Exhibition ${i}`}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        ))}
      </div>

      {/* Booth Type */}
      <SectionTitle>Select Booth Type</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {boothOptions.map((booth) => (
          <div
            key={booth.id}
            onClick={() => setSelectedBooth(booth.id)}
            className={`bg-white rounded-lg shadow-lg overflow-hidden border-2 transition-all duration-300 ${
              selectedBooth === booth.id
                ? "border-primary scale-105"
                : "border-transparent hover:border-gray-200"
            } ${booth.recommended ? "relative" : ""}`}
          >
            {booth.recommended && (
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMMENDED
              </div>
            )}
            <div className="p-6 text-center border-b border-gray-200">
              <h3 className="text-2xl font-bold mb-2">{booth.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{booth.size}</p>
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-xl font-semibold">₹{booth.price}</span>
              </div>
              <p className="text-sm text-green-600">
                {booth.available} booths available
              </p>
            </div>
            <button
              className={`w-full py-2 px-4 rounded-md transition-colors duration-300 ${
                selectedBooth === booth.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => {
                if (selectedBooth === booth.id) {
                  window.open("https://forms.gle/JTHgMvswJ7j2nBXf7", "_blank");
                } else {
                  setSelectedBooth(booth.id);
                }
              }}
            >
              {selectedBooth === booth.id
                ? "Proceed To Register"
                : "Select Booth"}
            </button>
          </div>
        ))}
      </div>

      {/* Registration & QR */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle>Exhibition Registration</SectionTitle>
          <div className="max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-md text-center">
            <p className="text-lg text-gray-700 mb-6">
              You can register by scanning the QR code or by clicking the button
              below.
            </p>
            <a
              href="https://forms.gle/JTHgMvswJ7j2nBXf7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-primary-dark transition mb-8"
            >
              Fill The Registration Form
            </a>
            <div className="flex justify-center">
              <div className="text-center">
                <img
                  src="/assets/exhibition-register-qr.png"
                  alt="Scan to Register"
                  className="w-56 h-56 mx-auto rounded shadow-md"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Scan this QR code to register
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan */}
      <section className="section">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Exhibition Floor Plan</h3>
            <div className="bg-gray-200 p-4 rounded-md text-center mb-4">
              <div className="h-64 flex items-center justify-center border border-dashed border-gray-400 rounded-md">
                <img
                  src="/assets/exhibationlayout.png"
                  alt="Exhibition Floor Plan"
                  className="max-h-full max-w-full"
                />
              </div>
            </div>
            <div className="flex items-start mb-4">
              <FaInfoCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
              <p className="text-sm">
                Premium booths are located near entrances and high-traffic
                areas.
              </p>
            </div>
            <div className="flex items-start">
              <FaInfoCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
              <p className="text-sm">
                After your registration is confirmed, you'll be able to select
                your booth location based on availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Need Assistance?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our exhibitor support team is here to help you with any questions
            regarding booth registration, setup, or special requirements.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="mailto:exhibitors@ayurvedakumbh.org"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Email Exhibitor Support
            </a>
            <a
              href="tel:+91 7011761340"
              className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary"
            >
              Call: +91 7011761340
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorRegistration;
