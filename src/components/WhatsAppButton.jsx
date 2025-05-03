// src/components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = ({ phoneNumber }) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 border-2 border-black text-black px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
    WhatsApp
    </a>
  );
};

export default WhatsAppButton;
