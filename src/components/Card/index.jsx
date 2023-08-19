import React, { useState } from 'react'
import '../../styles/card.scss'

function Card({ accommodation }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`card ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <img
        className="card-image"
        src={accommodation.cover}
        alt={accommodation.title}
      />
      <h3 className="card-title">{accommodation.title}</h3>
      {isOpen && (
        <div className="additional-info">
          {/* Render additional information here */}
        </div>
      )}
    </div>
  )
}

export default Card
