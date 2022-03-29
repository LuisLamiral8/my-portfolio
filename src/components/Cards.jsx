import React from 'react'
import '../styles/components/cards.scss'
const Cards = ({image, text}) => {
  return (
    <div className="card">
        <div className="card-img">
            <img src={image} alt="" width="70px" height="70px"/>
        </div>
        <div className="card-text">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Cards