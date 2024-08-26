// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => setIsAuthenticated(true);
//   const logout = () => setIsAuthenticated(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

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
