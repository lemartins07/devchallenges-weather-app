/* eslint-disable no-unsafe-finally */
import { createContext, useEffect, useState } from 'react'
import { SEARCH_CIT_GET, FIVE_DAYS_GET } from '../services/api'
import dateHelper from '../utils/dateHelper'
import moment from 'moment'

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
  const [fiveDayData, setFiveDayData] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [scale, setScale] = useState('c')
  const [activeBtn, setActiveBtn] = useState('c')

  function getFiveDaysForecast(data) {
    const today = moment().format('YYYY-MM-DD')
    const addedDates = []
    const filteredData = data.list.filter((item) => {
      const date = moment(item.dt_txt).format('YYYY-MM-DD')

      if (
        addedDates.includes(date) ||
        date === today ||
        addedDates.length >= 5
      ) {
        return false
      } else {
        addedDates.push(date)
        return true
      }
    })

    setFiveDayData(filteredData)
  }

  function convertTemperature(newScale) {
    setScale(newScale)

    if (data && fiveDayData && newScale === 'f' && scale === 'c') {
      // data.main.temp = (data.main.temp * 9) / 5 + 32
      // CELCIUS TO FAHRENHEIT
      setData(function (prevData) {
        return {
          ...prevData,
          main: {
            ...prevData.main,
            temp: (prevData.main.temp * 9) / 5 + 32,
          },
        }
      })
      // CELCIUS TO FAHRENHEIT
      const updatedFiveDayData = fiveDayData.map((prevState) => {
        return {
          ...prevState,
          main: {
            ...prevState.main,
            temp_min: (prevState.main.temp_min * 9) / 5 + 32,
            temp_max: (prevState.main.temp_max * 9) / 5 + 32,
          },
        }
      })

      setFiveDayData(updatedFiveDayData)
    } else if (data && newScale === 'c' && scale === 'f') {
      // FAHRENHEIT TO CELCIUS
      setData(function (data) {
        return {
          ...data,
          main: {
            ...data.main,
            temp: ((data.main.temp - 32) * 5) / 9,
          },
        }
      })

      // FAHRENHEIT TO CELCIUS
      const updatedFiveDayData = fiveDayData.map((prevState) => {
        return {
          ...prevState,
          main: {
            ...prevState.main,
            temp_min: ((prevState.main.temp_min - 32) * 5) / 9,
            temp_max: ((prevState.main.temp_max - 32) * 5) / 9,
          },
        }
      })

      setFiveDayData(updatedFiveDayData)
    }
  }

  async function getData(latitude, longitude) {
    const { url, options } = SEARCH_CIT_GET(latitude, longitude)
    const { url: url1, options: options1 } = FIVE_DAYS_GET(latitude, longitude)
    let responses, json, json1
    try {
      setError(null)
      setLoading(true)
      responses = await Promise.all([
        fetch(url, options),
        fetch(url1, options1),
      ])

      json = await responses[0].json()
      json1 = await responses[1].json()

      if (responses.ok === false) throw new Error(json.message)
    } catch (err) {
      json = null
      setError(err.message)
    } finally {
      setData(json)
      getFiveDaysForecast(json1)
      setLoading(false)
      return { responses, json }
    }
  }

  const getWetherByUserLocation = () => {
    const successCallback = (position) => {
      const { latitude, longitude } = position.coords
      getData(latitude, longitude)
      setScale('c')
      setActiveBtn('c')
    }

    const errorCallback = (error) => {
      console.log(error)
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        data,
        fiveDayData,
        loading,
        error,
        scale,
        activeBtn,
        getWetherByUserLocation,
        dateHelper,
        convertTemperature,
        getData,
        setActiveBtn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
