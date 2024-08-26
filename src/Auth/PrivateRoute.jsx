// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "./AuthContext"; // Assuming you have an AuthProvider

// const PrivateRoute = () => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
// };

// export default PrivateRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// This is a dummy authentication function, replace it with your actual authentication logic
const isAuthenticated = () => {
  // For example, check if the token exists in localStorage
  return localStorage.getItem("token") !== null;
};

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
