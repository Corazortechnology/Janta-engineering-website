import React, { useState } from "react";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import Navbar from "./Navbar";
import WhatsAppIcon from "./WhatsAppIcon";

const EquipmentCategoryDetailPage = () => {
  const location = useLocation();
  const { product } = location.state || {};
  // console.log(product);
  // console.log(product, "fkmsdkfm");
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [activeTab, setActiveTab] = useState("description");

  const handleClick = () => {
    alert("This features will be available soon...");
  };

  const handleQuestion = () => {
    alert("This features will be available soon...");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen">
        <div className="container mx-auto sm:p-16 px-4 py-10 flex-grow">
          <div className="font-bold text-gray-600 w-full p-10 mb-10 border rounded-md bg-gray-100">
            {product.category}
          </div>
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Image Gallery */}
            <div className="md:w-1/2 flex flex-col items-center">
              <div className="relative w-full h-96 overflow-hidden group border rounded-md">
                <img
                  src={selectedImage}
                  alt="Main"
                  className=" w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-150"
                />
              </div>
              <div className="flex mt-4 space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-20 h-20 overflow-hidden border rounded-sm cursor-pointer ${
                      selectedImage === image
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Product Information */}
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.productName}
              </h1>
              <div className="border-b border-gray-300">
                <button
                  className={`py-2 px-4 font-bold text-gray-600 ${
                    activeTab === "description"
                      ? "border-b-2 border-blue-500"
                      : ""
                  }`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
                <button
                  className={`py-2 px-4 font-bold text-gray-600${
                    activeTab === "details" ? "border-b-2 border-blue-500" : ""
                  }`}
                  onClick={() => setActiveTab("details")}
                >
                  Details
                </button>
                <button
                  className={`py-2 px-4 font-bold text-gray-600${
                    activeTab === "consumables"
                      ? "border-b-2 border-blue-500"
                      : ""
                  }`}
                  onClick={() => setActiveTab("consumables")}
                >
                  Consumables
                </button>
              </div>

              <div className="mt-4">
                {activeTab === "description" && (
                  <>
                    <p className="text-gray-700">{product.description}</p>
                    {product?.extras && (
                      <p className="text-gray-700 pt-10">{product.extras}</p>
                    )}
                  </>
                )}
                {activeTab === "details" && (
                  <table className="w-full text-left">
                    <tbody>
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-300 font-medium text-gray-700">
                          Product Code
                        </th>
                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                          {/* {product.productCode} */}
                        </td>
                      </tr>
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-200 font-medium text-gray-700">
                          Equipment Category
                        </th>
                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                          {product.category}
                        </td>
                      </tr>
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-200 font-medium text-gray-700">
                          Weight
                        </th>
                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                          {product.weight}
                        </td>
                      </tr>
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-200 font-medium text-gray-700">
                          Dimension
                        </th>
                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                          {product.dimension}
                        </td>
                      </tr>
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-200 font-medium text-gray-700">
                          Applicable Standards
                        </th>
                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                          {product.applicableStandards}
                        </td>
                      </tr>
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-200 font-medium text-gray-700">
                          Range Available
                        </th>
                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                          {product.rangeAvailable ? product.rangeAvailable : ""}
                        </td>
                      </tr>
                      {product.testingApplications ? (
                        <tr>
                          <th className="py-2 px-4 border-b border-gray-200 font-medium text-gray-700">
                            Testing Applications
                          </th>
                          <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                            {product.testingApplications}
                          </td>
                        </tr>
                      ) : (
                        ""
                      )}
                    </tbody>
                  </table>
                )}
                {activeTab === "consumables" && (
                  <table className="w-full text-left">
                    <tbody>
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-200 font-medium text-gray-700">
                          Accessories
                        </th>
                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                          {product.accessories}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
              <div className="mt-20 flex justify-start items-center">
                <div className="flex justify-between w-full">
                  <Button
                    onClick={handleClick}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    SEND AN ENQUIRY
                  </Button>
                  <Button
                    onClick={handleQuestion}
                    className="bg-yellow-400 hover:bg-yellow-500"
                  >
                    ASK A QUESTION
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-5 right-5">
          <WhatsAppIcon phoneNumber="9084730912" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EquipmentCategoryDetailPage;
