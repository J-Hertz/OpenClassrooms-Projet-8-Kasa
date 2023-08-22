import Banner from '../../components/Banner/Banner'
import Collapsible from '../../components/Collapsible/Collapsible.jsx'
import { aboutData } from '../../data/aboutData'
import bannerImgAbout from '../../assets/banner-about.png'

function About() {
  const bannerText = ''

  return (
    <div>
      <Banner bannerText={bannerText} imagePath={bannerImgAbout} />
      <div className="collapsible-container">
        {aboutData.map((data, index) => (
          <Collapsible
            context="about"
            key={index}
            title={data.title}
            content={data.content}
          />
        ))}
      </div>
    </div>
  )
}

export default About
