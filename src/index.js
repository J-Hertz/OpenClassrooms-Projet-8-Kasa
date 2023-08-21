import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.scss'
import AppRouter from './Router/AppRouter'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
