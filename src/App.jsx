import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminClaims from "./pages/AdminClaims";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ReportItem from "./pages/ReportItem";
import ClaimRequest from "./pages/ClaimRequest";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/claim/:id" element={<ClaimRequest />} />
            <Route path="/report" element={<ReportItem />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/claims" element={<AdminClaims />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
