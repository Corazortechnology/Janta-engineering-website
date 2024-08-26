import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductPage from "./Pages/ProductPage";
import EquipmentCategoryDetailPage from "./Components/Productdetailpage";
import Contact from "./Pages/Contact";
import ServiceAndCalibration from "./ServiceAndCalibration/ServiceAndCalibration";
import NotFound from "./Pages/NotFound";
import AdminLayout from "./Pages/AdminLayout";
import AddAdmin from "./Pages/Addadmin";
import AddProductForm from "./Pages/AddProduct";
import WhoAreWe from "./AboutUs/WhoAreWe";
import SignIn from "./Pages/Loginpage";
import AdminProducts from "./Pages/AdminProducts";
import PrivateRoute from "./Auth/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/WhoAreWe" element={<WhoAreWe />} />
        <Route
          path="/equipment-category"
          element={<EquipmentCategoryDetailPage />}
        />
        <Route
          path="/ServiceAndCalibration"
          element={<ServiceAndCalibration />}
        />

        {/* Public admin login route */}
        <Route path="/admin/login" element={<SignIn />} />

        {/* Protected admin routes */}
        {/* <Route path="/admin" element={<PrivateRoute />}>
          <Route path="addEquipment" element={<AddProductForm />} />
          <Route path="adminProduct" element={<AdminProducts />} />
          <Route path="register" element={<AddAdmin />} />
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
