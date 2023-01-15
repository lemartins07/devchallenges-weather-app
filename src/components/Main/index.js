import React, { useContext } from 'react'
import LightCloud from '../../assets/LightCloud.png'
import Footer from '../Footer/index'
import { GlobalContext } from '../../context/GlobalContext'

import {
  MainComponent,
  FiveDaysWheater,
  Highlights,
  TemperatureSelection,
} from './style'

const Main = () => {
  // eslint-disable-next-line no-unused-vars
  const data = useContext(GlobalContext)

  return (
    <>
      <MainComponent>
        <TemperatureSelection>
          <button className="active">ºC</button>
          <button>ºF</button>
        </TemperatureSelection>
        <FiveDaysWheater>
          <div className="box">
            <p>Tomorrow</p>
            <img src={LightCloud} alt="ajdkljaskld" />
            <div>
              <p className="max">16ºC</p>
              <p className="min">11ºC</p>
            </div>
          </div>
          <div className="box">
            <p>Tomorrow</p>
            <img src={LightCloud} alt="ajdkljaskld" />
            <div>
              <p className="max">16ºC</p>
              <p className="min">11ºC</p>
            </div>
          </div>
          <div className="box">
            <p>Tomorrow</p>
            <img src={LightCloud} alt="ajdkljaskld" />
            <div>
              <p className="max">16ºC</p>
              <p className="min">11ºC</p>
            </div>
          </div>
          <div className="box">
            <p>Tomorrow</p>
            <img src={LightCloud} alt="ajdkljaskld" />
            <div>
              <p className="max">16ºC</p>
              <p className="min">11ºC</p>
            </div>
          </div>
          <div className="box">
            <p>Tomorrow</p>
            <img src={LightCloud} alt="ajdkljaskld" />
            <div>
              <p className="max">16ºC</p>
              <p className="min">11ºC</p>
            </div>
          </div>
        </FiveDaysWheater>
        <Highlights>
          <h1>Today’s Hightlights </h1>
          <div className="box">
            <div className="windStatus">
              <h3>Wind status</h3>
              <p>
                7<span>mph</span>
              </p>
            </div>
            <div className="Humidity">
              <h3>Humidity</h3>
              <p>
                84<span>%</span>
              </p>
            </div>
            <div className="Visibility">
              <h3>Visibily</h3>
              <p>
                6,4 <span>miles</span>
              </p>
            </div>
            <div className="airPressure">
              <h3>Air Pressure</h3>
              <p>
                998 <span>mb</span>
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
