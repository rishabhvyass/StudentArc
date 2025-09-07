import React, { useState } from 'react';
import AdminTopbar from '../layout/Topbar';
import AdminSidebar from '../layout/sidebar';
import './style.css';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="admin-layout">
      <AdminTopbar 
        toggleSidebar={toggleSidebar} 
        sidebarOpen={sidebarOpen}
      />
      <div className="admin-layout-container">
        <AdminSidebar 
          isOpen={sidebarOpen} 
          closeSidebar={closeSidebar}
        />
        <main className={`admin-main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
          {children}
        </main>
      </div>
      {sidebarOpen && (
        <div 
          className="admin-sidebar-overlay" 
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;
