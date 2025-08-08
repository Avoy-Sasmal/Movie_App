import React from "react";
import "./Sidebar.css";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdUpcoming } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import ThemeToggle from "../../DarkMode/ThemeToggle";

const Sidebar = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    onClose(); // Close sidebar when a link is clicked
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <h2>MoviManiac</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <a href="#popular" onClick={handleLinkClick}>
              <FaFireFlameCurved className="nav-icon" />
              <span>Popular</span>
            </a>

            <a href="#top_rated" onClick={handleLinkClick}>
              <MdOutlineEmojiEmotions className="nav-icon" />
              <span>Top Rated</span>
            </a>

            <a href="#upcoming" onClick={handleLinkClick}>
              <MdUpcoming className="nav-icon" />
              <span>Upcoming</span>
            </a>
          </nav>

          <div className="sidebar-footer">
            <div className="theme-toggle-container">
              <span>Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
