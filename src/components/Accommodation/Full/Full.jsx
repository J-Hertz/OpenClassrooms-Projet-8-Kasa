import React from 'react'

import Collapsible from '../../Collapsible/Collapsible.jsx'
import Rating from '../../Rating/Rating.jsx'
import Slider from '../../Slider/Slider.jsx'
import './full.scss'

function Full({ accommodation }) {
  return (
    <div className="full-container">
      <Slider images={accommodation.pictures} />
      <div className="full-title-location-container">
        <h1 className="full-title">{accommodation.title}</h1>
        <p className="full-location">{accommodation.location}</p>
      </div>
      <ul className="full-tag-list">
        {accommodation.tags.map((tag) => (
          <li className="full-tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <div className="full-host-rating-container">
        <div className="full-host-container">
          <p className="full-host-name">{accommodation.host.name}</p>
          <img
            className="full-host-img"
            src={accommodation.host.picture}
            alt={accommodation.host.name}
          />
        </div>
        <div className="full-rating-container">
          <Rating rating={accommodation.rating} />
        </div>
      </div>
      <div className="full-collapsible-container">
        <Collapsible title="Description" content={accommodation.description} />
        <Collapsible
          title="Équipements"
          content={accommodation.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        />
      </div>
    </div>
  )
}

export default Full
