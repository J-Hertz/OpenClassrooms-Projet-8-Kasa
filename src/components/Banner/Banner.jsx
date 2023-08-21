import React from 'react'
import './banner.scss'

const Banner = ({ imagePath, bannerText }) => {
  return (
    <div className="banner">
      <img className="banner-img" src={imagePath} alt="Bannière" />
      <p className="banner-text">{bannerText}</p>
    </div>
  )
}

export default Banner
