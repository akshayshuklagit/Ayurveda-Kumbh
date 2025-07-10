import React from "react";

const TermsConditions = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <p>
        These terms and conditions govern your participation in the Ayurveda
        Kumbh event and use of our website.
      </p>
      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>
          By registering, you agree to receive event-related communication.
        </li>
        <li>All content provided is for informational purposes only.</li>
        <li>We reserve the right to modify the event schedule and content.</li>
        <li>
          Violation of terms may result in termination of access or
          participation.
        </li>
      </ul>
    </div>
  );
};

export default TermsConditions;
