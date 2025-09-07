import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Events from "./pages/events/index";
import Dashboard from "./pages/dashboard/index";

function App() {
  return (
    <Routes>
      {/* Main entry point - redirect to dashboard */}
      <Route path="/" element={<Dashboard />} />
      
      {/* Student Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
}

export default App;
