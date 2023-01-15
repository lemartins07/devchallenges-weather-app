import React from 'react'
import getImageToShow from '../../utils/getImageToShow'

const ImgWheater = ({ data }) => {
  let imgPath = '/img/Clear.png'
  if (data.weather) {
    const icon = data.weather[0].icon
    imgPath = `/img/${getImageToShow(icon)}`
  }

  return <img src={imgPath} alt="weather icon" />
}

export default ImgWheater
