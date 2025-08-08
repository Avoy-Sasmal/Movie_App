import React, { useState } from "react";
import "./nav.css";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdUpcoming } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import ThemeToggle from "../../DarkMode/ThemeToggle";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <button className="mobile-menu-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <h1>MoviManiac</h1>
        </div>

        <div className="navbar-links desktop-nav">
          <a href="#popular">
            Popular <FaFireFlameCurved className="navbar_emoji" />
          </a>

          <a href="#top_rated">
            Top Rated <MdOutlineEmojiEmotions className="navbar_emoji" />
          </a>

          <a href="#upcoming">
            Upcoming <MdUpcoming className="navbar_emoji" />
          </a>

          <ThemeToggle />
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Navbar;
