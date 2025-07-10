import React from "react";
import PageHeader from "../components/common/PageHeader";

const RefundPolicy = () => {
  return (
    <>
      <PageHeader>Refund Policy</PageHeader>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
        <p>
          Ayurveda Kumbh registrations are generally non-refundable. However,
          under special circumstances, refunds may be considered.
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>
            Requests for refunds must be made via email within 7 days of
            registration.
          </li>
          <li>Processing fees are non-refundable.</li>
          <li>Approved refunds will be credited within 10 business days.</li>
        </ul>
        <p className="mt-4">
          For any questions, please contact our support team.
        </p>
      </div>
    </>
  );
};

export default RefundPolicy;
