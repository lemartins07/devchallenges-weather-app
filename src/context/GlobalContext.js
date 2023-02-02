/* eslint-disable no-unsafe-finally */
import { createContext, useEffect, useState } from 'react'
// import useFetch from '../hooks/useFetch'
import { SEARCH_CIT_GET, FIVE_DAYS_GET } from '../services/api'
import dateHelper from '../utils/dateHelper'

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
  const [fiveDayData, setFiveDayData] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [scale, setScale] = useState('c')

  function getFiveDaysForecast(data) {
    const today = new Date().getDate()
    const filteredData = data.list.filter((item, i, array) => {
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

    setFiveDayData(filteredData)
  }

  function convertTemperature(id) {
    if (data && id === 'f' && scale === 'c') {
      // data.main.temp = (data.main.temp * 9) / 5 + 32

      setData(function (data) {
        return {
          ...data,
          main: {
            ...data.main,
            temp: (data.main.temp * 9) / 5 + 32,
          },
        }
      })
      console.log(data)
      setScale('f')
    } else if (data && id === 'c' && scale === 'f') {
      setData(function (data) {
        return {
          ...data,
          main: {
            ...data.main,
            temp: ((data.main.temp - 32) * 5) / 9,
          },
        }
      })
      setScale('c')
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
        getWetherByUserLocation,
        dateHelper,
        convertTemperature,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
