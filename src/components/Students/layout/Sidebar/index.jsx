import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext';
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
  FaDollarSign,
  FaSignOutAlt 
} from 'react-icons/fa';
import './style.css';

const StudentSidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    closeSidebar();
    navigate('/login');
  };

  const menuItems = [
    {
      name: 'Dashboard',
      icon: <FaHome />,
      path: '/dashboard',
      active: location.pathname === '/dashboard'
    },
    {
      name: 'Events',
      icon: <FaCalendarAlt />,
      path: '/events',
      active: location.pathname === '/events'
    },
    {
      name: 'Profile',
      icon: <FaUser />,
      path: '/student/profile',
      active: location.pathname === '/student/profile',
      disabled: true
    },
    {
      name: 'Webinars',
      icon: <FaVideo />,
      path: '/student/webinars',
      active: location.pathname === '/student/webinars',
      disabled: true
    },
    {
      name: 'Notifications',
      icon: <FaBell />,
      path: '/student/notifications',
      active: location.pathname === '/student/notifications',
      disabled: true
    },
    {
      name: 'Activity',
      icon: <FaChartLine />,
      path: '/student/activity',
      active: location.pathname === '/student/activity',
      disabled: true
    },
    {
      name: 'Certification',
      icon: <FaCertificate />,
      path: '/student/certification',
      active: location.pathname === '/student/certification',
      disabled: true
    },
    {
      name: 'Results',
      icon: <FaClipboardList />,
      path: '/student/results',
      active: location.pathname === '/student/results',
      disabled: true
    },
    {
      name: 'Library',
      icon: <FaBook />,
      path: '/student/library',
      active: location.pathname === '/student/library',
      disabled: true
    },
    {
      name: 'Outstanding Fees',
      icon: <FaDollarSign />,
      path: '/student/fees',
      active: location.pathname === '/student/fees',
      disabled: true
    }
  ];

  return (
    <div className={`student-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="student-sidebar-content">
        <nav className="student-sidebar-nav">
          <ul className="student-nav-list">
            {menuItems.map((item, index) => (
              <li key={index} className="student-nav-item">
                {item.disabled ? (
                  <div className={`student-nav-link disabled`}>
                    <div className="student-nav-icon">
                      {item.icon}
                    </div>
                    <span className="student-nav-text">{item.name}</span>
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                ) : (
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
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Logout Button */}
        <div className="sidebar-footer">
          <button 
            className="logout-btn"
            onClick={handleLogout}
          >
            <div className="student-nav-icon">
              <FaSignOutAlt />
            </div>
            <span className="student-nav-text">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentSidebar;
