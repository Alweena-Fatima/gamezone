import React from 'react';
import './Intro.css';

function Intro({DarkMode}) {
  // Function to scroll smoothly to the games section(on on explore button)
  const handleExploreClick = () => {
    const target = document.getElementById("games-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={`intro-below-top ${DarkMode ? 'dark' : 'light'}`}>
      <div className="intro-content">
        <div className="intro-text">
          <h2 className="welcome-text">WELCOME TO THE</h2>
          <h2 className="arena-title">ARENA</h2>
          <p className="tagline">Where legends are born and battles are won</p>
          <div className="intro-buttons">
            <button className="intro-btn primary" onClick={handleExploreClick}>
              <i className="bi bi-controller" ></i> Explore Games
            </button>
            <button className="intro-btn secondary">
              <a href='https://escharts.com/upcoming-tournaments'><i className="bi bi-trophy"></i> <span>View Tournaments</span></a>
            </button>
          </div>
        </div>
        
        <div className="intro-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Games</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Genre</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Intro;