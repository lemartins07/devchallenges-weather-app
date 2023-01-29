import React from 'react'
import ImgWheater from '../ImgWheater'
// eslint-disable-next-line no-unused-vars
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import dateHelper from '../../utils/dateHelper'

import { Box, Container } from './style'

const FiveDaysWheater = ({ fiveDayData, loading }) => {
  let newArrayDates = new Array(5)
  const today = new Date().getDate()
  function formatDate(d) {
    const { month, weekDay, day } = dateHelper(d)
    return <p>{`${weekDay}, ${day} ${month}`} </p>
  }

  // pegar a previsão dos 5 próximos dias

  if (fiveDayData) {
    newArrayDates = fiveDayData.list.filter((item, i, array) => {
      let j, dt1, dt2
      // condição para o index não ultrapassar o último
      if (i < array.length - 1) {
        // define o J para pegar o próximo item do array
        j = i < array.length ? i + 1 : array.length - 1
        // pega o dia do item atual
        dt1 = new Date(item.dt_txt).getDate()
        // pega o dia do proximo item
        dt2 = new Date(array[j].dt_txt).getDate()
      }

      if (i === 39) {
        return item
      } else {
        return dt1 !== dt2 && dt1 !== today
      }
    })
  }

  return loading ? (
    <Container>
      {newArrayDates.map((item, index) => (
        <Box key={index}>
          {loading ? <Skeleton /> : <p>Tomorrow</p>}
          <ImgWheater data={item} loading={loading} />
          <div>
            <p className="max">
              {loading ? <Skeleton /> : `${item.main.temp_max.toFixed(0)} ºC`}
            </p>
            <p className="min">
              {loading ? <Skeleton /> : `${item.main.temp_min.toFixed(0)} ºC`}
            </p>
          </div>
        </Box>
      ))}
    </Container>
  ) : (
    <Container>
      {newArrayDates.map((item, index) => (
        <Box key={item.dt}>
          {index === 0 ? <p>Tomorrow</p> : formatDate(item.dt_txt)}

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
