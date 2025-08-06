import React from 'react'
import "./nav.css"
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdUpcoming } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MoviManiac</h1>

      <div className="navbar-links">
        <a href="">
          Popular <FaFireFlameCurved className="navbar_emoji" />
        </a>

        <a href="">
          Top Rated <MdOutlineEmojiEmotions className="navbar_emoji" />
        </a>

        <a href="">
          Upcoming <MdUpcoming className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar
