import { createContext, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { SEARCH_CIT_GET } from '../services/api'
import dateHelper from '../utils/dateHelper'

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
  const { request, data, loading, error } = useFetch()

  // console.log(dateHelper())

  const getWetherByUserLocation = () => {
    const successCallback = (position) => {
      const { latitude, longitude } = position.coords

      async function getDataByLocation(latitude, longitude) {
        const { url, options } = SEARCH_CIT_GET(latitude, longitude)
        await request(url, options)
      }

      getDataByLocation(latitude, longitude)
    }

    const errorCallback = (error) => {
      console.log(error)
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }

  useEffect(() => {
    async function getData() {
      const { url, options } = SEARCH_CIT_GET()
      await request(url, options)
    }

    getData()
  }, [request])

  return (
    <GlobalContext.Provider
      value={{ data, loading, error, getWetherByUserLocation, dateHelper }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
