import React, { useState, useEffect } from "react";
import "./Preloader.css";
import { FaFilm, FaPlay } from "react-icons/fa";

const Preloader = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Hide preloader after completion
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15; // Random progress increments
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        {/* Movie icon with animation */}
        <div className="movie-icon">
          <FaFilm className="film-icon" />
          <FaPlay className="play-icon" />
        </div>

        {/* App title */}
        <h1 className="app-title">MoviManiac</h1>

        {/* Loading text */}
        <p className="loading-text">Loading your movie experience...</p>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <span className="progress-text">{Math.round(loadingProgress)}%</span>
        </div>

        {/* Loading dots */}
        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
