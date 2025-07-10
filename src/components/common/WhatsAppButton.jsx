import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "+919984276035";

  const message = "Hello, I Have a Query in AyurvedaKumbh !";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <img
        src="https://img.icons8.com/ios-filled/30/ffffff/whatsapp.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
