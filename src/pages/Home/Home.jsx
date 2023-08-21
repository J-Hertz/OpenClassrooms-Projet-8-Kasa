import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card.jsx'
import accommodationsData from '../../data/logements.json'
import '../../components/Card/card.scss'
import './home.scss'
import bannerImgHome from '../../assets/banner-home.png'

function Home() {
  const bannerText = 'Chez vous, partout et ailleurs'

  return (
    <div>
      <Banner bannerText={bannerText} imagePath={bannerImgHome} />
      <div className="card-container">
        {accommodationsData.map((accommodation) => (
          <Card key={accommodation.id} accommodation={accommodation} />
        ))}
      </div>
    </div>
  )
}

export default Home
