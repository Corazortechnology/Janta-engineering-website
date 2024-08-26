import React from "react";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import ContactUs from "../Components/Contact";
import Blogs from "../Components/Blogs";
import Carousel from "../Components/Carousel";
import CategoryCards from "../Components/CategoryCard";
import WhatsAppIcon from "../Components/WhatsAppIcon";
import Navbar from "../Components/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <section className="flex items-center justify-center min-h-[300px] bg-gray-200 md:px-10 py-10">
        <div className="max-w-full text-start px-4">
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            JANTA ENGINEERING (JE) is a leading manufacturer and supplier of
            Precision Testing Instruments for the pulp, paper, and paperboard
            industries. Committed to Total Quality Management, JE continuously
            improves its products based on customer feedback and industry
            trends. The company offers comprehensive preventive maintenance and
            calibration services to meet industry needs, with in-house
            facilities for design, manufacturing, testing, and calibration
            adhering to national and international standards. With a team of
            skilled and experienced professionals, JE focuses on enhancing
            design, production, and testing technologies to ensure the highest
            quality of products. Customer satisfaction is at the core of JE's
            operations, supported by rigorous quality assurance systems. The
            company also plans to expand its operations and establish
            partnerships with renowned international companies.
          </p>
        </div>
      </section>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
        <CategoryCards />
      </div>
      <Testimonials />
      <Blogs />
      <ContactUs />
      <div className="fixed bottom-5 right-5">
        <WhatsAppIcon phoneNumber="9084730912" />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
