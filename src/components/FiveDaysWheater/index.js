import React from 'react'
import ImgWheater from '../ImgWheater'

import { Box, Container } from './style'

const FiveDaysWheater = ({ fiveDayData }) => {
  let newArrayDates = []

  if (fiveDayData) {
    newArrayDates = fiveDayData.list.filter((item, i, array) => {
      let j, dt1, dt2

      if (i < array.length - 1) {
        j = i < array.length ? i + 1 : array.length - 1
        dt1 = new Date(item.dt_txt).getDay()
        dt2 = new Date(array[j].dt_txt).getDay()
      }

      return dt1 !== dt2
    })
  }

  // console.log(newArrayDates)

  return (
    <Container>
      {newArrayDates.map((item) => (
        <Box key={item.dt}>
          <p>Tomorrow</p>
          <ImgWheater data={item} />
          <div>
            <p className="max">{item.main.temp_max.toFixed(0)}ºC</p>
            <p className="min">{item.main.temp_min.toFixed(0)}ºC</p>
          </div>
        </Box>
      ))}
    </Container>
  )
}

export default FiveDaysWheater
