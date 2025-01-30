import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNavBar from "../Components/AdminNavBar";
const API_URL = import.meta.env.VITE_JE_API_URL;

const Button = ({ children, onClick, variant = "primary", isLoading }) => (
  <button
    className={`px-4 py-2 rounded-lg flex items-center justify-center ${
      variant === "secondary" ? "bg-gray-300" : "bg-blue-500 text-white"
    }`}
    onClick={onClick}
    disabled={isLoading}
  >
    {isLoading && (
      <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>
    )}
    {children}
  </button>
);

const Input = ({ type, name, value, onChange, placeholder }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border border-gray-300 rounded-lg p-2 w-full"
    required
  />
);

const Textarea = ({ name, value, onChange, placeholder }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border border-gray-300 rounded-lg p-2 w-full resize-y min-h-[100px]"
  />
);

const AdminCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [subForm, setSubForm] = useState({
    name: "",
    description: "",
    parentId: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/categories`);
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
        console.log("000", data);
      } else {
        toast.error("Failed to fetch categories");
      }
    } catch (error) {
      toast.error("Error fetching categories");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const endpoint = isEditing
        ? `${API_URL}/api/v1/categories/${selectedCategoryId}/false`
        : `${API_URL}/api/v1/categories`;
      const method = isEditing ? "PATCH" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success(
          isEditing
            ? "Category updated successfully"
            : "Category added successfully"
        );
        fetchCategories();
        setForm({ name: "", description: "" });
      } else {
        toast.error("Failed to save category");
      }
    } catch (error) {
      toast.error("Error saving category");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id, isSubcategory = false, subId = null) => {
    if (
      !window.confirm(
        `Are you sure you want to delete this ${
          isSubcategory ? "subcategory" : "category"
        }?`
      )
    )
      return;

    try {
      const endpoint = isSubcategory
        ? `${API_URL}/api/v1/categories/${id}/true/${subId}`
        : `${API_URL}/api/v1/categories/${id}/false`;

      const response = await fetch(endpoint, { method: "DELETE" });

      if (response.ok) {
        toast.success(
          `${isSubcategory ? "Subcategory" : "Category"} deleted successfully`
        );
        fetchCategories();
      } else {
        toast.error(
          `Failed to delete ${isSubcategory ? "subcategory" : "category"}`
        );
      }
    } catch (error) {
      toast.error(
        `Error deleting ${isSubcategory ? "subcategory" : "category"}`
      );
    }
  };

  const handleEdit = (category) => {
    setIsEditing(true);
    setSelectedCategoryId(category._id);
    setForm({ name: category.name, description: category.description || "" });
  };

  const handleAddSubcategory = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${API_URL}/api/v1/categories/${subForm.parentId}/subcategories`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: subForm.name,
            description: subForm.description,
          }),
        }
      );

      if (response.ok) {
        toast.success("Subcategory added successfully");
        fetchCategories();
        setSubForm({ name: "", description: "", parentId: "" });
      } else {
        toast.error("Failed to add subcategory");
      }
    } catch (error) {
      toast.error("Error adding subcategory");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AdminNavBar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <ToastContainer position="top-center" autoClose={3000} />

        <div className="grid grid-cols-2 gap-6 bg-white shadow-md rounded-lg p-6">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">
              {isEditing ? "Edit Category" : "Add Category"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Category Name"
              />
              {/* <Textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Category Description"
            /> */}
              <Button type="submit" isLoading={isSubmitting}>
                {isEditing ? "Update Category" : "Add Category"}
              </Button>
            </form>
          </div>

          {/* Subcategory Form */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Add Subcategory</h2>
            <form onSubmit={handleAddSubcategory} className="space-y-4">
              <select
                name="parentId"
                value={subForm.parentId}
                onChange={(e) =>
                  setSubForm({ ...subForm, parentId: e.target.value })
                }
                className="border p-2 rounded-lg w-full"
              >
                <option value="">Select Parent Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <Input
                type="text"
                name="name"
                value={subForm.name}
                onChange={(e) =>
                  setSubForm({ ...subForm, name: e.target.value })
                }
                placeholder="Subcategory Name"
              />
              {/* <Textarea
              name="description"
              value={subForm.description}
              onChange={(e) =>
                setSubForm({ ...subForm, description: e.target.value })
              }
              placeholder="Subcategory Description"
            /> */}
              <Button type="submit" isLoading={isSubmitting}>
                Add Subcategory
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category._id}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <h3 className="text-lg font-bold">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
              <div className="mt-4 flex gap-4">
                <Button
                  variant="secondary"
                  onClick={() => handleEdit(category._id)}
                >
                  Edit
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleDelete(category._id)}
                >
                  Delete
                </Button>
              </div>
              {category.subcategories.length > 0 && (
                <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                  <h4 className="text-md font-bold">Subcategories:</h4>
                  {category.subcategories.map((sub) => (
                    <div
                      key={sub._id}
                      className="flex justify-between items-center p-2 bg-white shadow rounded-md mt-2"
                    >
                      <span>
                        {sub.name} - {sub.description}
                      </span>
                      <div className="flex gap-2">
                        <Button
                          variant="secondary"
                          onClick={() =>
                            handleEdit(category._id, true, sub._id)
                          }
                        >
                          Edit
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={() =>
                            handleDelete(category._id, true, sub._id)
                          }
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminCategoryPage;
