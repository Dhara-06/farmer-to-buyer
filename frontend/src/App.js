import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Farmers from "./pages/Farmers";
import Buyers from "./pages/Buyers";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import FarmerRegister from "./pages/FarmerRegister";
import FarmerLogin from "./pages/FarmerLogin";
import BuyerRegister from "./pages/BuyerRegister";
import BuyerLogin from "./pages/BuyerLogin";
import AdminLogin from "./pages/AdminLogin";
import PricingDemo from "./pages/PricingDemo";
import AdminRegister from "./pages/AdminRegister";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/farmer/register" element={<FarmerRegister />} />
          <Route path="/farmer/login" element={<FarmerLogin />} />
          <Route path="/buyer/register" element={<BuyerRegister />} />
          <Route path="/buyer/login" element={<BuyerLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/pricing" element={<PricingDemo />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
