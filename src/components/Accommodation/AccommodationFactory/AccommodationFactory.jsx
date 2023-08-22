import React from 'react'
import Full from '../Full/Full.jsx'
import Card from '../Card/Card.jsx'

function AccommodationFactory(accommodation) {
  const { type, id, title, cover } = accommodation

  if (type === 'Full') {
    return <Full id={id} />
  } else {
    return <Card accommodation={{ id, title, cover }} />
  }
}

export default AccommodationFactory
