import React from 'react'
import ImgWheater from '../ImgWheater'
// eslint-disable-next-line no-unused-vars
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { Box, Container } from './style'

const FiveDaysWheater = ({ fiveDayData, loading }) => {
  let newArrayDates = new Array(5)

  console.log(newArrayDates, loading)

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

  return loading ? (
    <Container>
      {newArrayDates.map((item, index) => (
        <Box key={index}>
          <p>Tomorrow</p>

          <ImgWheater data={item} loading={loading} />

          <div>
            <p className="max">
              {loading ? <Skeleton /> : `${item.main.temp_max.toFixed(0)} ºC`}
            </p>
            <p className="min">{item.main.temp_min.toFixed(0)}ºC</p>
          </div>
        </Box>
      ))}
    </Container>
  ) : (
    <Container>
      {newArrayDates.map((item) => (
        <Box key={item.dt}>
          <p>Tomorrow</p>

          <ImgWheater data={item} loading={loading} />
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
