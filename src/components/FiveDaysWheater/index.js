import React from 'react'
import ImgWheater from '../ImgWheater'
// eslint-disable-next-line no-unused-vars
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import dateHelper from '../../utils/dateHelper'

import { Box, Container } from './style'

const FiveDaysWheater = ({ fiveDayData, loading, scale }) => {
  function formatDate(d) {
    const { month, weekDay, day } = dateHelper(d)
    return <p>{`${weekDay}, ${day} ${month}`} </p>
  }

  return loading ? (
    <Container>
      {fiveDayData.map((item, index) => (
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
      {fiveDayData.map((item, index) => (
        <Box key={item.dt}>
          {index === 0 ? <p>Tomorrow</p> : formatDate(item.dt_txt)}

          <ImgWheater data={item} loading={loading} />
          <div>
            <p className="max">
              {item.main.temp_max.toFixed(0)}
              {scale === 'c' ? 'ºC' : 'ºF'}
            </p>
            <p className="min">
              {item.main.temp_min.toFixed(0)}
              {scale === 'c' ? 'ºC' : 'ºF'}
            </p>
          </div>
        </Box>
      ))}
    </Container>
  )
}

export default FiveDaysWheater
