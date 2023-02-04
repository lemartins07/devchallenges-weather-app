import React from 'react'

import { Slider } from './style'

const SliderBar = ({ humidity }) => {
  return (
    <Slider humidity={humidity}>
      <div className="numbersDisplay">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className="sliderBox">
        <span></span>
      </div>
    </Slider>
  )
}

export default SliderBar
