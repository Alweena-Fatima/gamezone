import React from 'react'
import './Bag.css'
function Bag({games,reference}) {
  return (
    <section id="cart" className="cart" ref={reference}>
        <h1>My Cart</h1>
    </section>
  )
}

export default Bag
