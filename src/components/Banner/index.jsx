import logoHome from '../../assets/banner-home.png'
import logoAbout from '../../assets/banner-about.png'
import '../../styles/banner.scss'

const Banner = ({ banner }) => {
  let imagePath
  let bannerText = ''

  if (banner === 'home') {
    imagePath = logoHome
    bannerText = 'Chez vous, partout et ailleurs'
  } else if (banner === 'about') {
    imagePath = logoAbout
  }

  return (
    <div className="banner">
      <img className="banner-img" src={imagePath} alt="Bannière" />
      <p className="banner-text">{bannerText}</p>
    </div>
  )
}

export default Banner
