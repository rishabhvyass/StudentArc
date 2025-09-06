import React, { useState } from 'react';
import StudentTopbar from '../layout/Topbar';
import StudentSidebar from '../layout/Sidebar';
import './style.css';

const StudentLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="student-layout">
      <StudentTopbar 
        toggleSidebar={toggleSidebar} 
        sidebarOpen={sidebarOpen}
      />
      <div className="student-layout-container">
        <StudentSidebar 
          isOpen={sidebarOpen} 
          closeSidebar={closeSidebar}
        />
        <main className={`student-main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
          {children}
        </main>
      </div>
      {sidebarOpen && (
        <div 
          className="student-sidebar-overlay" 
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default StudentLayout;
