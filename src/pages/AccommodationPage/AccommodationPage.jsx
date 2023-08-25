import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import AccommodationData from '../../data/logements.json'
import Full from '../../components/Accommodation/Full/Full.jsx'

function AccommodationPage() {
  const { id } = useParams()

  const selectedAccommodation = AccommodationData.find(
    (accommodation) => accommodation.id === id
  )

  if (!selectedAccommodation) {
    return <Navigate to="/error" /> // Utilisez Navigate pour rediriger vers la page d'erreur
  }

  return <Full accommodation={selectedAccommodation} />
}

export default AccommodationPage
