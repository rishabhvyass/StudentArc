import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaUser, 
  FaVideo, 
  FaBell, 
  FaChartLine, 
  FaCertificate, 
  FaClipboardList, 
  FaCalendarAlt, 
  FaBook, 
  FaDollarSign 
} from 'react-icons/fa';
import './style.css';

const StudentSidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();

  const menuItems = [
    {
      name: 'Home',
      icon: <FaHome />,
      path: '/student/dashboard',
      active: location.pathname === '/student/dashboard'
    },
    {
      name: 'Profile',
      icon: <FaUser />,
      path: '/student/profile',
      active: location.pathname === '/student/profile'
    },
    {
      name: 'Webinars',
      icon: <FaVideo />,
      path: '/student/webinars',
      active: location.pathname === '/student/webinars'
    },
    {
      name: 'Notifications',
      icon: <FaBell />,
      path: '/student/notifications',
      active: location.pathname === '/student/notifications'
    },
    {
      name: 'Activity',
      icon: <FaChartLine />,
      path: '/student/activity',
      active: location.pathname === '/student/activity'
    },
    {
      name: 'Certification',
      icon: <FaCertificate />,
      path: '/student/certification',
      active: location.pathname === '/student/certification'
    },
    {
      name: 'Results',
      icon: <FaClipboardList />,
      path: '/student/results',
      active: location.pathname === '/student/results'
    },
    {
      name: 'Events',
      icon: <FaCalendarAlt />,
      path: '/student/events',
      active: location.pathname === '/student/events'
    },
    {
      name: 'Library',
      icon: <FaBook />,
      path: '/student/library',
      active: location.pathname === '/student/library'
    },
    {
      name: 'Outstanding Fees',
      icon: <FaDollarSign />,
      path: '/student/fees',
      active: location.pathname === '/student/fees'
    }
  ];

  return (
    <div className={`student-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="student-sidebar-content">
        <nav className="student-sidebar-nav">
          <ul className="student-nav-list">
            {menuItems.map((item, index) => (
              <li key={index} className="student-nav-item">
                <Link 
                  to={item.path}
                  className={`student-nav-link ${item.active ? 'active' : ''}`}
                  onClick={closeSidebar}
                >
                  <div className="student-nav-icon">
                    {item.icon}
                  </div>
                  <span className="student-nav-text">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default StudentSidebar;
