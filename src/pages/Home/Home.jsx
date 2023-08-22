import React from 'react'
import Banner from '../../components/Banner/Banner'
import AccommodationFactory from '../../components/Accommodation/AccommodationFactory/AccommodationFactory'
import accommodationsData from '../../data/logements.json'
import './home.scss'
import bannerImgHome from '../../assets/banner-home.png'

function Home() {
  const bannerText = 'Chez vous, partout et ailleurs'

  return (
    <div>
      <Banner bannerText={bannerText} imagePath={bannerImgHome} />
      <div className="card-container">
        {accommodationsData.map((accommodation) => (
          <AccommodationFactory
            key={accommodation.id}
            type="Card"
            id={accommodation.id}
            title={accommodation.title}
            cover={accommodation.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
