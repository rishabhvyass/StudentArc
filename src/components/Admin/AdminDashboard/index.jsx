import React from "react";

const AdminDashboard = () => {
  return (
    <div className="ad">
      <main className="main">
        <h1>Dashboard</h1>

        {/* Summary */}
        <section className="summary-section">
          <div className="summary-cards">
            <div className="summary-card">
              <p>Total Users</p>
              <h3>1,250</h3>
            </div>
            <div className="summary-card">
              <p>Active Courses</p>
              <h3>35</h3>
            </div>
            <div className="summary-card">
              <p>Revenue</p>
              <h3>$45,000</h3>
            </div>
            <div className="summary-card">
              <p>Pending Tasks</p>
              <h3>12</h3>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="main-content">
          {/* Left Column */}
          <div className="left-column">
            {/* Recent Activity */}
            <h2>Recent Activity</h2>
            {/* <section className="activity-section"> */}
            <div className="activity-list">
              <section className="activity-section">
                <div className="activity-item">
                  <div className="avatar">SC</div>
                  <div className="activity-content">
                    <div className="activity-name">Sophia Clark</div>
                    <div className="activity-description">
                      New user registration
                    </div>
                  </div>

                  <div className="activity-time">2 hours ago</div>
                </div>
              </section>

              <section className="activity-section">
                <div className="activity-item">
                  <div className="avatar">EB</div>
                  <div className="activity-content">
                    <div className="activity-name">Ethan Bennett</div>
                    <div className="activity-description">Course completed</div>
                  </div>

                  <div className="activity-time">4 hours ago</div>
                </div>
              </section>

              <section className="activity-section">
                <div className="activity-item">
                  <div className="activity-icon">📄</div>
                  <div className="activity-content">
                    <div className="activity-name">
                      Advanced Web Development
                    </div>
                    <div className="activity-description">
                      New course published
                    </div>
                  </div>

                  <div className="activity-time">6 hours ago</div>
                </div>
              </section>
            </div>

            {/* </section> */}
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Tasks */}
              <h2>Tasks</h2>
            <section className="tasks-section">
              <div className="tasks-list">
                <div className="task-item">
                  <input type="checkbox" checked readOnly />
                  <span>Review new course submissions</span>
                </div>
                <div className="task-item">
                  <input type="checkbox" />
                  <span>Update user documentation</span>
                </div>
                <div className="task-item">
                  <input type="checkbox" />
                  <span>Schedule team meeting</span>
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className="notifications-section">
              <h2>Notifications</h2>
              <div className="notifications-list">
                <div className="notification-item">
                  <div className="avatar">SA</div>
                  <div className="notification-content">
                    <div className="notification-title">System Alert</div>
                    <div className="notification-message">
                      Server #12 is running low on disk space.
                    </div>
                    <div className="notification-time">1 hour ago</div>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="avatar">NM</div>
                  <div className="notification-content">
                    <div className="notification-title">New Message</div>
                    <div className="notification-message">
                      You have a new message from Liam Harris.
                    </div>
                    <div className="notification-time">3 hours ago</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Analytics */}
          <h2>Analytics</h2>
        <section className="analytics-section">
          <div className="analytics-cards">
            <div className="analytics-card">
              <div className="analytics-header">
                <h3>Monthly Users</h3>
                <div className="analytics-metric">+15%</div>
              </div>
              <p className="analytics-subtitle">from last 30 days</p>
              <div className="chart-placeholder line-chart">
                <div className="chart-line"></div>
              </div>
            </div>
            <div className="analytics-card">
              <div className="analytics-header">
                <h3>Revenue Trends</h3>
                <div className="analytics-metric">+8%</div>
              </div>
              <p className="analytics-subtitle">from last 12 months</p>
              <div className="chart-placeholder bar-chart">
                <div className="bar" style={{ height: "60%" }}></div>
                <div className="bar" style={{ height: "80%" }}></div>
                <div className="bar" style={{ height: "40%" }}></div>
                <div className="bar" style={{ height: "90%" }}></div>
              </div>
            </div>
            <div className="analytics-card">
              <div className="analytics-header">
                <h3>User Distribution</h3>
                <div className="analytics-metric">+5% engagement</div>
              </div>
              <p className="analytics-subtitle">By Course</p>
              <div className="course-distribution">
                <div className="course-item">
                  <span>Course A</span>
                  <div className="course-bar">
                    <div
                      className="course-progress"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="course-item">
                  <span>Course B</span>
                  <div className="course-bar">
                    <div
                      className="course-progress"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="course-item">
                  <span>Course C</span>
                  <div className="course-bar">
                    <div
                      className="course-progress"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="course-item">
                  <span>Course D</span>
                  <div className="course-bar">
                    <div
                      className="course-progress"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
