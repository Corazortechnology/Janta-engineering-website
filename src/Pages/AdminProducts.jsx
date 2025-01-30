import React, { useEffect, useState } from "react";
import EquipmentList from "../Components/EquipmentCard";
import { Spinner } from "@material-tailwind/react";
import AdminNavBar from "../Components/AdminNavBar";
const API_URL = import.meta.env.VITE_JE_API_URL;

function AdminProducts() {
  const [equipmentData, setEquipmentData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [relode, setRelode] = useState(false);
  const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    description: "",
    productCode: "",
    weight: "",
    dimensions: "",
    applicableStandards: "",
    rangeAvailable: "",
    testingApplications: "",
    applicationType: [],
    extras: "",
  });
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [loading, setLoding] = useState(false);
  const [isLoading, setIsLoding] = useState(false);

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

  const handleApplicationChange = (e) => {
    const options = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setFormData((prevState) => ({
      ...prevState,
      applicationType: options,
    }));
  };

  // Remove application type (Capsule Click)
  const handleRemoveApplicationType = (typeToRemove) => {
    setFormData((prevState) => ({
      ...prevState,
      applicationType: prevState.applicationType.filter(
        (type) => type !== typeToRemove
      ),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...files],
    }));
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === "Other") {
      setIsCustomCategory(true);
    } else {
      setIsCustomCategory(false);
      setFormData((prevState) => ({
        ...prevState,
        category: value,
      }));
    }
  };

  const getEquipment = async () => {
    setIsLoding(true);
    try {
      const response = await fetch(`${API_URL}/api/v1/equipment/equipment`);
      const result = await response.json();

      if (result.success) {
        setIsLoding(false);
        setEquipmentData(result.equipment);
      } else {
        setIsLoding(false);
        console.error("Failed to fetch equipment data:", result.message);
      }
    } catch (error) {
      setIsLoding(false);
      console.error("Error fetching equipment data:", error);
    }
  };

  useEffect(() => {
    getEquipment();
  }, [showForm, relode]);

  async function handelEdit(id, data) {
    setShowForm(true);
    setId(id);
    setFormData({
      productName: data?.productName,
      category: data?.category,
      description: data?.description,
      productCode: data?.productCode,
      weight: data?.weight,
      dimensions: data?.dimensions,
      applicableStandards: data?.applicableStandards,
      rangeAvailable: data?.rangeAvailable,
      testingApplications: data?.testingApplications,
      applicationType: data?.applicationType,
      extras: data?.extras,
    });
  }

  const handelDelete = async (id) => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this equipment?"
    );

    // If the user confirms, proceed with the deletion
    if (isConfirmed) {
      try {
        const response = await fetch(
          `${API_URL}/api/v1/equipment/equipment/${id}`,
          {
            method: "DELETE",
            // headers: {
            //   "Content-Type": "application/json",
            // },
          }
        );
        const result = await response.json();

        if (result.success) {
          setRelode(!relode);
        } else {
          console.error("Failed to delete equipment data:", result.message);
        }
      } catch (error) {
        console.error("Error deleting equipment data:", error);
      }
    } else {
      // If the user cancels, do nothing
      console.log("Deletion canceled by the user.");
    }
  };

  const handleSubmit = async (e) => {
    setLoding(true);
    e.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/api/v1/equipment/equipment/${id}`,
        {
          method: "PUT",

          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();

      if (result.success) {
        setLoding(false);
        setFormData({
          productName: "",
          category: "",
          description: "",
          productCode: "",
          weight: "",
          dimensions: "",
          applicableStandards: "",
          rangeAvailable: "",
          testingApplications: "",
          images: [],
          applicationType: [],
          extras: "",
        });
        setShowForm(false);
      } else {
        setLoding(false);
        console.error("Failed to fetch equipment data:", result.message);
      }
    } catch (error) {
      setLoding(false);
      console.error("Error fetching equipment data:", error);
    }
  };

  if (showForm) {
    return (
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 className="text-center text-2xl font-semibold ">Edit Product</h2>
        <hr className="border-b-2 border-blue-500 w-20 mx-auto mb-4 mt-1" />
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <div className="mb-4">
                        <label className="block mb-1 font-medium">Upload Images</label>
                        <input
                            type="file"
                            name="images"
                            onChange={handleImageChange}
                            multiple
                            className="w-full border border-gray-300 p-2 rounded-md"
                            required
                        />
                    </div> */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleCategoryChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="">Select Category</option>
                <option value="Physical Property Testing Equipment">
                  Physical Property Testing Equipment
                </option>
                <option value="Pulp Testing Equipment">
                  Pulp Testing Equipment
                </option>
                <option value="Packaging Testing Equipment">
                  Packaging Testing Equipment
                </option>
                <option value="Surface Coating & Printability">
                  Surface Coating & Printability
                </option>
                <option value="Environmental Testing Equipment">
                  Environmental Testing Equipment
                </option>
                <option value="Handmade Paper Machines">
                  Handmade Paper Machines
                </option>
                <option value="Prakritik Paint Machines">
                  Prakritik Paint Machines
                </option>
              </select>
            </div>
          </div>
          <label className="text-center block pt-5 font-medium">
            Product-Description
          </label>
          <hr className="border-b-2 border-blue-500 w-20 mx-auto" />
          <div className="mb-4">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              rows="4"
              required
            />
          </div>

          <div className="w-1/2">
            <label className="block mb-1 font-medium">Optional on Demand</label>
            <input
              type="text"
              name="extras"
              value={formData.extras}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <label className="text-center block pt-5 font-medium">
            Product-Details
          </label>
          <hr className="border-b-2 border-blue-500 w-20 mx-auto" />
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Product Code</label>
              <input
                type="text"
                name="productCode"
                value={formData.productCode}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Weight</label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Dimension</label>
              <input
                type="text"
                name="dimension"
                value={formData.dimensions}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium">
                Applicable Standards
              </label>
              <input
                type="text"
                name="applicableStandards"
                value={formData.applicableStandards}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Range Available</label>
              <input
                type="text"
                name="rangeAvailable"
                value={formData.rangeAvailable}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium">
                Testing Applications
              </label>
              <input
                type="text"
                name="testingApplications"
                value={formData.testingApplications}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>

          <div className="md:flex md:space-x-4">
            <div className="md:w-1/2 mb-5">
              <label className="block mb-1 font-medium">Application Type</label>
              <select
                name="applicationType"
                value={formData.applicationType}
                onChange={handleApplicationChange}
                multiple
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                {applications.map((e, id) => {
                  return (
                    <option key={id} value={e}>
                      {e}
                    </option>
                  );
                })}
              </select>
              <h6 className="text-red-400">
                for multiple selection ctrl+select{" "}
              </h6>
            </div>
          </div>

          {/* Display Selected Application Types as Capsules */}
          <div className="flex flex-wrap space-x-2 mt-4">
            {formData.applicationType.map((type, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center space-x-2 mb-2"
              >
                <span>{type}</span>
                <button
                  type="button"
                  className="text-white hover:bg-blue-700 px-2 rounded-full"
                  onClick={() => handleRemoveApplicationType(type)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* <label className="text-center block pt-5 font-medium">Product-Consumables</label>
                <hr className="border-b-2 border-blue-500 w-20 mx-auto" />
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block mb-1 font-medium">Accessories</label>
                        <input
                            type="text"
                            name="accessories"
                            value={formData.accessories}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                </div> */}

          {loading ? (
            <button className="text-center w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              <Spinner />
            </button>
          ) : (
            <button
              type="submit"
              onClick={() => handleSubmit()}
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          )}

          <button
            onClick={() => setShowForm(false)}
            className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <AdminNavBar />
      <div className="container mx-auto px-4 py-8 mt-20">
        {isLoading ? (
          <div className="flex align-center justify-center w-full min-h-screen">
            <Spinner className="text-center" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentData.map((equipment) => (
              <EquipmentList
                key={equipment.id}
                image={equipment.images ? equipment.images[0] : ""}
                name={equipment.productName}
                category={equipment.category}
                uniqueCode={equipment.productCode}
                onEdit={() => handelEdit(equipment._id, equipment)}
                onDelete={() => handelDelete(equipment._id)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default AdminProducts;
