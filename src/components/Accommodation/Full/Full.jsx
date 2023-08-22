import React from 'react'
import AccommodationData from '../../../data/logements.json'
import Collapsible from '../../Collapsible/Collapsible.jsx'
import './full.scss'

function Full(props) {
  const currentAccommodation = AccommodationData.find(
    (item) => item.id === props.id
  )

  const { title } = currentAccommodation
  const { location } = currentAccommodation
  const { tags } = currentAccommodation
  const { host } = currentAccommodation
  const { equipments } = currentAccommodation

  const { description } = currentAccommodation

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{location}</p>
      </div>
      <div>
        <p>{host.name}</p>
        <img src={host.picture} alt={host.name} />
      </div>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="display-flex">
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
