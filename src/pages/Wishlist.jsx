import React from 'react'
import './Wishlist.css'
function Wishlist({games, reference}) {
  return (
    <section id="likeList" className="likeList " ref={reference}>
        <h1>My Cart</h1>
    </section>
  )
}

export default Wishlist
