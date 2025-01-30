import { Spinner } from "@material-tailwind/react";
import CautionBox from "../Components/CautionBox";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import WhatsAppIcon from "../Components/WhatsAppIcon";
import Sidebar from "../Components/Sidebar";
import "@fortawesome/fontawesome-free/css/all.min.css";
const API_URL = import.meta.env.VITE_JE_API_URL;

const ProductPage = () => {
  const location = useLocation();
  const { title, type, searchQuery } = location.state || "";

  const [equipmentData, setEquipmentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(`${searchQuery}`); // State for search term
  const [filteredData, setFilteredData] = useState([]); // State for filtered data

  const categories = [
    "PHYSICAL PROPERTY TESTING EQUIPMENT",
    "PULP TESTING EQUIPMENT",
    "PACKAGING TESTING EQUIPMENT",
    "SURFACE COATING & PRINTABILITY",
    "ENVIRONMENTAL TESTING EQUIPMENT",
  ];
  const applications = [
    "NEWSPRINT",
    "WRITING PRINTING/COPIER",
    "DUPLEX AND ART PAPER",
    "KRAFT LINER/FLUTING PAPER/SACK",
    "CORRUGATED FIBRE BOARD BOX BOARD",
    "TISSUE & SOFT MATERIAL",
    "PULP TESTING RAW MATERIAL RECYCLED FIBRE",
    "PULP TESTING RAW MATERIAL WOOD FIBRE",
    "PULP TESTING RAW MATERIAL AGRO FIBRE",
  ];

  const navigate = useNavigate();

  const getEquipment = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/api/v1/equipment/equipment`);
      const result = await response.json();

      if (result.success) {
        let data = result.equipment;
        if (title) {
          data =
            type === "category"
              ? data.filter(
                  (ele) => ele.category.toLowerCase() === title.toLowerCase()
                )
              : data.filter((ele) =>
                  ele.applicationType.some(
                    (appType) => appType.toLowerCase() === title.toLowerCase()
                  )
                );
        }
        setEquipmentData(data);
        setFilteredData(data); // Initialize filtered data
      } else {
        console.error("Failed to fetch equipment data:", result.message);
      }
    } catch (error) {
      console.error("Error fetching equipment data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEquipment();
  }, [title]);

  // Update filtered data based on search term
  useEffect(() => {
    setFilteredData(
      equipmentData.filter(
        (product) =>
          product.productName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.productCode.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, equipmentData]);

  const handleCategorySelect = (title, type) => {
    navigate("/product", { state: { title, type } });
  };

  const handleApplicationSelect = (title, type) => {
    navigate("/product", { state: { title, type } });
  };

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

        {/* Search input */}
        <div className="mb-4 flex justify-start ml-0">
          <div className="relative w-full md:w-1/4 ml-14">
            <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
              <i className="fas fa-search "></i>
            </span>
            <input
              type="text"
              placeholder="Search by product name or code"
              className="p-2 pl-10 border-2 border-gray-300 rounded-lg w-full focus:border-blue-500 focus:outline-none" // changed `rounded-md` to `rounded-lg`
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center align-center text-center w-full md:w-1/4 p-2">
            <Sidebar
              categories={categories}
              applications={applications}
              onCategorySelect={handleCategorySelect}
              onApplicationSelect={handleApplicationSelect}
              title={title}
            />
          </div>
          <div className="w-full md:w-3/4 p-2">
            {type === "category" ? <CautionBox title={title} /> : ""}
            <div className="min-h-screen flex flex-wrap gap-4 justify-center">
              {isLoading ? (
                <Spinner />
              ) : filteredData.length === 0 ? (
                <div className="text-center min-h-screen">No product found</div>
              ) : (
                filteredData.map((product, index) => (
                  <div key={index} className="w-full md:w-5/12 lg:w-1/4 p-2">
                    <ProductCard product={product} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 right-5">
        <WhatsAppIcon
          phoneNumber="9084730912"
          message={`Hello, I would like to know more about Category = ${title} !"`}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
