import React from "react";
import "./App.css";
import { Header } from "./components/Students/Header";
import "./components/Students/Header/style.css";
import "./components/Admin/layout/Topbar/style.css";
import "./components/Admin/layout/sidebar/style.css";
import "./components/Admin/AdminDashboard/style.css";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Admin/layout/topbar";
import Sidebar from "./components/Admin/layout/sidebar";
import AdminDashboard from "./components/Admin/AdminDashboard";

function App() {
  return (
    <>
      <Topbar />
      <div className="conta">
        <div className="main-content">
          <Routes>
            <Route path="/dashborad" element={<AdminDashboard />} />
            <Route path="/Sidebar" element={<Sidebar />} />
          </Routes>
        </div>

        <div className="app-container">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
