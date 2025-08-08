import React from "react";
import { useTheme } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      <div className="toggle-icon">
        {isDarkMode ? (
          <FaSun className="sun-icon" />
        ) : (
          <FaMoon className="moon-icon" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
