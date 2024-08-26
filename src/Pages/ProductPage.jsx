import { Spinner } from "@material-tailwind/react";
import CautionBox from "../Components/CautionBox";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import WhatsAppIcon from "../Components/WhatsAppIcon";

const ProductPage = () => {
  const location = useLocation();
  const { title } = location.state || "";

  const [equipmentData, setEquipmentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getEquipment = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://janta-engineering-server.onrender.com/api/v1/equipment/equipment"
      );
      const result = await response.json();

      if (result.success) {
        setIsLoading(false);
        if (!title) {
          return setEquipmentData(result.equipment);
        }
        const filteredCategory = result.equipment.filter((ele) => {
          return (
            ele.category.toLowerCase() == title.toLowerCase(result.equipment)
          );
        });

        setEquipmentData(filteredCategory);
      } else {
        setIsLoading(false);
        console.error("Failed to fetch equipment data:", result.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching equipment data:", error);
    }
  };

  useEffect(() => {
    getEquipment();
  }, [title]);

  return (
    <div>
      <Navbar />
      <div className="p-4 md:p-8 flex flex-col">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-3">
          Engineering Products
        </h2>
        <hr className="border-b-2 border-blue-500 w-20 mx-auto mt-2 mb-6" />
        <div className="font-bold text-gray-600 w-full p-10 mb-10 border rounded-md bg-gray-100">
          {title ? title : "All Products"}
        </div>
        <CautionBox />
        <div className="min-h-screen flex flex-wrap gap-4 justify-center">
          {isLoading ? (
            <Spinner />
          ) : equipmentData.length == 0 ? (
            <div className="text-center min-h-screen">No product found</div>
          ) : (
            equipmentData.map((product, index) => (
              <div key={index} className="w-full md:w-5/12 lg:w-1/4 p-2">
                <ProductCard product={product} />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="fixed bottom-5 right-5">
        <WhatsAppIcon phoneNumber="9084730912" />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;