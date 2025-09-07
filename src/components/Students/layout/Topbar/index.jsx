import React, { useState } from 'react';
import { FaBars, FaBell, FaSearch, FaUser, FaChevronDown } from 'react-icons/fa';
import './style.css';

const StudentTopbar = ({ toggleSidebar, sidebarOpen }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="student-topbar">
      <div className="student-topbar-left">
        <button 
          className="hamburger-btn"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <FaBars />
        </button>
        
        <div className="logo-section">
          <div className="logo-icon">
            <span className="logo-text">📚</span>
          </div>
          <h1 className="logo-title">Scholarly Hub</h1>
        </div>
      </div>

      <div className="student-topbar-center">
        <div className={`search-container ${searchFocused ? 'focused' : ''}`}>
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search courses, assignments..."
            className="search-input"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>

      <div className="student-topbar-right">
        <div className="notification-container">
          <button className="notification-btn">
            <FaBell />
            <span className="notification-badge">3</span>
          </button>
        </div>

        <div className="user-profile-container">
          <button 
            className="user-profile-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="user-avatar">
              <img 
                src="https://via.placeholder.com/32x32/4f46e5/ffffff?text=AJ" 
                alt="Alex Johnson" 
                className="avatar-img"
              />
            </div>
            <div className="user-info">
              <span className="user-name">Alex Johnson</span>
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

export default StudentTopbar;
