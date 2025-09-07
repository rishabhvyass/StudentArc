import React from "react";
import { MdDashboard, MdGroup, MdSchool, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <nav>
          <Link to="/admin/dashboard" className="sidebar-icon">
            <MdDashboard className="icon" /> Dashboard
          </Link>
          <Link to="#" className="sidebar-icon">
            <MdGroup className="icon" /> Users Management
          </Link>
          <Link to="#" className="sidebar-icon">
            <MdSchool className="icon" /> Courses / Products
          </Link>
          <Link to="#" className="sidebar-icon">
            <MdSettings className="icon" /> Settings
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
