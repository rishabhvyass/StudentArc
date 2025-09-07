import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import StudentArcLogo from "../../common/Logo";
import "./style.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student",
  });
  const [selectedRole, setSelectedRole] = useState("student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleToggle = (role) => {
    setSelectedRole(role);
    setFormData({
      ...formData,
      role: role === "student" ? "student" : "faculty",
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log('Login attempt:', { selectedRole, formData });
      // Simulate API call - in real app, you'd validate against backend
      if (formData.email && formData.password) {
        const userData = {
          email: formData.email,
          role: selectedRole === "student" ? "student" : "faculty",
          name: selectedRole === "student" ? "Alex Johnson" : "Faculty User",
          id: Math.random().toString(36).substr(2, 9),
        };

        login(userData);

        // Navigate based on selected role
        console.log('Navigating user with role:', selectedRole, userData.role);
        if (selectedRole === "student") {
          console.log('Redirecting to student dashboard');
          navigate("/student/dashboard");
        } else if (selectedRole === "admin") {
          console.log('Redirecting to admin dashboard');
          navigate("/admin/dashboard");
        }
      } else {
        setError("Please fill in all fields");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-left-content">
          <StudentArcLogo size="xlarge" showTagline={true} />
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Sign In</h1>
            <p>Enter your credentials to access your account</p>
          </div>

          {/* Role Selector Toggle */}
          <div className="role-toggle-container">
            <div className="role-toggle">
              <button
                type="button"
                className={`role-toggle-btn ${selectedRole === "student" ? "active" : ""}`}
                onClick={() => handleRoleToggle("student")}
              >
                <span className="role-icon">🎓</span>
                <span>Student</span>
              </button>
              <button
                type="button"
                className={`role-toggle-btn ${selectedRole === "admin" ? "active" : ""}`}
                onClick={() => handleRoleToggle("admin")}
              >
                <span className="role-icon">👨‍💼</span>
                <span>Admin</span>
              </button>
              <div className={`role-toggle-slider ${selectedRole === "admin" ? "admin" : "student"}`}></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <div className="input-container">
                <span className="input-icon">👤</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={selectedRole === "student" ? "Student ID/Email" : "Admin ID/Email"}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="auth-link"
              >
                Sign up
              </Link>
            </p>
            <p className="copyright">
              © 2024 Scholarly Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
