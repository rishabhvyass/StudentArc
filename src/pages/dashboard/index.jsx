import React, { useState, useEffect } from 'react';
import './style.css';
import { 
  FaBook, 
  FaChartBar, 
  FaCalendarAlt, 
  FaClipboardList,
  FaEye,
  FaDownload,
  FaUser,
  FaCheckCircle,
  FaEdit,
  FaBook as FaBookAlt,
  FaCreditCard,
  FaCog,
  FaPython,
  FaUserGraduate,
  FaNotesMedical
} from 'react-icons/fa';
import { 
  MdDateRange,
  MdSchool,
  MdAssignment
} from 'react-icons/md';
import { 
  IoMdClose
} from 'react-icons/io';
import { 
  SiPython
} from 'react-icons/si';

const Dashboard = () => {
  const [showWorkInProgress, setShowWorkInProgress] = useState(false);
  const [showCertificatePreview, setShowCertificatePreview] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showAttendanceCalendar, setShowAttendanceCalendar] = useState(false);

  // Sample attendance data for current month (November 2024)
  const attendanceData = {
    '2024-11-01': 'present',    // Friday - Present (Green)
    '2024-11-02': 'absent',     // Saturday - Absent (Red)
    '2024-11-03': 'present',    // Sunday - Present (Green)
    '2024-11-04': 'present',    // Monday - Present (Green)
    '2024-11-05': 'absent',     // Tuesday - Absent (Red)
    '2024-11-06': 'present',    // Wednesday - Present (Green)
    '2024-11-07': 'present',    // Thursday - Present (Green)
    '2024-11-08': 'present',    // Friday - Present (Green)
    '2024-11-09': 'present',    // Saturday - Present (Green)
    '2024-11-10': 'absent',     // Sunday - Absent (Red)
    '2024-11-11': 'present',    // Monday - Present (Green)
    '2024-11-12': 'absent',     // Tuesday - Absent (Red)
    '2024-11-13': 'present',    // Wednesday - Present (Green)
    '2024-11-14': 'present',    // Thursday - Present (Green)
    '2024-11-15': 'present',    // Friday - Present (Green)
    '2024-11-16': 'present',    // Saturday - Present (Green)
    '2024-11-17': 'absent',     // Sunday - Absent (Red)
    '2024-11-18': 'present',    // Monday - Present (Green)
    '2024-11-19': 'present',    // Tuesday - Present (Green)
    '2024-11-20': 'present',    // Wednesday - Present (Green)
    '2024-11-21': 'absent',     // Thursday - Absent (Red)
    '2024-11-22': 'present',    // Friday - Present (Green)
    '2024-11-23': 'present',    // Saturday - Present (Green)
    '2024-11-24': 'present',    // Sunday - Present (Green)
    '2024-11-25': 'present',    // Monday - Present (Green)
    '2024-11-26': 'present',    // Tuesday - Present (Green)
    '2024-11-27': 'absent',     // Wednesday - Absent (Red)
    '2024-11-28': 'present',    // Thursday - Present (Green)
    '2024-11-29': 'present',    // Friday - Present (Green)
    '2024-11-30': 'present'     // Saturday - Present (Green)
  };

  // Hero carousel data - reused from events page
  const heroEvents = [
    {
      id: 1,
      title: "Annual Tech Fest 2024",
      subtitle: "Join us for a week of innovation and technology.",
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      date: "Dec 15, 2024 - 9:00 AM"
    },
    {
      id: 2,
      title: "Campus Innovation Summit",
      subtitle: "Exploring the future of technology and education.",
      bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      date: "Jan 20, 2025 - 10:00 AM"
    },
    {
      id: 3,
      title: "Research Excellence Conference",
      subtitle: "Showcasing groundbreaking research and discoveries.",
      bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      date: "Feb 10, 2025 - 8:30 AM"
    }
  ];

  const certificates = [
    {
      id: 1,
      name: "Advanced Python Programming",
      issueDate: "Oct 2024",
      icon: <SiPython />
    },
    {
      id: 2,
      name: "Data Science Fundamentals",
      issueDate: "Sep 2024",
      icon: <FaChartBar />
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Assignment graded",
      description: "Your CS101 assignment has been graded. Score: A+",
      time: "2 hours ago",
      icon: <FaCheckCircle />
    },
    {
      id: 2,
      type: "warning",
      title: "Upcoming Exam",
      description: "Mid-term exam for MAT203 is on Friday.",
      time: "1 day ago",
      icon: <FaNotesMedical />
    },
    {
      id: 3,
      type: "info",
      title: "New Course Material",
      description: "New lecture notes uploaded for PHY301.",
      time: "3 days ago",
      icon: <FaBook />
    },
    {
      id: 4,
      type: "success",
      title: "Fee Payment Confirmed",
      description: "Your semester fee payment has been processed.",
      time: "1 week ago",
      icon: <FaCreditCard />
    }
  ];

  const quickLinks = [
    { id: 1, name: "Courses", icon: <FaBook />, color: "#3b82f6" },
    { id: 2, name: "Results", icon: <FaChartBar />, color: "#34A853" },
    { id: 3, name: "Calendar", icon: <FaCalendarAlt />, color: "#FBBC05" },
    { id: 4, name: "Time Table", icon: <FaClipboardList />, color: "#EA4335" }
  ];

  // Fee data for different years/semesters
  const feesData = [
    {
      id: 1,
      year: "2024 Fall Semester",
      totalFee: 125000.00,
      paidAmount: 100000.00,
      outstandingAmount: 25000.00,
      dueDate: "Nov 30, 2024",
      status: "pending"
    },
    {
      id: 2,
      year: "2024 Spring Semester",
      totalFee: 125000.00,
      paidAmount: 125000.00,
      outstandingAmount: 0.00,
      dueDate: "Paid",
      status: "paid"
    },
    {
      id: 3,
      year: "2023 Fall Semester",
      totalFee: 120000.00,
      paidAmount: 105000.00,
      outstandingAmount: 15000.00,
      dueDate: "Overdue",
      status: "overdue"
    },
    {
      id: 4,
      year: "2023 Spring Semester",
      totalFee: 120000.00,
      paidAmount: 120000.00,
      outstandingAmount: 0.00,
      dueDate: "Paid",
      status: "paid"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroEvents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroEvents.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroEvents.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroEvents.length) % heroEvents.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleQuickLinkClick = () => {
    setShowWorkInProgress(true);
  };

  const handleCertificatePreview = (certificate) => {
    setSelectedCertificate(certificate);
    setShowCertificatePreview(true);
  };

  const handleViewProfile = () => {
    setShowWorkInProgress(true);
  };

  const handleAttendanceCalendarOpen = () => {
    setShowAttendanceCalendar(true);
  };

  const closeModal = () => {
    setShowWorkInProgress(false);
    setShowCertificatePreview(false);
    setSelectedCertificate(null);
    setShowAttendanceCalendar(false);
  };

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      days.push({
        day,
        dateString,
        status: attendanceData[dateString] || 'no-data'
      });
    }
    
    return days;
  };

  const getMonthName = () => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[new Date().getMonth()];
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Student Portal</h1>
        <p className="welcome-text">Welcome back, Alex!</p>
      </header>

      <div className="dashboard-content">
        {/* Left Section - Event Banner (60% width) */}
        <div className="left-section">
          <div className="event-banner-container">
            <button className="carousel-arrow carousel-arrow-prev" onClick={prevSlide}>
              ‹
            </button>
            
            <button className="carousel-arrow carousel-arrow-next" onClick={nextSlide}>
              ›
            </button>
            
            <div 
              className="event-banner-carousel"
              style={{ transform: `translateX(-${currentSlide * (100 / heroEvents.length)}%)` }}
            >
              {heroEvents.map((event, index) => (
                <div 
                  key={event.id}
                  className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ background: event.bgColor }}
                >
                  <div className="banner-content">
                    <h2 className="banner-title">{event.title}</h2>
                    <p className="banner-subtitle">{event.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="carousel-dots">
              {heroEvents.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Bottom Sections - Vertical Layout */}
          <div className="bottom-widgets">
            <div className="attendance-tracker">
              <h3>Attendance Tracker</h3>
              <p className="semester-label">This semester</p>
              <div className="attendance-circle">
                <div className="progress-circle">
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      strokeDashoffset={`${2 * Math.PI * 50 * (1 - 0.83)}`}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                    />
                  </svg>
                  <div className="attendance-percentage">
                    <span className="percentage">83%</span>
                    <span className="label">Present</span>
                  </div>
                </div>
              </div>
              <button 
                className="attendance-calendar-btn"
                onClick={handleAttendanceCalendarOpen}
              >
                <FaCalendarAlt /> View Day-wise Attendance
              </button>
            </div>

            <div className="outstanding-fees">
              <h3>Outstanding Fees</h3>
              <div className="fees-table-container">
                <table className="fees-table">
                  <thead>
                    <tr>
                      <th>Year/Semester</th>
                      <th>Paid Amount</th>
                      <th>Outstanding</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feesData.map((fee) => (
                      <tr key={fee.id} className={`fee-row ${fee.status}`}>
                        <td>
                          <div className="year-info">
                            <div className="year-name">{fee.year}</div>
                            <div className="due-date">{fee.dueDate}</div>
                          </div>
                        </td>
                        <td>
                          <div className="amount paid">
                            ₹{fee.paidAmount.toLocaleString('en-IN')}
                          </div>
                        </td>
                        <td>
                          <div className={`amount outstanding ${fee.status}`}>
                            ₹{fee.outstandingAmount.toLocaleString('en-IN')}
                          </div>
                        </td>
                        <td>
                          {fee.outstandingAmount > 0 ? (
                            <button 
                              className={`pay-btn ${fee.status}`}
                              onClick={handleQuickLinkClick}
                            >
                              Pay Now
                            </button>
                          ) : (
                            <span className="paid-status">✓ Paid</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="certifications">
              <h3>Certifications</h3>
              <p className="cert-subtitle">Your earned certificates.</p>
              <div className="certificates-list">
                {certificates.map((cert) => (
                  <div key={cert.id} className="certificate-item">
                    <div className="cert-icon">{cert.icon}</div>
                    <div className="cert-info">
                      <div className="cert-name">{cert.name}</div>
                      <div className="cert-date">Issued: {cert.issueDate}</div>
                    </div>
                    <div className="cert-actions">
                      <button 
                        className="preview-btn"
                        onClick={() => handleCertificatePreview(cert)}
                      >
                        <FaEye />
                      </button>
                      <button 
                        className="download-btn"
                        onClick={handleQuickLinkClick}
                      >
                        <FaDownload />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Profile and Notifications (40% width) */}
        <div className="right-section">
          {/* Student Profile Card */}
          <div className="student-profile">
            <div className="profile-avatar">
              <div className="avatar-circle">
                <FaUserGraduate />
              </div>
            </div>
            <div className="profile-info">
              <h3>Alex Johnson</h3>
              <p>Student ID: 12345</p>
              <button className="view-profile-btn" onClick={handleViewProfile}>
                View Profile
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="notifications-panel">
            <h3>Notifications</h3>
            <div className="notifications-list">
              {notifications.map((notification) => (
                <div key={notification.id} className={`notification-item ${notification.type}`}>
                  <div className="notification-icon">{notification.icon}</div>
                  <div className="notification-content">
                    <div className="notification-title">{notification.title}</div>
                    <div className="notification-description">{notification.description}</div>
                  </div>
                  <div className="notification-time">{notification.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3>Quick Links</h3>
            <div className="quick-links-grid">
              {quickLinks.map((link) => (
                <div 
                  key={link.id} 
                  className="quick-link-item"
                  style={{ backgroundColor: `${link.color}15` }}
                  onClick={handleQuickLinkClick}
                >
                  <div className="quick-link-icon" style={{ color: link.color }}>
                    {link.icon}
                  </div>
                  <div className="quick-link-name">{link.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Work in Progress Modal */}
      {showWorkInProgress && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Work in Progress</h3>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            <div className="work-in-progress">
              <div className="progress-icon"><FaCog /></div>
              <h3>Work in Progress</h3>
              <p>This feature is currently under development. Please check back soon!</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Preview Modal */}
      {showCertificatePreview && selectedCertificate && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content certificate-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Certificate Preview</h3>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            <div className="certificate-preview">
              <div className="certificate-card">
                <div className="certificate-header">
                  <div className="cert-logo">{selectedCertificate.icon}</div>
                  <h2>Certificate of Completion</h2>
                </div>
                <div className="certificate-body">
                  <p>This is to certify that</p>
                  <h3 className="student-name">Alex Johnson</h3>
                  <p>has successfully completed</p>
                  <h4 className="course-name">{selectedCertificate.name}</h4>
                  <p className="issue-date">Issued on {selectedCertificate.issueDate}</p>
                </div>
                <div className="certificate-footer">
                  <div className="signature-section">
                    <div className="signature-line"></div>
                    <p>Authorized Signature</p>
                  </div>
                </div>
              </div>
              <div className="certificate-actions">
                <button className="download-cert-btn" onClick={handleQuickLinkClick}>
                  <FaDownload /> Download Certificate
                </button>
                <button className="close-cert-btn" onClick={closeModal}>
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Attendance Calendar Modal */}
      {showAttendanceCalendar && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content attendance-calendar-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Day-wise Attendance - {getMonthName()} {new Date().getFullYear()}</h3>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            <div className="attendance-calendar">
              <div className="calendar-legend">
                <div className="legend-item">
                  <div className="legend-color present"></div>
                  <span>Present</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color absent"></div>
                  <span>Absent</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color no-data"></div>
                  <span>No Data</span>
                </div>
              </div>
              
              <div className="calendar-grid">
                <div className="calendar-header">
                  <div className="day-label">Sun</div>
                  <div className="day-label">Mon</div>
                  <div className="day-label">Tue</div>
                  <div className="day-label">Wed</div>
                  <div className="day-label">Thu</div>
                  <div className="day-label">Fri</div>
                  <div className="day-label">Sat</div>
                </div>
                
                <div className="calendar-days">
                  {generateCalendarDays().map((dayData, index) => (
                    <div 
                      key={index} 
                      className={`calendar-day ${
                        dayData ? `attendance-${dayData.status}` : 'empty'
                      }`}
                    >
                      {dayData ? dayData.day : ''}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
