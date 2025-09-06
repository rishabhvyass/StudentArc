import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminDashboard from "./components/Admin/AdminDashboard";
import StudentLayout from "./components/Students/StudentLayout";
import StudentDashboard from "./components/Students/StudentDashboard";

// Import CSS files
import "./components/Admin/layout/Topbar/style.css";
import "./components/Admin/layout/sidebar/style.css";
import "./components/Admin/AdminDashboard/style.css";
import "./components/Admin/AdminLayout/style.css";

// Student CSS imports
import "./components/Students/layout/Topbar/style.css";
import "./components/Students/layout/Sidebar/style.css";
import "./components/Students/StudentDashboard/style.css";
import "./components/Students/StudentLayout/style.css";

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, user } = useAuth();
  
  console.log('ProtectedRoute check:', { isAuthenticated, user, allowedRoles });
  
  if (!isAuthenticated) {
    console.log('User not authenticated, redirecting to login');
    return <Navigate to="/login" replace />;
  }
  
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    console.log('User role not allowed:', user?.role, 'allowed:', allowedRoles);
    // Redirect based on user role
    if (user?.role === 'student') {
      console.log('Redirecting student to student dashboard');
      return <Navigate to="/student/dashboard" replace />;
    } else {
      console.log('Redirecting to admin dashboard');
      return <Navigate to="/admin/dashboard" replace />;
    }
  }
  
  console.log('User authorized, rendering children');
  return children;
};

// Smart Default Route Component
const SmartDefaultRoute = () => {
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // Redirect based on user role
  if (user?.role === 'student') {
    return <Navigate to="/student/dashboard" replace />;
  } else if (user?.role === 'faculty') {
    return <Navigate to="/admin/dashboard" replace />;
  }
  
  // Fallback to login if role is unknown
  return <Navigate to="/login" replace />;
};


// Main App Component
function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={['faculty']}>
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      {/* Student Routes */}
      <Route
        path="/student"
        element={
          <StudentLayout>
            <StudentDashboard />
          </StudentLayout>
        }
      />
      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentLayout>
              <StudentDashboard />
            </StudentLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/profile"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentLayout>
              <div style={{padding: '20px', textAlign: 'center'}}>
                <h2>Profile Page</h2>
                <p>Coming Soon...</p>
              </div>
            </StudentLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/webinars"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentLayout>
              <div style={{padding: '20px', textAlign: 'center'}}>
                <h2>Webinars</h2>
                <p>Coming Soon...</p>
              </div>
            </StudentLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/notifications"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentLayout>
              <div style={{padding: '20px', textAlign: 'center'}}>
                <h2>Notifications</h2>
                <p>Coming Soon...</p>
              </div>
            </StudentLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/activity"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentLayout>
              <div style={{padding: '20px', textAlign: 'center'}}>
                <h2>Activity</h2>
                <p>Coming Soon...</p>
              </div>
            </StudentLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/certification"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentLayout>
              <div style={{padding: '20px', textAlign: 'center'}}>
                <h2>Certification</h2>
                <p>Coming Soon...</p>
              </div>
            </StudentLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/results"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentLayout>
              <div style={{padding: '20px', textAlign: 'center'}}>
                <h2>Results</h2>
                <p>Coming Soon...</p>
              </div>
            </StudentLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/events"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentLayout>
              <div style={{padding: '20px', textAlign: 'center'}}>
                <h2>Events</h2>
                <p>Coming Soon...</p>
              </div>
            </StudentLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/library"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentLayout>
              <div style={{padding: '20px', textAlign: 'center'}}>
                <h2>Library</h2>
                <p>Coming Soon...</p>
              </div>
            </StudentLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/fees"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentLayout>
              <div style={{padding: '20px', textAlign: 'center'}}>
                <h2>Outstanding Fees</h2>
                <p>Coming Soon...</p>
              </div>
            </StudentLayout>
          </ProtectedRoute>
        }
      />

      
      {/* Default Redirect */}
      <Route path="/" element={<SmartDefaultRoute />} />
      
      {/* Legacy route redirect */}
      <Route path="/dashborad" element={<Navigate to="/admin/dashboard" replace />} />
      
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
