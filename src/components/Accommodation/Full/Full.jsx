import React from 'react'
import AccommodationData from '../../../data/logements.json'
import Collapsible from '../../Collapsible/Collapsible.jsx'
import Rating from '../../Rating/Rating.jsx'
import Slider from '../../Slider/Slider.jsx'
import './full.scss'
import { useParams } from 'react-router-dom'

function Full(accommodation) {
  const currentAccommodation = AccommodationData.find(
    (item) => item.id === accommodation.id
  )
  const { id } = useParams()

  const {
    title,
    location,
    tags,
    host,
    equipments,
    rating,
    description,
    pictures,
  } = currentAccommodation

  return (
    <div className="full-container">
      <div>
        <Slider images={pictures} />
      </div>
      <div className="full-title-location-container">
        <h1 className="full-title">{title}</h1>
        <p className="full-location">{location}</p>
      </div>
      <div className="full-host-container">
        <p className="full-host-name">{host.name}</p>
        <img className="full-host-img" src={host.picture} alt={host.name} />
      </div>
      <ul className="full-tag-list">
        {tags.map((tag) => (
          <li className="full-tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <div className="full-rating-container">
        <Rating rating={rating} />
      </div>
      <div className="full-collapsible-container">
        <Collapsible context="full" title="Description" content={description} />
        <Collapsible
          context="full"
          title="Équipements"
          content={equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        />
      </div>
    </div>
  )
}

export default Full
