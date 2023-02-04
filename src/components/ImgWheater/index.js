import React, { useState, useContext } from 'react'
import getImageToShow from '../../utils/getImageToShow'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { GlobalContext } from '../../context/GlobalContext'

const ImgWheater = ({ data }) => {
  let imgPath = '/img/Clear.png'
  const [imgLoad, setImgLoad] = useState(true)
  const { loading } = useContext(GlobalContext)

  function handleLoad() {
    setImgLoad(false)
  }

  if (imgLoad && loading) {
    return (
      <p style={{ width: '100px', heigth: '100px' }}>
        <Skeleton />
      </p>
    )
  }

  if (data) {
    const icon = data.list ? data.list.weather[0].icon : data.weather[0].icon
    imgPath = `/img/${getImageToShow(icon)}`
    return <img src={imgPath} alt="weather icon" onLoad={handleLoad} />
  }
}

export default ImgWheater
