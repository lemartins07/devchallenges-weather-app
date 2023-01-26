import React from 'react'
import getImageToShow from '../../utils/getImageToShow'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ImgWheater = ({ data, loading }) => {
  let imgPath = '/img/Clear.png'

  if (data) {
    const icon = data.list ? data.list.weather[0].icon : data.weather[0].icon
    imgPath = `/img/${getImageToShow(icon)}`
  }

  return loading ? (
    <p style={{ width: '66px', heigth: '62px' }}>
      <Skeleton />
    </p>
  ) : (
    <img src={imgPath} alt="weather icon" />
  )
}

export default ImgWheater
