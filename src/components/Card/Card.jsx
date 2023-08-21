import './card.scss'

function Card({ accommodation }) {
  return (
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
  )
}

export default Card
