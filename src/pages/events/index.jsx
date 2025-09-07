import React, { useState, useEffect } from 'react';
import { FaCog } from 'react-icons/fa';
import './style.css';

const Events = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedHeroEvent, setSelectedHeroEvent] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Hero carousel data
  const heroEvents = [
    {
      id: 1,
      title: "Annual Tech Symposium 2024",
      subtitle: "Innovate, Inspire, Ignite. Join us for a day of discovery.",
      image: "/api/placeholder/800/400",
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      date: "Dec 15, 2024 - 9:00 AM",
      description: "Join us for the most anticipated technology event of the year! Featuring keynote speakers, interactive workshops, and networking opportunities with industry leaders. Discover the latest innovations in AI, blockchain, and emerging technologies.",
      location: "Tech Center Auditorium"
    },
    {
      id: 2,
      title: "Campus Innovation Summit",
      subtitle: "Exploring the future of technology and education.",
      image: "/api/placeholder/800/400",
      bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      date: "Jan 20, 2025 - 10:00 AM",
      description: "A collaborative summit bringing together educators, students, and tech innovators to discuss the future of learning. Experience hands-on demos, panel discussions, and startup showcases.",
      location: "Innovation Hub"
    },
    {
      id: 3,
      title: "Research Excellence Conference",
      subtitle: "Showcasing groundbreaking research and discoveries.",
      image: "/api/placeholder/800/400",
      bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      date: "Feb 10, 2025 - 8:30 AM",
      description: "Present your research, learn from peers, and connect with potential collaborators. This conference highlights cutting-edge research across multiple disciplines including science, technology, and social sciences.",
      location: "Research Complex"
    }
  ];

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      date: "Oct 25, 2024 - 10:00 AM",
      title: "Campus Career Fair",
      description: "Connect with top employers and explore internship and full-time opportunities across various industries.",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      date: "Nov 05, 2024 - 2:00 PM",
      title: "Study Skills Workshop",
      description: "Learn effective study techniques, time management, and exam preparation strategies to boost your academic performance.",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      date: "Nov 12, 2024 - 6:00 PM",
      title: "Welcome Back Mixer",
      description: "Kick off the new semester with a fun and engaging mixer for all students. Music, food, and great company!",
      image: "/api/placeholder/300/200"
    }
  ];

  // Previous events data
  const previousEvents = [
    {
      id: 1,
      title: "Alumni Networking Event",
      date: "April 15, 2024",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ]
    },
    {
      id: 2,
      title: "Research Symposium",
      date: "March 22, 2024",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ]
    },
    {
      id: 3,
      title: "Student Leadership Conference",
      date: "February 18, 2024",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ]
    }
  ];

  const handleRegisterClick = (eventId) => {
    setSelectedEvent(eventId);
    setShowRegistrationForm(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handlePreviousEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const handleHeroEventClick = (event) => {
    setSelectedHeroEvent(event);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroEvents.length);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroEvents.length) % heroEvents.length);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroEvents.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroEvents.length]);

  const closeModal = () => {
    setShowRegistrationForm(false);
    setShowEventModal(false);
    setSelectedEvent(null);
    setFormSubmitted(false);
    setSelectedHeroEvent(null);
  };

  return (
    <div className="events-container">

      {/* Hero Carousel */}
      <div className="hero-carousel-container">
        {/* Previous Arrow */}
        <button className="carousel-arrow carousel-arrow-prev" onClick={prevSlide}>
          ‹
        </button>
        
        {/* Next Arrow */}
        <button className="carousel-arrow carousel-arrow-next" onClick={nextSlide}>
          ›
        </button>
        
        <div 
          className="hero-carousel"
          style={{ transform: `translateX(-${currentSlide * (100 / heroEvents.length)}%)` }}
        >
          {heroEvents.map((event, index) => (
            <div 
              key={event.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ background: event.bgColor }}
              onClick={() => handleHeroEventClick(event)}
            >
              <div className="hero-content">
                <div className="campus-badge">
                  <div className="campus-circle">
                    <span>CAMPUS</span>
                    <span>EVENT</span>
                  </div>
                </div>
                <h1 className="hero-title">{event.title}</h1>
                <p className="hero-subtitle">{event.subtitle}</p>
                <div className="hero-click-hint">Click to learn more</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots Navigation */}
        <div className="carousel-dots">
          {heroEvents.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Selected Hero Event Details */}
      {selectedHeroEvent && (
        <div className="hero-event-details">
          <div className="hero-details-container">
            <button className="close-hero-details" onClick={() => setSelectedHeroEvent(null)}>×</button>
            <div className="hero-details-content">
              <h2>{selectedHeroEvent.title}</h2>
              <div className="hero-details-info">
                <div className="hero-detail-item">
                  <strong>Date:</strong> {selectedHeroEvent.date}
                </div>
                <div className="hero-detail-item">
                  <strong>Location:</strong> {selectedHeroEvent.location}
                </div>
                <div className="hero-detail-item">
                  <strong>Description:</strong> {selectedHeroEvent.description}
                </div>
              </div>
              <button 
                className="hero-register-btn"
                onClick={() => {
                  setSelectedEvent(selectedHeroEvent.id);
                  setShowRegistrationForm(true);
                  setSelectedHeroEvent(null);
                }}
              >
                Register for this Event
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upcoming Events */}
      <div className="upcoming-events-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-info">
                <div className="event-date">{event.date}</div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <button 
                  className="register-btn"
                  onClick={() => handleRegisterClick(event.id)}
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Events */}
      <div className="previous-events-section">
        <h2 className="section-title">Previous Events</h2>
        <div className="previous-events-grid">
          {previousEvents.map((event) => (
            <div 
              key={event.id} 
              className="previous-event-card"
              onClick={() => handlePreviousEventClick(event)}
            >
              <div className="previous-event-image">
                <img src={event.images[0]} alt={event.title} />
                <div className="image-overlay">
                  <span className="image-count">+{event.images.length} photos</span>
                </div>
              </div>
              <div className="previous-event-info">
                <h3 className="previous-event-title">{event.title}</h3>
                <p className="previous-event-date">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Event Registration</h3>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            {!formSubmitted ? (
              <form className="registration-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="studentId">Student ID</label>
                  <input type="text" id="studentId" name="studentId" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-actions">
                  <button type="button" onClick={closeModal}>Cancel</button>
                  <button type="submit">Register</button>
                </div>
              </form>
            ) : (
              <div className="work-in-progress">
                <div className="progress-icon"><FaCog /></div>
                <h3>Work in Progress</h3>
                <p>Your registration is being processed. You will receive a confirmation email shortly.</p>
                <button onClick={closeModal}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Event Images Modal */}
      {showEventModal && selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="event-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedEvent.title}</h3>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            <div className="image-gallery">
              {selectedEvent.images.map((image, index) => (
                <div key={index} className="gallery-image">
                  <img src={image} alt={`${selectedEvent.title} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
