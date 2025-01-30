import React from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token from localStorage and redirect to login page
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <>
      <nav className="bg-blue-600 text-white py-4 fixed top-0 w-full">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="space-x-4">
            <Link to="/admin/dashboard/addEquipment">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Product
              </button>
            </Link>
            <Link to="/admin/dashboard/register">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Add Admin
              </button>
            </Link>
            <Link to="/admin/dashboard/addCategory">
              <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                Add Category
              </button>
            </Link>
            <Link to="/admin/dashboard/adminProduct">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                My Products
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AdminNavBar;
