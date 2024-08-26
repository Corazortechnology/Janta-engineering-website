import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function ServiceAndCalibration() {
  return (
    <>
      <Navbar />
      <div className="text-center md:px-10 md:pb-10 pt-10 text-2xl font-black">
        SERVICE AND CALIBRATION
      </div>
      <div className=" text-center min-h-screen px-20 py-10 font-medium text-lg">
        <h3 className="text-start mb-2 c-black text-1xl md:text-2xl">AFTER SALES SUPPORT</h3>
        <p className="text-start mb-10 text-sm md:text-base">
          JE is relentlessly engaged in customer satisfaction by providing prompt after sales services.
          We believe in Total Quality Control with an emphasis on innovation rather than modification.
          We focus on technology, quality, reliability, service and costs in order to make innovative
          solutions available to our customers at total minimal costs. We provide prompt response to the
          calls of the customers and there are several service engineers to provide prompt services for
          installation, demonstration & rectification, globally. Our local agents in the buyer's home
          country handle most of the cases. Moreover, our head office also provides one line support with
          full technical support by the means of telephone or by Internet. Our documentation department
          prepares up to date manuals & technical documents of our broad product portfolio for ease of use.
          Calibration & testing procedures are now becoming easy with the help of Demo & Installation video
          CD that we provide with each of the equipment.
        </p>

        <h3 className="text-start mb-2 c-black text-1xl md:text-2xl">CALIBRATION CERTIFICATES</h3>
        <p className="text-start mb-10 text-sm md:text-base">
          A Calibration Certificate is provided with each of the new equipment absolutely free i.e. valid for 1 year. After the warranty period expires, the Calibration certificate can be issued again after calibrating the equipment at customer's site on chargeable basis. (Terms and Conditions Applied. It varies from site to site)        </p>
        <h3 className="text-start mb-2 c-black text-1xl md:text-2xl">ANNUAL MAINTENANCE CONTRACT (AMC)</h3>
        <p className="text-start mb-10 text-sm md:text-base">
          We also provide Annual Maintenance Contract (AMC) facility for servicing, rectification & calibration of the supplied equipment. Every instrument in your laboratory under the AMC contract will be calibrated using industry-wide, internationally recognized standards. The machines are labeled and documented with a JE calibration record. All calibration records are maintained in JE's own database, and copies are furnished to you following each visit as well as upon request.  Through this system of scheduled maintenance, JE can help you improve productivity by reducing the need for service calls, thus reducing downtime.        </p>
        <h3 className="text-start mb-2 c-black text-1xl md:text-2xl">AVAILABILITY OF SPARE PARTS</h3>
        <p className="text-start mb-10 text-sm md:text-base">
          JE provides adequate spare parts and consumables and is committed to supporting its products for as long as is economical and practicable to do so. The spare parts of all the equipment present in this catalog are ex-stock most of the times. If they are not available in some of the special cases then they can be manufactured on customer’s request.         </p>

      </div>
      <Footer />
    </>
  );
}

export default ServiceAndCalibration;
