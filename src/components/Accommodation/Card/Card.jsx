import './card.scss'
import { Link } from 'react-router-dom'

function Card({ accommodation }) {
  return (
    <Link to={`/fichelogement/${accommodation.id}`} className="card-link">
      <div className="card">
        <div className="card-image-container">
          <img
            className="card-image"
            src={accommodation.cover}
            alt={accommodation.title}
          />
        </div>
        <h3 className="card-title">{accommodation.title}</h3>
      </div>
    </Link>
  )
}

export default Card
