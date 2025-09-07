import React, { useState } from 'react';
import { FaBars, FaBell, FaSearch, FaUser, FaChevronDown } from 'react-icons/fa';
import { useAuth } from '../../../../context/AuthContext';
import './style.css';

const AdminTopbar = ({ toggleSidebar, sidebarOpen }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="admin-topbar">
      <div className="admin-topbar-left">
        <button 
          className="hamburger-btn"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <FaBars />
        </button>
        
        <div className="logo-section">
          <div className="logo-icon">
            <span className="logo-text">📊</span>
          </div>
          <h1 className="logo-title">EduPlatform</h1>
        </div>
      </div>

      <div className="admin-topbar-center">
        <div className={`search-container ${searchFocused ? 'focused' : ''}`}>
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>

      <div className="admin-topbar-right">
        <div className="notification-container">
          <button className="notification-btn">
            <FaBell />
            <span className="notification-badge">5</span>
          </button>
        </div>

        <div className="user-profile-container">
          <button 
            className="user-profile-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="user-avatar">
              <img 
                src="https://via.placeholder.com/32x32/4f46e5/ffffff?text=AU" 
                alt={user?.name || "Admin User"} 
                className="avatar-img"
              />
            </div>
            <div className="user-info">
              <span className="user-name">{user?.name || "Admin User"}</span>
            </div>
            <FaChevronDown className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`} />
          </button>

          {dropdownOpen && (
            <div className="user-dropdown">
              <div className="dropdown-item">
                <FaUser className="dropdown-icon" />
                <span>Profile</span>
              </div>
              <div className="dropdown-item">
                <span>Settings</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
