import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaGraduationCap, FaChalkboardTeacher, FaEye, FaEyeSlash } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { MdSchool } from 'react-icons/md';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState('student'); // 'student' or 'faculty'
  const [formData, setFormData] = useState({
    username: '',
    facultyId: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (loginType === 'student') {
        console.log('Student Login:', { username: formData.username, password: formData.password });
        // Navigate to student dashboard
        navigate('/student');
      } else {
        console.log('Faculty Login:', { facultyId: formData.facultyId, password: formData.password });
        // Navigate to admin dashboard
        navigate('/admin');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    alert(`Forgot password for ${loginType}. Redirecting to password recovery...`);
    // Add your forgot password logic here
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      
      <div className="login-card">
        <div className="login-header">
          <div className="logo-section">
            <MdSchool className="logo-icon" />
            <h1 className="platform-name">StudentArc</h1>
          </div>
          <p className="welcome-text">Welcome to the Future of Education</p>
        </div>

        <div className="login-toggle">
          <div className="toggle-container">
            <button
              className={`toggle-btn ${loginType === 'student' ? 'active' : ''}`}
              onClick={() => setLoginType('student')}
            >
              <FaGraduationCap className="toggle-icon" />
              Student
            </button>
            <button
              className={`toggle-btn ${loginType === 'faculty' ? 'active' : ''}`}
              onClick={() => setLoginType('faculty')}
            >
              <FaChalkboardTeacher className="toggle-icon" />
              Faculty
            </button>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-wrapper">
              <div className="input-icon">
                {loginType === 'student' ? <FaUser /> : <BiUserCircle />}
              </div>
              <input
                type="text"
                name={loginType === 'student' ? 'username' : 'facultyId'}
                placeholder={loginType === 'student' ? 'Enter your username' : 'Enter your faculty ID'}
                value={loginType === 'student' ? formData.username : formData.facultyId}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <div className="input-icon">
                <FaLock />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="form-input"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button type="button" className="forgot-password" onClick={handleForgotPassword}>
            Forgot your password?
          </button>

          <button type="submit" className={`login-btn ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
            <span>
              {isLoading ? 'Signing In...' : `Sign In as ${loginType === 'student' ? 'Student' : 'Faculty'}`}
            </span>
          </button>
        </form>

        <div className="login-footer">
          <div className="create-account-section">
            <span className="create-account-text">Don't have an account? </span>
            <button 
              className="create-account-link" 
              onClick={() => navigate('/register')}
            >
              CREATE ONE
            </button>
          </div>
          <p>Empowering Education Through Technology</p>
          <div className="footer-links">
            <a href="#help">Help</a>
            <span>•</span>
            <a href="#support">Support</a>
            <span>•</span>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
