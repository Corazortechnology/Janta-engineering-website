import React from "react";
import whatsapp from "../assets/photo/whatsapp-icon-png.png";

const WhatsAppIcon = ({ phoneNumber }) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer text-green-500 hover:text-green-700 text-6xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 h-16 w-16 rounded-full md:h-20 md:w-20"
    >
      <img
        src={whatsapp}
        alt="whatsapp"
        className="object-contain h-16 w-16 rounded-full md:h-20 md:w-20"
      />
    </div>
  );
};

export default WhatsAppIcon;
