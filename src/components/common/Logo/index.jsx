import React from 'react';
import './style.css';

const StudentArcLogo = ({ size = 'medium', showTagline = true, className = '' }) => {
  const sizeClasses = {
    small: 'logo-small',
    medium: 'logo-medium', 
    large: 'logo-large',
    xlarge: 'logo-xlarge'
  };

  return (
    <div className={`studentarc-logo ${sizeClasses[size]} ${className}`}>
      {/* Graduation Cap SVG */}
      <div className="logo-icon">
        <svg
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cap-svg"
        >
          {/* Cap Base */}
          <path
            d="M10 45 L60 25 L110 45 L95 50 L60 35 L25 50 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="rgba(37, 99, 235, 0.1)"
            className="cap-base"
          />
          
          {/* Cap Top */}
          <path
            d="M25 50 L60 35 L95 50 L95 65 Q95 70 85 75 Q75 80 60 80 Q45 80 35 75 Q25 70 25 65 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="rgba(37, 99, 235, 0.05)"
            className="cap-top"
          />
          
          {/* Tassel String */}
          <line
            x1="60"
            y1="35"
            x2="60"
            y2="58"
            stroke="currentColor"
            strokeWidth="1.5"
            className="tassel-string"
          />
          
          {/* Tassel */}
          <g className="tassel">
            <ellipse cx="60" cy="62" rx="3" ry="6" fill="currentColor" />
            <line x1="57" y1="65" x2="57" y2="72" stroke="currentColor" strokeWidth="1" />
            <line x1="60" y1="65" x2="60" y2="75" stroke="currentColor" strokeWidth="1" />
            <line x1="63" y1="65" x2="63" y2="72" stroke="currentColor" strokeWidth="1" />
          </g>
          
          {/* Decorative Circle */}
          <circle
            cx="75"
            cy="40"
            r="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="decorative-circle"
          />
        </svg>
      </div>
      
      {/* Text Content */}
      <div className="logo-text">
        <div className="brand-name">
          <span className="student-text">Student</span>
          <span className="arc-text">ARC</span>
        </div>
        {showTagline && (
          <div className="tagline">Academic Record Centralized</div>
        )}
      </div>
    </div>
  );
};

export default StudentArcLogo;
