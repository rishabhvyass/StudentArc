import React from 'react';
import './style.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin panel</p>
      </div>
      
      <div className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p className="stat-number">1,234</p>
          </div>
          <div className="stat-card">
            <h3>Active Sessions</h3>
            <p className="stat-number">89</p>
          </div>
          <div className="stat-card">
            <h3>System Status</h3>
            <p className="stat-number">Online</p>
          </div>
        </div>
        
        <div className="dashboard-section">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <span>User login</span>
              <span>2 minutes ago</span>
            </div>
            <div className="activity-item">
              <span>System update</span>
              <span>1 hour ago</span>
            </div>
            <div className="activity-item">
              <span>New user registered</span>
              <span>3 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
