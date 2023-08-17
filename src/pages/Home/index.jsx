import Banner from '../../components/Banner'
import Card from '../../components/Card'
import accommodationsData from '../../data/logements.json'
import '../../styles/card.scss'
import '../../styles/home.scss'

function Home() {
  const firstSixAcccommodations = accommodationsData.slice(0, 6)

  return (
    <div>
      <Banner banner="home" />
      <div className="card-container">
        {firstSixAcccommodations.map((accommodation, index) => (
          <Card key={accommodation.id} accommodation={accommodation} />
        ))}
      </div>
    </div>
  )
}

export default Home
