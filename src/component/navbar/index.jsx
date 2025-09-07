import React from "react";
import "./navbar/index.";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <h1 className="text-xl font-bold">Academics Hub</h1>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#">Dashboard</a>
          <a href="#">Courses</a>
          <a href="#">Grades</a>
          <a className="active" href="#">
            Webinars
          </a>
          <a href="#">Resources</a>
          <a href="#">Support</a>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-4">
          <button className="icon-btn">
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
            </svg>
          </button>
          <div
            className="profile-avatar"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKtGj9pZGJ3BrK375UT5-hQNLMqzjJ79nGcLMUo3PXUFGJTgldAccKT6ftS1j-OkLDhdu5g4QVsKlHYaydzPemDJXSzaBkKuBNN5YcK90ACfor4luMEyjIr9Yv2HcG9Ij3plDqN2pLy60IubLCT4ZYgBb6vPY_nSsWo82igQpsoDQT7rBHzO0vl3BcfU6ljASAnGU1wEyJOsJDpBZ_eSNWnL-OfYjp0wigdzzmNikUfUZP6oERaYxjbhPeuKEVWG1jRnRjAOAWyzha')",
            }}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
