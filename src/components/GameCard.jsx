import React from 'react';
import './GameCard.css';
import Rating from './Rating';

function GameCard({ game ,DarkMode }) {

  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
  <div className={`gameCard ${DarkMode ? 'dark' : 'light'}`}>
    <img
      src={`${process.env.PUBLIC_URL}${game.img}`}
      alt={game.title}
      className="img-fluid"
    />
    <a href="#" className="like"><i className="bi bi-balloon-heart"></i></a>
    <div className="Feature">
      <span className="gameGenre">{game.category}</span>
      <Rating rating={game.rating} />
    </div>
    <div className="gameName mt-4 mb-3">{game.title}</div>
    <div className="price"><div className='bag'><i className="bagIcon bi bi-cart-fill"></i></div><span>${game.price} </span></div>
    
  </div>
</div>

  );
}

export default GameCard;




