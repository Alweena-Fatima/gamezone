import React from 'react'
import './Home.css'
import Intro from '../components/Intro.jsx'
import GameCard from '../components/GameCard.jsx'
function Home({games ,DarkMode}) {
  return (
    <section id='home' className={`home active ${DarkMode ? 'dark' : 'light'}`}>
      <div className="container-fluid">
        <div className="row">
          <Intro DarkMode={DarkMode}></Intro>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h2 className='sectionTitle'>Games on Trend</h2>           
          </div>

        </div>
        <div className="row" id="games-section">
        {
          games.slice(0,5).map(game=>(
            <GameCard key={game._id} game={game} DarkMode={DarkMode}></GameCard>
          ))
        }
          
        </div>
      </div>
    </section>
  )
}

export default Home
