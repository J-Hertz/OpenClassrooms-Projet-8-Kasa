import React from 'react'
import logoHome from '../../assets/banner-home.png'
import logoAbout from '../../assets/banner-about.png'
import '../../styles/banner.scss'

const Banner = ({ banner }) => {
  let imageUrl
  let bannerText = ''

  if (banner === 'home') {
    imageUrl = logoHome
    bannerText = 'Chez vous, partout et ailleurs'
  } else if (banner === 'about') {
    imageUrl = logoAbout
  }

  return (
    <div className="banner">
      <img className="banner-img" src={imageUrl} alt="Bannière" />
      <p className="banner-text">{bannerText}</p>
    </div>
  )
}

export default Banner
