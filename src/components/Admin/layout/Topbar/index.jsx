import React from "react";
import { GrSearch } from "react-icons/gr";
import { BsBell } from "react-icons/bs";

const Topbar = () => {
  return (
    <>
      <div className="TopbarMain">
        {/* main header starting */}
        <div className="adminLogo">
          <svg
            className="logo-icon"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
              fill="currentColor"
            />
          </svg>

          <span className="logoName"> StudentArc</span>
        </div>

        <div className="header-right">
          <div className="search">
            <span className="searchIcon">
              <GrSearch />
            </span>
            <input type="text" placeholder="Search" />
          </div>

          <button className="icon-btn">
            <span className="notificationIcon">
              <BsBell />
            </span>
          </button>

          <div
            className="profile"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCK1CoztXiAPtCPgcPeZulSXO2brmUxv8SBoJ3V78tBgWcmafroXqQV_x5m3NOT2bHAEPG8oIGahycMp7DzC3UTLJ6YQ2mJZNhJjgGCtHhNElVemUlrkxOhwpVmSD2CgZWVmUv1iiwpxuo1j3AC8TZ2bBCheUjEsuHgaLZX3ceptGo2uNuty3QMOqD6rBQAz3_NK4ZKLoxo4H8TgHxsQKKlgjBCVdsUt9cNDQuP6pNzWfJ9BpLY6lNzGVriLejNMI4thN662-VhVH7m")',
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
