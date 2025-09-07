import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { 
  MdDashboard, 
  MdGroup, 
  MdSchool, 
  MdBarChart,
  MdSettings, 
  MdExitToApp 
} from "react-icons/md";
import "./style.css";

const AdminSidebar = ({ isOpen, closeSidebar }) => {
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
      icon: <MdDashboard />,
      path: '/admin/dashboard',
      active: location.pathname === '/admin/dashboard'
    },
    {
      name: 'Users Management',
      icon: <MdGroup />,
      path: '/admin/users',
      active: location.pathname === '/admin/users',
      disabled: true
    },
    {
      name: 'Courses / Products',
      icon: <MdSchool />,
      path: '/admin/courses',
      active: location.pathname === '/admin/courses',
      disabled: true
    },
    {
      name: 'Reports & Analytics',
      icon: <MdBarChart />,
      path: '/admin/analytics',
      active: location.pathname === '/admin/analytics',
      disabled: true
    },
    {
      name: 'Settings',
      icon: <MdSettings />,
      path: '/admin/settings',
      active: location.pathname === '/admin/settings',
      disabled: true
    }
  ];

  return (
    <div className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="admin-sidebar-content">
        <nav className="admin-sidebar-nav">
          <ul className="admin-nav-list">
            {menuItems.map((item, index) => (
              <li key={index} className="admin-nav-item">
                {item.disabled ? (
                  <div className={`admin-nav-link disabled`}>
                    <div className="admin-nav-icon">
                      {item.icon}
                    </div>
                    <span className="admin-nav-text">{item.name}</span>
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className={`admin-nav-link ${item.active ? 'active' : ''}`}
                    onClick={closeSidebar}
                  >
                    <div className="admin-nav-icon">
                      {item.icon}
                    </div>
                    <span className="admin-nav-text">{item.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="admin-sidebar-footer">
          <button 
            className="admin-logout-btn"
            onClick={handleLogout}
          >
            <div className="admin-nav-icon">
              <MdExitToApp />
            </div>
            <span className="admin-nav-text">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
