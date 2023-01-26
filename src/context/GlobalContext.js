/* eslint-disable no-unsafe-finally */
import { createContext, useEffect, useState } from 'react'
// import useFetch from '../hooks/useFetch'
import { SEARCH_CIT_GET, FIVE_DAYS_GET } from '../services/api'
import dateHelper from '../utils/dateHelper'

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
  // const { request, data, loading, error } = useFetch()
  const [fiveDayData, setFiveDayData] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // console.log(dateHelper())

  const getWetherByUserLocation = () => {
    const successCallback = (position) => {
      const { latitude, longitude } = position.coords

      async function getDataByLocation(latitude, longitude) {
        const { url, options } = SEARCH_CIT_GET(latitude, longitude)
        const { url: url1, options: options1 } = FIVE_DAYS_GET(
          latitude,
          longitude,
        )
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
          setFiveDayData(json1)
          setLoading(false)
          return { responses, json }
        }
      }

      getDataByLocation(latitude, longitude)
    }

    const errorCallback = (error) => {
      console.log(error)
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }

  async function getFiveDayForecast() {
    const { url, options } = FIVE_DAYS_GET()
    let response, json

    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()

      if (response.ok === false) throw new Error(json.message)
    } catch (err) {
      json = null
      setError(err.message)
    } finally {
      setFiveDayData(json)
      setLoading(false)
      return { response, json }
    }
  }

  useEffect(() => {
    const { url, options } = SEARCH_CIT_GET()
    const { url: url1, options: options1 } = FIVE_DAYS_GET()
    let responses, json, json1

    async function getData() {
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
        setFiveDayData(json1)
        setLoading(false)
        return { responses, json }
      }
    }
    // getFiveDayForecast()
    getData()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        data,
        fiveDayData,
        loading,
        error,
        getWetherByUserLocation,
        dateHelper,
        getFiveDayForecast,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
