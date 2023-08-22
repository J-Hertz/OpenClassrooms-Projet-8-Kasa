import React from 'react'
import { useParams } from 'react-router-dom'
import AccommodationFactory from '../../components/Accommodation/AccommodationFactory/AccommodationFactory.jsx'

function AccommodationPage({ accommodation }) {
  const { id } = useParams()

  return <AccommodationFactory key={id} id={id} type="Full" />
}

export default AccommodationPage
