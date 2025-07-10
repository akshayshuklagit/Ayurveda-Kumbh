import React from "react";
import PageHeader from "../components/common/PageHeader";

const PrivacyPolicy = () => {
  return (
    <>
      <PageHeader>Privacy Policy</PageHeader>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p>
          This Privacy Policy explains how we handle your personal data at the
          Ayurveda Kumbh event. We respect your privacy and are committed to
          protecting your information.
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>
            We collect only necessary data such as name, email, and contact
            number.
          </li>
          <li>
            Data is used for registration, communication, and event-related
            updates.
          </li>
          <li>
            We never share your data with third parties without your consent.
          </li>
          <li>You can request deletion of your data by contacting us.</li>
        </ul>
      </div>
    </>
  );
};

export default PrivacyPolicy;
