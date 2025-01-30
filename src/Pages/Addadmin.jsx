import { Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminNavBar from "../Components/AdminNavBar";
const API_URL = import.meta.env.VITE_JE_API_URL;

const AddAdmin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoding] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoding(true);
    // Add your form submission logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Submit form data to the server or handle it accordingly
    try {
      const response = await fetch(`${API_URL}/api/v1/users/createAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure the content type is set to JSON
        },
        body: JSON.stringify({ name: username, email, password }), // Pass the necessary data
      });

      const result = await response.json();

      if (result.success) {
        // Handle success scenario
        setLoding(false);
        alert("Admin created successfully");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setUsername("");
      } else {
        // Handle failure scenario
        setLoding(false);
        alert(result.message);
        console.error("Failed to create admin:", result.message);
      }
    } catch (error) {
      // Handle any other errors
      setLoding(false);
      console.error("Error creating admin:", error);
    }
  };

  return (
    <>
      <AdminNavBar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Add Admin</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="@Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="user@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Pass@123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          {loading ? (
            <button className="text-center w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              <Spinner />
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition-colors"
            >
              Add Admin
            </button>
          )}
          {/* <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              already have an account?{" "}
              <Link
                to="/admin/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </Link>
            </p>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default AddAdmin;
