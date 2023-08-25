import React from 'react'
import Full from '../Full/Full.jsx'
import Card from '../Card/Card.jsx'

function AccommodationFactory({ type, accommodation }) {
  if (type === 'Full') {
    return <Full accommodation={accommodation} />
  } else {
    return <Card accommodation={accommodation} />
  }
}

export default AccommodationFactory
