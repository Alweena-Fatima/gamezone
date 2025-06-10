import React from 'react';
import './GameSection.css';

function GameSection({ games }) {
  const featured = games[0];
  const trending = games.slice(1, 5); // pick next few as trending

  return (
    <div className="game-section">
      {/* Featured Game */}
      <div className="featured-game">
        <img src={process.env.PUBLIC_URL + featured.img} alt="Featured" className="featured-img" />
        <div className="featured-info">
          <h1>{featured.title}</h1>
          <p>{featured.description}</p>
          <div className="btn-group">
            <button className="btn">Order Now</button>
            <button className="btn play">
              <i className="bi bi-play"></i> Play Now
            </button>
          </div>
        </div>
      </div>

      {/* Trending Games */}
      <div className="trending-section">
        <h2>🔥 Trending Games</h2>
        <div className="trending-row">
          {trending.map((game) => (
            <div className="game-card" key={game._id}>
              <img src={process.env.PUBLIC_URL + game.img} alt={game.title} />
              <h4>{game.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameSection;
