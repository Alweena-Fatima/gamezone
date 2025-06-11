import React from 'react'
import './Genre.css'
function Genre({games, reference}) {
  return (
    <div>
        <section id="genre" className='genre' ref={reference}>
        
            <h1> hello category</h1>
        </section>
      
    </div>
  )
}

export default Genre
