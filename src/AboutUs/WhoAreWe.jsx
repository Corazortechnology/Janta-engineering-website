import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import WhatsAppIcon from "../Components/WhatsAppIcon";

function WhoAreWe() {
  return (
    <>
      <Navbar />
      <div className="text-center md:px-10 md:pb-10 pt-10 text-2xl font-black">
        ABOUT US
      </div>
      <div className=" text-center min-h-screen px-20 py-10 font-medium text-lg">
        <p className="text-start mb-5">
          JANTA ENGNEERING (JE) came into existence in a small way in 1970 and gradually developed into a strong team of designers and engineers working cohesively to manufacture precision testing equipment for pulp, paper, paper board, conversion, and allied Industries. Its engineering expertise grew so tremendously that it diversified its product portfolio to include handmade paper machines as well as paint production machines used in producing Prakritik paint. Today, JE occupies the status of a globally recognized company both in domestic and export markets.

        </p>
        <p className="text-start mb-5">
          JE is committed to Total Quality Management principles i.e., adhering to a continuous review and improvement based on performance feedback from the customers and production shops while simultaneously keeping pace with the developing trends elsewhere. It has achieved international recognition for its quality systems by securing ISO-9001. JE has relevant preventive maintenance and calibration services to assist the industry in meeting its future requirements.

        </p>
        <p className="text-start mb-5">
          The unit has adequate and elaborate facilities for designing, manufacturing, testing, and calibration of its machines. The infrastructure comprises all requisite operations to carry out processes from concept to commissioning including intensive calibration in our own labs well equipped with standard calibrated instruments/equipment as per the national and international test norms. JE has highly skilled and experienced manpower to meet today’s customer requirements and to respond rapidly to future opportunities. JE’s designers, engineers, technicians, and field service personnel have one common overriding objective to upgrade and improve the design, production, and testing technology helping to enhance the quality of our products on a continuous basis.

        </p>
        <p className="text-start mb-5">
          JE believes in customer satisfaction through rigorous quality assurance systems to ensure the right and the best quality at all stages. JE provides maintenance and calibration services to eliminate equipment failure and reduce malfunction to a minimum.

        </p>
        <p className="text-start mb-5">
          Besides the above operations, the company has an ambitious growth plan to extend its areas of operations and to emerge as a valuable associate of renowned international companies.

        </p>
      </div>
      <div className="fixed bottom-5 right-5">
        <WhatsAppIcon phoneNumber="9084730912" />
      </div>
      <Footer />
    </>
  );
}

export default WhoAreWe;
