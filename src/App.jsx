import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import StudentLayout from "./components/Students/StudentLayout";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Login from "./components/Auth/Login";


import Register from "./components/Auth/Register";
import Events from "./components/Students/Events";
import StudentDashboard from "./components/Students/StudentDashboard";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Public Route Component (redirect to appropriate dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  if (!isAuthenticated) {
    return children;
  }
  // Redirect based on user role
  if (user?.role === 'admin') {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return <Navigate to="/dashboard" replace />;
};

// Root redirect component
const RootRedirect = () => {
  const { isAuthenticated, user } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (user?.role === 'admin') {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return <Navigate to="/dashboard" replace />;
};

function App() {
  return (
    <Routes>
      {/* Main entry point - redirect based on auth status and role */}
      <Route path="/" element={<RootRedirect />} />
      
      {/* Authentication Routes */}
      <Route path="/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      <Route path="/register" element={
        <PublicRoute>
          <Register />
        </PublicRoute>
      } />
      
      {/* Protected Student Routes - wrapped with StudentLayout */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <StudentLayout>
            <StudentDashboard />
          </StudentLayout>
        </ProtectedRoute>
      } />
      <Route path="/events" element={
        <ProtectedRoute>
          <StudentLayout>
            <Events />
          </StudentLayout>
        </ProtectedRoute>
      } />
      
      {/* Protected Admin Routes - wrapped with AdminLayout */}
      <Route path="/admin/dashboard" element={
        <ProtectedRoute>
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
