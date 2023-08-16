import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/header.scss'

function Header() {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" />
      <nav>
        <Link className="header-link" to="/">
          Accueil
        </Link>
        <Link className="header-link" to="/a-propos">
          À propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
