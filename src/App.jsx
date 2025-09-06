import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Students/Header";
import "./components/Students/Header/style.css";
import "./components/Admin/layout/Topbar/style.css";
import "./components/Admin/layout/sidebar/style.css";
import "./components/Admin/AdminDashboard/style.css";
import Topbar from "./components/Admin/layout/topbar";
import Sidebar from "./components/Admin/layout/sidebar";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Events from "./pages/events/index";
import Dashboard from "./pages/dashboard/index";

function App() {
  return (
    <Routes>
      {/* Login Route - Main entry point */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      
      {/* Register Route */}
      <Route path="/register" element={<Register />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={
        <>
          <Topbar />
          <div className="conta">
            <div className="main-content">
              <AdminDashboard />
            </div>
            <div className="app-container">
              <Sidebar />
            </div>
          </div>
        </>
      } />
      
      {/* Student Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/events" element={<Events />} />
      
      {/* Alternative student route */}
      <Route path="/student" element={<div>Student Dashboard - Coming Soon</div>} />
    </Routes>
  );
}

export default App;
