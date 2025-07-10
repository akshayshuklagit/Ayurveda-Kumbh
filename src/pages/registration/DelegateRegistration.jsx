import { useState } from "react";
import { FaDownload, FaCheck } from "react-icons/fa";
import PageHeader from "../../components/common/PageHeader";
import SectionTitle from "../../components/common/SectionTitle";
import CountdownTimer from "../../components/home/CountdownTimer";
import {
  FaUserGraduate,
  FaHandHoldingHeart,
  FaCertificate,
  FaChalkboardTeacher,
} from "react-icons/fa";

const DelegateRegistration = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: "bams-scholar",
      name: "BAMS Scholar",
      price: 1500,
      originalPrice: 2000,
      deadline: "₹1500 before June 30, ₹2000 after June 30, ₹2500 on-spot",
      features: [
        "Kumbh Kit",
        "Breakfast and Lunch",
        "Certificate",
        "Access to all events and exhibitions",
      ],
      earlybirds: true,
    },
    {
      id: "pg-phd-scholar",
      name: "PG/PhD Scholar",
      price: 2000,
      originalPrice: 2500,
      deadline: "₹2000 before June 30, ₹2500 after June 30, ₹3000 on-spot",
      features: [
        "Kumbh Kit",
        "Breakfast and Lunch",
        "Certificate",
        "Access to all events and exhibitions",
      ],
      earlybirds: true,
    },
    {
      id: "practitioner-faculty",
      name: "Practitioner/Faculty",
      price: 2000,
      originalPrice: 2500,
      deadline: "₹2000 before June 30, ₹2500 after June 30, ₹3000 on-spot",
      features: [
        "Kumbh Kit",
        "Breakfast and Lunch",
        "Certificate",
        "Access to all events and exhibitions",
      ],
      earlybirds: true,
    },
    {
      id: "others",
      name: "Others",
      price: 2000,
      originalPrice: 2500,
      deadline: "₹2000 before June 30, ₹2500 after June 30, ₹3000 on-spot",
      features: [
        "Kumbh Kit",
        "Breakfast and Lunch",
        "Certificate",
        "Access to all events and exhibitions",
      ],
      earlybirds: true,
    },
  ];

  return (
    <>
      <PageHeader
        title="Delegate Registration"
        breadcrumbs={[
          { label: "Registration", path: "/registration" },
          { label: "Delegate Registration" },
        ]}
      />

      <section className="section bg-white">
        <div className="container max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Join as a Delegate at Ayurveda Kumbh 2025
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
            We warmly invite Ayurvedic professionals, researchers, scholars, and
            wellness enthusiasts to register as delegates for
            <span className="font-semibold text-primary">
              {" "}
              Ayurveda Kumbh 2025
            </span>{" "}
            — a grand confluence of Ayurveda, Health, and Spirituality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-gray-800">
            {/* Who Can Register */}
            <div className="bg-background p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                <FaUserGraduate className="mr-2 text-xl" />
                Who Can Register?
              </h3>
              <ul className="space-y-2 list-inside list-disc">
                <li>BAMS, PG, and PhD Scholars</li>
                <li>Ayurvedic Practitioners & Faculty Members</li>
                <li>Integrative Medicine & Modern Medical Professionals</li>
                <li>Wellness Coaches & Yoga Instructors</li>
                <li>Anyone interested in Ayurveda & Spirituality</li>
              </ul>
            </div>

            {/* Why Register */}
            <div className="bg-background p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                <FaHandHoldingHeart className="mr-2 text-xl" />
                Why Register?
              </h3>
              <ul className="space-y-2 list-inside list-disc">
                <li>Access keynote talks and panel discussions</li>
                <li>Participate in cultural & spiritual sessions</li>
                <li>Receive Delegate Kit and Participation Certificate</li>
                <li>Engage with global Ayurveda experts</li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-gray-700 text-base max-w-2xl mx-auto">
            Choose the registration plan that suits you best and complete your
            form below.
            <span className="text-primary font-semibold">
              {" "}
              Limited seats available!
            </span>
          </p>
        </div>
      </section>
      {/* Registration Plans */}
      <section className="section bg-background">
        <div className="container">
          <SectionTitle>Select Registration Plan</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`bg-white rounded-lg shadow-lg overflow-hidden border-2 transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? "border-primary scale-105"
                    : "border-transparent hover:border-gray-200"
                } ${plan.earlybirds ? "relative" : ""}`}
              >
                {plan.earlybirds && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    EARLYBIRDS
                  </div>
                )}
                <div className="p-6 text-center border-b border-gray-200">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex justify-center items-baseline mb-4">
                    <span className="text-3xl font-extrabold">
                      ₹{plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">
                        ₹{plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{plan.deadline}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`w-full py-2 px-4 rounded-md transition-colors duration-300 text-center
    ${
      selectedPlan === plan.id
        ? "bg-primary text-white"
        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
    }`}
                    onClick={() => {
                      if (selectedPlan === plan.id) {
                        // Replace with your actual Google Form link
                        window.open(
                          "https://forms.gle/57ADgXhiYJFLSVzV8",
                          "_blank"
                        );
                      } else {
                        setSelectedPlan(plan.id);
                      }
                    }}
                  >
                    {selectedPlan === plan.id
                      ? "Proceed to register "
                      : "Select Plan"}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Brochure */}
          <div className="text-center mb-12">
            <a
              href="/Ayurveda kumbh 2025.pdf"
              download
              className="inline-flex items-center btn btn-secondary"
            >
              <FaDownload className="mr-2" />
              Download Event Brochure
            </a>
          </div>
        </div>
      </section>
      {/* Registration Form */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle>Register Now</SectionTitle>

          <div className="max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-md text-center">
            <p className="text-lg text-gray-700 mb-6">
              You can register by scanning the QR code or by clicking the button
              below.
            </p>

            {/* Google Form Button */}
            <a
              href="https://forms.gle/57ADgXhiYJFLSVzV8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-primary-dark transition mb-8"
            >
              Fill The Registration Form
            </a>

            {/* QR Code Image */}
            <div className="flex justify-center">
              <div className="text-center">
                <img
                  src="/src/assets/deligate-registeration-qr.png"
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

      {/* Registration Benefits */}
      <section className="section bg-background">
        <div className="container">
          <SectionTitle>Benefits of Attending</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Knowledge Enrichment
              </h3>
              <p>
                Gain insights from renowned Ayurvedic practitioners,
                researchers, and spiritual leaders. Expand your understanding of
                traditional healing practices and modern applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Networking Opportunities
              </h3>
              <p>
                Connect with like-minded individuals, potential collaborators,
                and industry experts. Build relationships that can lead to
                future partnerships and opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Hands-on Experience
              </h3>
              <p>
                Participate in interactive workshops, demonstrations, and
                practical sessions. Learn techniques and practices that you can
                implement immediately.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Spiritual Growth
              </h3>
              <p>
                Immerse yourself in a spiritually enriching environment with
                meditation sessions, yoga practices, and sacred rituals. Nurture
                your inner well-being alongside your professional development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Professional Development
              </h3>
              <p>
                Earn a certificate of participation that enhances your
                professional credentials. Stay updated with the latest trends
                and developments in Ayurvedic medicine and holistic health.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Cultural Immersion
              </h3>
              <p>
                Experience the rich cultural heritage of Ayurveda through
                cultural performances, traditional ceremonies, and authentic
                Ayurvedic cuisine. Connect with the roots of this ancient
                healing system.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle>What Previous Delegates Say</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Dr. Rajesh Sharma</h4>
                  <p className="text-sm text-gray-600">
                    Ayurvedic Physician, Delhi
                  </p>
                </div>
              </div>
              <p className="italic">
                "Attending Ayurveda Kumbh was a transformative experience. The
                knowledge shared by experts was invaluable, and the networking
                opportunities helped me establish connections that have
                benefited my practice tremendously."
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Dr. Priya Patel</h4>
                  <p className="text-sm text-gray-600">
                    Researcher, Mumbai University
                  </p>
                </div>
              </div>
              <p className="italic">
                "The quality of presentations and discussions at Ayurveda Kumbh
                was exceptional. I gained new perspectives on my research and
                formed collaborations that have led to joint research projects."
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Wellness Coach, USA</p>
                </div>
              </div>
              <p className="italic">
                "As an international delegate, I was amazed by the warm
                hospitality and the depth of knowledge shared. The practical
                workshops gave me tools I now use daily in my wellness coaching
                practice."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="section bg-background">
        <div className="container">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                What is included in the registration fee?
              </h3>
              <p>
                The registration fee includes access to all conference sessions,
                workshops (as per your registration type), networking events,
                lunch and refreshments during the event days, conference kit and
                materials, and a certificate of participation.
              </p>
            </div>
            <div className="mb-6"></div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                Is accommodation included in the registration fee?
              </h3>
              <p>
                No, accommodation is not included in the registration fee.
                However, we have partnered with several hotels near the venue to
                provide special rates for our delegates. Please visit the Venue
                & Accommodation page for more information.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                Can I transfer my registration to someone else?
              </h3>
              <p>
                Yes, registration transfers are allowed until September 30,
                2025. Please contact our registration team with the details of
                the new attendee.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Will I receive a certificate of participation?
              </h3>
              <p>
                Yes, all registered delegates will receive a certificate of
                participation. The certificates will be provided digitally after
                the event, and you will be able to download them from your
                registration account.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DelegateRegistration;
