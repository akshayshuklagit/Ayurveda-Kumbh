import { Link } from "react-router-dom";
import { FaUserAlt, FaStore, FaFileAlt } from "react-icons/fa";
import PageHeader from "../components/common/PageHeader";
import SectionTitle from "../components/common/SectionTitle";

const Registration = () => {
  const registrationTypes = [
    {
      icon: <FaUserAlt className="text-5xl text-primary mb-4" />,
      title: "Delegate Registration",
      description:
        "Register as a delegate to attend all sessions, workshops, and events. Access to exhibition area, cultural programs, and networking opportunities.",
      features: [
        "Full access to conference sessions",
        "Workshop participation",
        "Networking events",
        "Lunch and refreshments",
        "Conference kit and materials",
        "Certificate of participation",
      ],
      path: "/registration/delegate",
      buttonText: "Register as Delegate",
    },
    {
      icon: <FaStore className="text-5xl text-primary mb-4" />,
      title: "Vendor / Exhibitor",
      description:
        "Book a booth to showcase your products and services. Connect with potential customers, partners, and investors.",
      features: [
        "Exhibition booth space",
        "Company listing in event directory",
        "Marketing opportunities",
        "Access to business networking events",
        "Dedicated support staff",
        "Booth setup assistance",
      ],
      path: "/registration/vendor",
      buttonText: "Book Exhibition Space",
    },
    {
      icon: <FaFileAlt className="text-5xl text-primary mb-4" />,
      title: "Call for Papers / Posters",
      description:
        "Submit your research papers, posters, or demonstration proposals for presentation at the conference.",
      features: [
        "Opportunity to present research",
        "Publication in conference proceedings",
        "Feedback from expert panel",
        "Networking with fellow researchers",
        "Certificate of presentation",
        "Awards for best papers/posters",
      ],
      path: "/registration/call-for-papers",
      buttonText: "Submit Your Work",
    },
  ];

  return (
    <>
      <PageHeader
        title="Registration"
        breadcrumbs={[{ label: "Registration" }]}
      />

      {/* Registration Options */}
      <section className="section bg-background">
        <div className="container">
          <SectionTitle>Choose Registration Type</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {registrationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 text-center border-b border-gray-200">
                  {type.icon}
                  <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-4 text-gray-700">
                    What's Included:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={type.path}
                    className="block w-full text-center btn btn-primary"
                  >
                    {type.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>Registration Information</SectionTitle>
            <div className="bg-background p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Important Dates</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Early Bird Registration Deadline:</span>
                  <span className="font-medium">August 15, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Regular Registration Deadline:</span>
                  <span className="font-medium">September 30, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Late Registration:</span>
                  <span className="font-medium">October 1-10, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Abstract Submission Deadline:</span>
                  <span className="font-medium">August 31, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Notification of Acceptance:</span>
                  <span className="font-medium">September 15, 2025</span>
                </li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
              <p className="mb-4">
                We accept the following payment methods for registration fees:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Credit/Debit Cards (Visa, MasterCard, American Express)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Net Banking (All major Indian banks)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>UPI Payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    International Wire Transfer (for overseas participants)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Cancellation Policy</h3>
              <p className="mb-4">
                Please review our cancellation policy before completing your
                registration:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Cancellations received before September 15, 2025: 75% refund
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Cancellations received between September 16-30, 2025: 50%
                    refund
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Cancellations received after October 1, 2025: No refund
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    All cancellation requests must be submitted in writing to
                    registrations@ayurvedakumbh.org
                  </span>
                </li>
              </ul>
              <p className="mt-4">
                For detailed information about our refund policy, please visit
                our{" "}
                <Link
                  to="/refund-policy"
                  className="text-primary hover:underline"
                >
                  Refund Policy
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Assistance */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Need Assistance?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our registration team is here to help you with any questions or
            concerns regarding the registration process.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="mailto:registrations@ayurvedakumbh.org"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Email Us
            </a>
            <a
              href="tel:+91 9984276035"
              className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary"
            >
              Call: +91 9984276035
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
