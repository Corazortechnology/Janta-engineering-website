import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"; // Heroicons is a popular icon library

const CautionBox = () => {
  return (
    <div className="bg-yellow-100 border-2-4 border-yellow-400 text-yellow-700 p-4 rounded-lg flex items-start shadow-md mx-20 mb-5">
      <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mr-3" />
      <div>
        <h4 className="font-bold mb-2">PHYSICAL PROPERTY TESTING EQUIPMENT</h4>
        <p className="text-sm">
          The production of paper is a multifaceted process that aims to achieve
          a high-quality end product suitable for printing, converting,
          packaging, and various other applications. The outcome is influenced
          by several factors, including its thickness, bursting strength,
          stiffness, roughness, tensile strength, water absorbency, etc. UEC
          offers a comprehensive range of products that cater to all your paper
          testing requirements, ensuring optimal results.
        </p>
      </div>
    </div>
  );
};

export default CautionBox;
