import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About/About.jsx'
import Home from '../pages/Home/Home.jsx'
import Error from '../pages/Error/Error.jsx'
import AccommodationPage from '../pages/AccommodationPage/AccommodationPage.jsx'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/fichelogement/:id" element={<AccommodationPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRouter
