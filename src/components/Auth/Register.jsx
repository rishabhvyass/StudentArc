import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaGraduationCap, FaChalkboardTeacher, FaEye, FaEyeSlash, FaEnvelope, FaIdCard, FaUniversity } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { MdSchool, MdPhone } from 'react-icons/md';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [registrationType, setRegistrationType] = useState('student'); // 'student' or 'faculty'
  const [formData, setFormData] = useState({
    // Student fields
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    studentId: '',
    department: '',
    year: '',
    
    // Faculty fields
    facultyId: '',
    designation: '',
    
    // Common fields
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Common validations
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Student specific validations
    if (registrationType === 'student') {
      if (!formData.username.trim()) newErrors.username = 'Username is required';
      if (!formData.studentId.trim()) newErrors.studentId = 'Student ID is required';
      if (!formData.department.trim()) newErrors.department = 'Department is required';
      if (!formData.year) newErrors.year = 'Year is required';
    } 
    // Faculty specific validations
    else {
      if (!formData.facultyId.trim()) newErrors.facultyId = 'Faculty ID is required';
      if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log(`${registrationType} Registration:`, formData);
      alert(`${registrationType.charAt(0).toUpperCase() + registrationType.slice(1)} account created successfully!`);
      
      // Navigate to login page
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTypeChange = (type) => {
    setRegistrationType(type);
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '',
      studentId: '',
      department: '',
      year: '',
      facultyId: '',
      designation: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  return (
    <div className="register-container">
      <div className="register-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      
      <div className="register-card">
        <div className="register-header">
          <div className="logo-section">
            <MdSchool className="logo-icon" />
            <h1 className="platform-name">StudentArc</h1>
          </div>
          <p className="welcome-text">Join the Future of Education</p>
        </div>

        <div className="register-toggle">
          <div className="toggle-container">
            <button
              className={`toggle-btn ${registrationType === 'student' ? 'active' : ''}`}
              onClick={() => handleTypeChange('student')}
            >
              <FaGraduationCap className="toggle-icon" />
              Student
            </button>
            <button
              className={`toggle-btn ${registrationType === 'faculty' ? 'active' : ''}`}
              onClick={() => handleTypeChange('faculty')}
            >
              <FaChalkboardTeacher className="toggle-icon" />
              Faculty
            </button>
          </div>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="form-row">
            <div className="form-group">
              <div className="input-wrapper">
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.firstName ? 'error' : ''}`}
                />
              </div>
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            
            <div className="form-group">
              <div className="input-wrapper">
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.lastName ? 'error' : ''}`}
                />
              </div>
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <div className="input-wrapper">
              <div className="input-icon">
                <FaEnvelope />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
              />
            </div>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Student specific fields */}
          {registrationType === 'student' && (
            <>
              <div className="form-group">
                <div className="input-wrapper">
                  <div className="input-icon">
                    <BiUserCircle />
                  </div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={`form-input ${errors.username ? 'error' : ''}`}
                  />
                </div>
                {errors.username && <span className="error-message">{errors.username}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <div className="input-wrapper">
                    <div className="input-icon">
                      <FaIdCard />
                    </div>
                    <input
                      type="text"
                      name="studentId"
                      placeholder="Student ID"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      className={`form-input ${errors.studentId ? 'error' : ''}`}
                    />
                  </div>
                  {errors.studentId && <span className="error-message">{errors.studentId}</span>}
                </div>

                <div className="form-group">
                  <div className="input-wrapper">
                    <div className="input-icon">
                      <FaUniversity />
                    </div>
                    <input
                      type="text"
                      name="department"
                      placeholder="Department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className={`form-input ${errors.department ? 'error' : ''}`}
                    />
                  </div>
                  {errors.department && <span className="error-message">{errors.department}</span>}
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <div className="input-icon">
                    <MdSchool />
                  </div>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className={`form-input ${errors.year ? 'error' : ''}`}
                  >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="graduate">Graduate</option>
                  </select>
                </div>
                {errors.year && <span className="error-message">{errors.year}</span>}
              </div>
            </>
          )}

          {/* Faculty specific fields */}
          {registrationType === 'faculty' && (
            <>
              <div className="form-group">
                <div className="input-wrapper">
                  <div className="input-icon">
                    <FaIdCard />
                  </div>
                  <input
                    type="text"
                    name="facultyId"
                    placeholder="Faculty ID"
                    value={formData.facultyId}
                    onChange={handleInputChange}
                    className={`form-input ${errors.facultyId ? 'error' : ''}`}
                  />
                </div>
                {errors.facultyId && <span className="error-message">{errors.facultyId}</span>}
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <div className="input-icon">
                    <FaChalkboardTeacher />
                  </div>
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation (e.g., Professor, Assistant Professor)"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className={`form-input ${errors.designation ? 'error' : ''}`}
                  />
                </div>
                {errors.designation && <span className="error-message">{errors.designation}</span>}
              </div>
            </>
          )}

          {/* Password Fields */}
          <div className="form-group">
            <div className="input-wrapper">
              <div className="input-icon">
                <FaLock />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className={`form-input ${errors.password ? 'error' : ''}`}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <div className="input-icon">
                <FaLock />
              </div>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <button type="submit" className={`register-btn ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
            <span>
              {isLoading ? 'Creating Account...' : `Create ${registrationType === 'student' ? 'Student' : 'Faculty'} Account`}
            </span>
          </button>
        </form>

        <div className="register-footer">
          <div className="login-section">
            <span className="login-text">Already have an account? </span>
            <button 
              className="login-link" 
              onClick={() => navigate('/login')}
            >
              SIGN IN
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

export default Register;
