import React from "react";
import "./App.css";

function App() {
  const upcomingWebinars = [
    {
      date: "JULY 15, 2024 | 2:00 PM",
      title: "Mastering Academic Writing",
      instructor: "with Dr. Emily Carter",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop&auto=format",
      type: "writing"
    },
    {
      date: "JULY 22, 2024 | 11:00 AM", 
      title: "Effective Study Techniques",
      instructor: "with Professor David Lee",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&auto=format",
      type: "study"
    },
    {
      date: "JULY 29, 2024 | 4:00 PM",
      title: "Career Planning for Graduates", 
      instructor: "with Ms. Sarah Johnson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&auto=format",
      type: "career"
    }
  ];

  const pastWebinars = [
    {
      date: "JUNE 10, 2024",
      title: "Introduction to Research Methods",
      instructor: "Dr. Michael Brown",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop&auto=format",
      type: "research"
    },
    {
      date: "JUNE 17, 2024",
      title: "Time Management Strategies",
      instructor: "Ms. Jessica Green", 
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format",
      type: "management"
    },
    {
      date: "JUNE 24, 2024",
      title: "Networking for Success",
      instructor: "Mr. Robert Taylor",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop&auto=format",
      type: "networking"
    }
  ];


  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1>Webinars</h1>
        <p>Explore upcoming webinars and workshops designed to enhance your academic journey and professional development.</p>
      </div>

      <div className="main-content">
        {/* Upcoming Webinars */}
        <section className="section">
          <h2>Upcoming Webinars</h2>
          <div className="webinar-grid">
            {upcomingWebinars.map((webinar, index) => (
              <div key={index} className="webinar-card">
                <div className="webinar-image">
                  <img src={webinar.image} alt={webinar.title} />
                </div>
                <div className="webinar-content">
                  <div>
                    <div className="webinar-date">{webinar.date}</div>
                    <h3 className="webinar-title">{webinar.title}</h3>
                    <p className="webinar-instructor">{webinar.instructor}</p>
                  </div>
                  <button className="btn btn-primary">Join Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Webinars */}
        <section className="section">
          <h2>Past Webinars</h2>
          <div className="past-webinar-grid">
            {pastWebinars.map((webinar, index) => (
              <div key={index} className="past-webinar-card">
                <div className="webinar-image">
                  <img src={webinar.image} alt={webinar.title} />
                </div>
                <div className="webinar-content">
                  <div>
                    <div className="webinar-date">{webinar.date}</div>
                    <h3 className="webinar-title">{webinar.title}</h3>
                    <p className="webinar-instructor">{webinar.instructor}</p>
                  </div>
                  <button className="btn btn-secondary">View Recording</button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
