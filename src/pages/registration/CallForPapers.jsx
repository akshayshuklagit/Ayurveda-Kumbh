import { useState } from "react";
import { FaDownload, FaUpload, FaInfoCircle } from "react-icons/fa";
import PageHeader from "../../components/common/PageHeader";
import SectionTitle from "../../components/common/SectionTitle";

const CallForPapers = () => {
  const [submissionType, setSubmissionType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    title: "",
    abstract: "",
    keywords: "",
    category: "",
    presentationType: "",
    coAuthors: "",
    file: null,
    agreeTerms: false,
    agreePublish: false,
  });

  const categories = [
    "Ayurvedic Pharmacology",
    "Clinical Research in Ayurveda",
    "Ayurvedic Diagnostics",
    "Preventive and Social Medicine in Ayurveda",
    "Ayurvedic Pharmaceutics",
    "Integrative Medicine",
    "Ayurvedic Nutrition and Dietetics",
    "Yoga and Meditation",
    "Traditional Knowledge Systems",
    "Medicinal Plants and Natural Products",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!submissionType) {
      alert("Please select a submission type");
      return;
    }
    if (!formData.agreeTerms || !formData.agreePublish) {
      alert("Please agree to all terms and conditions");
      return;
    }

    // In a real application, this would submit to a backend API
    console.log("Form submitted:", { ...formData, submissionType });
    alert(
      "Your submission has been received successfully! You will receive a confirmation email shortly."
    );
  };

  return (
    <>
      <PageHeader
        title="Call for Papers / Posters"
        breadcrumbs={[
          { label: "Registration", path: "/registration" },
          { label: "Call for Papers / Posters" },
        ]}
      />

      {/* Submission Guidelines */}
      <section className="section bg-background">
        <div className="container">
          <SectionTitle>Submission Guidelines</SectionTitle>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Important Dates</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Abstract Submission Deadline:</span>
                  <span className="font-medium">August 30, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Notification of Acceptance:</span>
                  <span className="font-medium">September 15, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Full Paper Submission Deadline:</span>
                  <span className="font-medium">September 30, 2025</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Submission Types</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Research Papers</h4>
                  <p className="mb-3">
                    Original research papers related to Ayurveda, traditional
                    medicine, integrative healthcare, and related fields.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Abstract: 250-300 words</li>
                    <li>Full Paper: 3000-5000 words</li>
                    <li>
                      Format: Introduction, Methodology, Results, Discussion,
                      Conclusion, References
                    </li>
                    <li>File Format: PDF or DOC/DOCX</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Review Papers</h4>
                  <p className="mb-3">
                    Comprehensive review of existing literature on topics
                    related to Ayurveda and traditional medicine.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Abstract: 250-300 words</li>
                    <li>Full Paper: 4000-6000 words</li>
                    <li>
                      Format: Introduction, Literature Review, Discussion,
                      Conclusion, References
                    </li>
                    <li>File Format: PDF or DOC/DOCX</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Case Studies</h4>
                  <p className="mb-3">
                    Detailed analysis of specific cases or interventions in
                    Ayurvedic practice.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Abstract: 250-300 words</li>
                    <li>Full Paper: 2000-3000 words</li>
                    <li>
                      Format: Introduction, Case Presentation, Discussion,
                      Conclusion, References
                    </li>
                    <li>File Format: PDF or DOC/DOCX</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Posters</h4>
                  <p className="mb-3">
                    Visual presentation of research findings, case studies, or
                    innovative concepts.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Abstract: 200-250 words</li>
                    <li>Poster Size: A0 (841 x 1189 mm) or 36" x 48"</li>
                    <li>
                      Format: Title, Authors, Introduction, Methods, Results,
                      Conclusion, References
                    </li>
                    <li>File Format: PDF (for submission)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="section bg-background">
        <div className="container">
          <SectionTitle>Select Submission Type</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div
              className={`bg-white rounded-lg shadow-lg overflow-hidden border-2 transition-all duration-300 ${
                submissionType === "paper"
                  ? "border-primary scale-105"
                  : "border-transparent hover:border-gray-200"
              }`}
              onClick={() => setSubmissionType("paper")}
            >
              <div className="p-6 text-center border-b border-gray-200">
                <h3 className="text-2xl font-bold mb-2">Research Paper</h3>
                <p className="text-gray-600">
                  Submit a full research paper, review paper, or case study
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Original research findings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Literature reviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Case studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Opportunity for oral presentation</span>
                  </li>
                </ul>
                <div
                  className={`w-full py-2 px-4 rounded-md text-center transition-colors duration-300 cursor-pointer ${
                    submissionType === "paper"
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => {
                    if (submissionType === "paper") {
                      window.open(
                        "https://forms.gle/57ADgXhiYJFLSVzV8",
                        "_blank"
                      );
                    } else {
                      setSubmissionType("paper");
                    }
                  }}
                >
                  {submissionType === "paper"
                    ? "Proceed to submit"
                    : "Select Paper Submission"}
                </div>
              </div>
            </div>

            <div
              className={`bg-white rounded-lg shadow-lg overflow-hidden border-2 transition-all duration-300 ${
                submissionType === "poster"
                  ? "border-primary scale-105"
                  : "border-transparent hover:border-gray-200"
              }`}
              onClick={() => setSubmissionType("poster")}
            >
              <div className="p-6 text-center border-b border-gray-200">
                <h3 className="text-2xl font-bold mb-2">Poster Presentation</h3>
                <p className="text-gray-600">
                  Submit a poster to present your research visually
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Visual presentation of research</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Ideal for preliminary results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Interactive discussion with attendees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Opportunity for poster awards</span>
                  </li>
                </ul>
                <div
                  className={`w-full py-2 px-4 rounded-md text-center transition-colors duration-300 cursor-pointer ${
                    submissionType === "poster"
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => {
                    if (submissionType === "poster") {
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSdlbbrXhCCxflEP9uPqbSlKIrfuPLOyBaihAQa8XeLh7EILtA/viewform?usp=header",
                        "_blank"
                      );
                    } else {
                      setSubmissionType("poster");
                    }
                  }}
                >
                  {submissionType === "poster"
                    ? "Proceed to submit"
                    : "Select Poster Submission"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <SectionTitle>Submit Now </SectionTitle>

          <div className="max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-md text-center">
            <p className="text-lg text-gray-700 mb-6">
              You can register by scanning the QR code or by clicking the button
              below.
            </p>

            {/* Google Form Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdlbbrXhCCxflEP9uPqbSlKIrfuPLOyBaihAQa8XeLh7EILtA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-primary-dark transition mb-8"
            >
              Fill the Submission form
            </a>

            {/* QR Code Image */}
            <div className="flex justify-center">
              <div className="text-center">
                <img
                  src="/src/assets/paperQR.png"
                  alt="Scan to Register"
                  className="w-56 h-56 mx-auto rounded shadow-md"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Scan this QR code to submit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Process */}
      <section className="section bg-background">
        <div className="container">
          <SectionTitle>Review Process</SectionTitle>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">
                      Initial Screening
                    </h4>
                    <p>
                      All submissions undergo an initial screening to ensure
                      they meet the basic requirements and fall within the scope
                      of the conference.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Peer Review</h4>
                    <p>
                      Each submission is reviewed by at least two experts in the
                      relevant field. The review process is double-blind to
                      ensure fairness and objectivity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Decision</h4>
                    <p>
                      Based on the peer reviews, submissions are either
                      accepted, accepted with revisions, or rejected. Authors
                      will be notified of the decision by email.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">
                      Revision (if required)
                    </h4>
                    <p>
                      Authors of submissions accepted with revisions will have
                      the opportunity to address the reviewers' comments and
                      submit a revised version.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Final Acceptance</h4>
                    <p>
                      After all requirements are met, authors will receive a
                      final acceptance notification along with presentation
                      guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaInfoCircle className="text-primary mr-2" />
                Selection Criteria
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Relevance:</strong> Alignment with the conference
                    themes and topics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Originality:</strong> Novel contributions to the
                    field
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Methodology:</strong> Sound research methods and
                    approach
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Significance:</strong> Potential impact on the field
                    of Ayurveda and traditional medicine
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Clarity:</strong> Well-structured and clearly
                    presented content
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Assistance */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Need Assistance?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our academic team is here to help you with any questions regarding
            paper submissions, review process, or presentation guidelines.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="mailto:papers@ayurvedakumbh.org"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Email Academic Committee
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

export default CallForPapers;
