import React, { useContext } from 'react'
import Footer from '../Footer/index'
import { GlobalContext } from '../../context/GlobalContext'
import FiveDaysWheater from '../FiveDaysWheater'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { MainComponent, Highlights, WindArrowBox } from './style'
import TemperatureSelection from '../Forms/TemperatureSelection'
import SliderBar from '../SliderBar/index'
import { FaLocationArrow } from 'react-icons/fa'

const Main = () => {
  const { data, fiveDayData, loading, scale, activeBtn, setActiveBtn } =
    useContext(GlobalContext)

  if (data) {
    return (
      <>
        <MainComponent>
          <div className="temperatureSelection">
            <TemperatureSelection
              id="c"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            >
              ºC
            </TemperatureSelection>
            <TemperatureSelection
              id="f"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            >
              ºF
            </TemperatureSelection>
          </div>
          <FiveDaysWheater
            fiveDayData={fiveDayData}
            loading={loading}
            scale={scale}
          />
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
                <WindArrowBox windSpeed={data.wind.speed}>
                  <FaLocationArrow />
                </WindArrowBox>
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
                <SliderBar humidity={data.main.humidity} />
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
}

export default Main
