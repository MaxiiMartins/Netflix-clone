import React from 'react'
import "./Card.scss"

function Card({imgUrl}) {
  return (
    <img className='card' src={imgUrl} alt="cover" />
  )
}

export default Card