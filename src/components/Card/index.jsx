import '../../styles/card.scss'
/* import React, { useState } from 'react' */

function Card({ accommodation }) {
  /*  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  if (showDetails) {
    return (
      <div className="card-details">
        <img src={accommodation.cover} alt={accommodation.title} />
        <h3>{accommodation.title}</h3>
        <p>Description: {accommodation.description}</p>
        <p>Prix: {accommodation.price}</p>

      </div>
    )
  }
*/
  return (
    <div className="card">
      <img
        /*    onClick={toggleDetails} */
        className="card-image"
        src={accommodation.cover}
        alt={accommodation.title}
      />
      <h3 className="card-title">{accommodation.title}</h3>
    </div>
  )
}

export default Card
