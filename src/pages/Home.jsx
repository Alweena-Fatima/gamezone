import React from 'react'
import './Home.css'
import GameSection from '../components/GameSection'

function Home({games}) {
  return (
    <section id='home' className='home active'>
      <div className="container-fluid">
        <div className="row">
        <GameSection games={games}></GameSection>

        </div>
      </div>
    </section>
  )
}

export default Home
