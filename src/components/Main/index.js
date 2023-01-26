import React, { useContext } from 'react'
import Footer from '../Footer/index'
import { GlobalContext } from '../../context/GlobalContext'
import FiveDaysWheater from '../FiveDaysWheater'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { MainComponent, Highlights, TemperatureSelection } from './style'

const Main = () => {
  const { data, fiveDayData, loading } = useContext(GlobalContext)

  if (data)
    return (
      <>
        <MainComponent>
          <TemperatureSelection>
            <button className="active">ºC</button>
            <button>ºF</button>
          </TemperatureSelection>
          <FiveDaysWheater fiveDayData={fiveDayData} loading={loading} />
          <Highlights>
            <h1>Today’s Hightlights </h1>
            <div className="box">
              <div className="windStatus">
                <h3>Wind status</h3>
                <p>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <>
                      {data.wind.speed}
                      <span>mph</span>
                    </>
                  )}
                </p>
              </div>
              <div className="Humidity">
                <h3>Humidity</h3>
                <p>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <>
                      {data.main.humidity}
                      <span>%</span>
                    </>
                  )}
                </p>
              </div>
              <div className="Visibility">
                <h3>Visibily</h3>
                <p>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <>
                      {data.visibility}
                      <span>miles</span>
                    </>
                  )}
                </p>
              </div>
              <div className="airPressure">
                <h3>Air Pressure</h3>
                <p>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <>
                      {data.main.pressure} <span>mb</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </Highlights>
        </MainComponent>
        <Footer />
      </>
    )
}

export default Main
