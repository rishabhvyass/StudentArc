import React from 'react';
import { FaEye, FaDownload, FaCheckCircle, FaExclamationTriangle, FaCertificate } from 'react-icons/fa';
import './style.css';

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Student Portal</h1>
        <p className="dashboard-subtitle">Welcome back, Alex!</p>
      </div>

      <div className="dashboard-content">
        {/* Main Banner */}
        <div className="banner-section">
          <div className="tech-fest-banner">
            <div className="banner-content">
              <h2 className="banner-title">Annual Tech Fest 2024</h2>
              <p className="banner-subtitle">Join us for a week of innovation and technology.</p>
              <div className="banner-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
            <div className="banner-image">
              <div className="world-map">
                <div className="map-overlay"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="dashboard-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Attendance Tracker */}
            <div className="card attendance-card">
              <h3 className="card-title">Attendance Tracker</h3>
              <p className="card-subtitle">This semester</p>
              <div className="attendance-chart">
                <div className="circular-progress">
                  <svg viewBox="0 0 100 100" className="progress-svg">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset="56"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="progress-content">
                    <span className="progress-percentage">92%</span>
                    <span className="progress-label">Present</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Outstanding Fees */}
            <div className="card fees-card">
              <h3 className="card-title">Outstanding Fees</h3>
              <div className="fee-item">
                <div className="fee-info">
                  <span className="fee-type">Tuition Fee</span>
                  <span className="fee-amount">$500.00</span>
                </div>
                <div className="fee-due">Due: 30 Nov 2024</div>
                <button className="pay-btn">Pay Now</button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Student Profile Card */}
            <div className="profile-card">
              <div className="profile-avatar">
                <img 
                  src="https://via.placeholder.com/80x80/4f46e5/ffffff?text=AJ" 
                  alt="Alex Johnson" 
                  className="profile-img"
                />
              </div>
              <div className="profile-info">
                <h3 className="profile-name">Alex Johnson</h3>
                <p className="profile-id">Student ID: 12345</p>
                <button className="view-profile-btn">View Profile</button>
              </div>
            </div>

            {/* Notifications */}
            <div className="card notifications-card">
              <h3 className="card-title">Notifications</h3>
              <div className="notification-list">
                <div className="notification-item">
                  <div className="notification-icon success">
                    <FaCheckCircle />
                  </div>
                  <div className="notification-content">
                    <p className="notification-title">Assignment graded</p>
                    <p className="notification-desc">Your CS101 assignment has been graded. Score: A+</p>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="notification-icon warning">
                    <FaExclamationTriangle />
                  </div>
                  <div className="notification-content">
                    <p className="notification-title">Upcoming Exam</p>
                    <p className="notification-desc">Mid-term exam for MATH203 is on Friday.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card quick-links-card">
              <h3 className="card-title">Quick Links</h3>
              <div className="quick-links-grid">
                <div className="quick-link-item">
                  <div className="quick-link-icon">📚</div>
                  <span>Courses</span>
                </div>
                <div className="quick-link-item">
                  <div className="quick-link-icon">📖</div>
                  <span>Library</span>
                </div>
                <div className="quick-link-item">
                  <div className="quick-link-icon">📅</div>
                  <span>Calendar</span>
                </div>
                <div className="quick-link-item">
                  <div className="quick-link-icon">✉️</div>
                  <span>Email</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certifications-section">
          <div className="card certifications-card">
            <div className="card-header">
              <h3 className="card-title">Certifications</h3>
              <p className="card-subtitle">Your earned certificates.</p>
            </div>
            <div className="certifications-list">
              <div className="certification-item">
                <div className="cert-icon">
                  <FaCertificate />
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">Advanced Python Programming</h4>
                  <p className="cert-date">Issued: Oct 2024</p>
                </div>
                <div className="cert-actions">
                  <button className="cert-btn view-btn">
                    <FaEye />
                  </button>
                  <button className="cert-btn download-btn">
                    <FaDownload />
                  </button>
                </div>
              </div>
              <div className="certification-item">
                <div className="cert-icon">
                  <FaCertificate />
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">Data Science Fundamentals</h4>
                  <p className="cert-date">Issued: Sep 2024</p>
                </div>
                <div className="cert-actions">
                  <button className="cert-btn view-btn">
                    <FaEye />
                  </button>
                  <button className="cert-btn download-btn">
                    <FaDownload />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>© 2024 Scholarly Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StudentDashboard;
