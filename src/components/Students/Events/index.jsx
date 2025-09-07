import React from 'react';
import './style.css';

const Events = () => {
  return (
    <div className="events-page">
      <div className="events-header">
        <h1 className="events-title">Events</h1>
        <p className="events-subtitle">Upcoming and past events</p>
      </div>

      <div className="events-content">
        <div className="events-grid">
          <div className="event-card">
            <div className="event-date">
              <span className="day">15</span>
              <span className="month">Dec</span>
            </div>
            <div className="event-info">
              <h3 className="event-title">Annual Tech Fest 2024</h3>
              <p className="event-description">Join us for a week of innovation and technology.</p>
              <div className="event-meta">
                <span className="event-time">9:00 AM - 5:00 PM</span>
                <span className="event-location">Main Campus</span>
              </div>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <span className="day">20</span>
              <span className="month">Dec</span>
            </div>
            <div className="event-info">
              <h3 className="event-title">Career Fair</h3>
              <p className="event-description">Connect with top companies and explore career opportunities.</p>
              <div className="event-meta">
                <span className="event-time">10:00 AM - 4:00 PM</span>
                <span className="event-location">Student Center</span>
              </div>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <span className="day">25</span>
              <span className="month">Dec</span>
            </div>
            <div className="event-info">
              <h3 className="event-title">Holiday Break</h3>
              <p className="event-description">Winter break begins. Campus will be closed.</p>
              <div className="event-meta">
                <span className="event-time">All Day</span>
                <span className="event-location">Campus Wide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
