import React, { useState } from "react";
import "./Sidebar.css";
import { FaHome, FaUser, FaCog, FaTools, FaTasks } from "react-icons/fa"; // Example icons

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { icon: <FaHome />, label: "Internal Audit" },
    { icon: <FaUser />, label: "UAT Testing" },
    { icon: <FaCog />, label: "Intract" },
    { icon: <FaTasks />, label: "Queue" },
    { icon: <FaTools />, label: "Workflow" },
    { icon: <FaUser />, label: "Admin" },
    { icon: <FaHome />, label: "Asset" },
    { icon: <FaTools />, label: "Parent" },
    { icon: <FaTasks />, label: "Option One" },
    { icon: <FaCog />, label: "Option Two" },
    { icon: <FaHome />, label: "All Accessories" },
    { icon: <FaUser />, label: "Decorating" },
    { icon: <FaTools />, label: "Presenting" },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Sidebar Content */}
      <div className="sidebar-content">
        {/* <h2 className={`menu-title ${isCollapsed ? "hidden" : ""}`}>Menu</h2> */}
        <img src="risk.png" alt="img"  className="img"/>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="items">
              <span className="icon">{item.icon}</span>
              {!isCollapsed && <span className="label">{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Button */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? "→" : "←"}
      </button>
    </div>
  );
};

export default Sidebar;
