import logo from '../../assets/logo-white.png'
import '../../styles/footer.scss'

function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
