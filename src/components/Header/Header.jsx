import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import './header.scss'

function Header() {
  const [activePage, setActivePage] = useState('')

  return (
    <div className="header-container">
      <img className="header-logo" src={logo} alt="logo" />
      <nav className="header-link-container">
        <Link
          to="/"
          className={`header-link ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => setActivePage('home')}
        >
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={`header-link ${activePage === 'about' ? 'active' : ''}`}
          onClick={() => setActivePage('about')}
        >
          À propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
