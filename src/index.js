import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/global.scss'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import logementsData from './data/logements.json'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home banner="home" />} />
        <Route path="/a-propos" element={<About banner="about" />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
