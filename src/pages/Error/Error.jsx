import { Link } from 'react-router-dom'
import './error.scss'

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-404">404</h1>
      <p className="error-text">Oups! La page que vous demandez n'existe pas</p>
      <Link className="error-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
