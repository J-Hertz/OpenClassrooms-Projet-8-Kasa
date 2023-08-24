import React, { useState } from 'react'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import './slider.scss'

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentPosition = `${currentIndex + 1}/${images.length}`

  return (
    <div className="slider-container">
      <img
        className="slider-img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
      <div className="slider-arrow-container">
        <img
          className="slider-arrow-left"
          src={arrowLeft}
          alt="arrow left"
          onClick={handlePrev}
        ></img>
        <div className="slider-current-position">{currentPosition}</div>
        <img
          className="slider-arrow-right"
          src={arrowRight}
          alt="arrow right"
          onClick={handleNext}
        ></img>
      </div>
    </div>
  )
}

export default Slider
