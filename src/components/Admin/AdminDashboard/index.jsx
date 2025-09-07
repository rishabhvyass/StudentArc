import React from 'react';
import './style.css';

const AdminDashboard = () => {
  // Sample data matching the design
  const summaryCards = [
    {
      title: 'Total Users',
      value: '1,250',
      color: '#64748b'
    },
    {
      title: 'Active Courses',
      value: '35',
      color: '#64748b'
    },
    {
      title: 'Revenue',
      value: '$45,000',
      color: '#64748b'
    },
    {
      title: 'Pending Tasks',
      value: '12',
      color: '#64748b'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      user: 'Sophia Clark',
      action: 'New user registration',
      time: '2 hours ago',
      avatar: 'https://via.placeholder.com/40x40/4f46e5/ffffff?text=SC'
    },
    {
      id: 2,
      user: 'Ethan Bennett',
      action: 'Course completed',
      time: '4 hours ago',
      avatar: 'https://via.placeholder.com/40x40/10b981/ffffff?text=EB'
    },
    {
      id: 3,
      course: 'Advanced Web Development',
      action: 'New course published',
      time: '6 hours ago',
      icon: '📚'
    }
  ];

  const tasks = [
    {
      id: 1,
      title: 'Review new course submissions',
      completed: true
    },
    {
      id: 2,
      title: 'Update user documentation',
      completed: false
    },
    {
      id: 3,
      title: 'Schedule team meeting',
      completed: false
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'System Alert',
      message: 'Server #12 is running low on disk space.',
      time: '1 hour ago',
      avatar: 'https://via.placeholder.com/40x40/ef4444/ffffff?text=SA'
    },
    {
      id: 2,
      type: 'New Message',
      message: 'You have a new message from Liam Harris.',
      time: '3 hours ago',
      avatar: 'https://via.placeholder.com/40x40/3b82f6/ffffff?text=LH'
    }
  ];

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      
      <div className="dashboard-content">
        {/* Summary Section */}
        <div className="dashboard-section">
          <h2>Summary</h2>
          <div className="summary-grid">
            {summaryCards.map((card, index) => (
              <div key={index} className="summary-card">
                <h3>{card.title}</h3>
                <p className="summary-value" style={{ color: card.color }}>{card.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="main-content-grid">
          {/* Recent Activity */}
          <div className="content-card recent-activity">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-avatar">
                    {activity.avatar ? (
                      <img src={activity.avatar} alt={activity.user || activity.course} />
                    ) : (
                      <div className="activity-icon">{activity.icon}</div>
                    )}
                  </div>
                  <div className="activity-details">
                    <div className="activity-user">{activity.user || activity.course}</div>
                    <div className="activity-action">{activity.action}</div>
                  </div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Tasks */}
            <div className="content-card tasks">
              <h3>Tasks</h3>
              <div className="task-list">
                {tasks.map((task) => (
                  <div key={task.id} className="task-item">
                    <input 
                      type="checkbox" 
                      checked={task.completed} 
                      onChange={() => {}}
                      className="task-checkbox"
                    />
                    <span className={`task-title ${task.completed ? 'completed' : ''}`}>
                      {task.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="content-card notifications">
              <h3>Notifications</h3>
              <div className="notification-list">
                {notifications.map((notification) => (
                  <div key={notification.id} className="notification-item">
                    <div className="notification-avatar">
                      <img src={notification.avatar} alt={notification.type} />
                    </div>
                    <div className="notification-content">
                      <div className="notification-type">{notification.type}</div>
                      <div className="notification-message">{notification.message}</div>
                      <div className="notification-time">{notification.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="dashboard-section analytics-section">
          <h2>Analytics</h2>
          <div className="analytics-grid">
            <div className="analytics-card">
              <div className="analytics-header">
                <h4>Monthly Users</h4>
                <div className="analytics-trend positive">+15%</div>
              </div>
              <div className="analytics-subtitle">from last 30 days</div>
              <div className="chart-placeholder">
                <svg viewBox="0 0 300 100" className="chart-svg">
                  <polyline 
                    points="0,80 30,60 60,70 90,45 120,50 150,30 180,40 210,25 240,35 270,20 300,15" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            
            <div className="analytics-card">
              <div className="analytics-header">
                <h4>Revenue Trends</h4>
                <div className="analytics-trend positive">+8%</div>
              </div>
              <div className="analytics-subtitle">from last 12 months</div>
              <div className="chart-placeholder">
                <div className="bar-chart">
                  <div className="bar" style={{height: '40%'}}></div>
                  <div className="bar" style={{height: '60%'}}></div>
                  <div className="bar" style={{height: '80%'}}></div>
                  <div className="bar" style={{height: '100%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="analytics-card">
              <div className="analytics-header">
                <h4>User Distribution</h4>
                <div className="analytics-subtitle">By Course</div>
              </div>
              <div className="analytics-engagement">+5% engagement</div>
              <div className="course-distribution">
                <div className="course-item">
                  <span>Course A</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="course-item">
                  <span>Course B</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div className="course-item">
                  <span>Course C</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="course-item">
                  <span>Course D</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '55%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
