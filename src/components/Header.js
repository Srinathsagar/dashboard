import React from "react";
import { FaHome, FaCog, FaUserCircle } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="left">
        <span>Chat / Feed Chat</span>
      </div>
      <div className="right-section">
        <div className="section-item">
          <span className="icon">
            <FaHome />
          </span>
          <span className="badge hod-badge">Process Owner HOD</span>
        </div>
        <div className="section-item">
          <span className="badge admin-badge">Admin</span>
          <span>Palak Bansal</span>
          <span className="icon">
            <FaUserCircle />
          </span>
        </div>
        <span className="icon">
          <FaCog />
        </span>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Header;
