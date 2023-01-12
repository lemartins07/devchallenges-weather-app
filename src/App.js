import { useEffect } from 'react'
import useFetch from './hooks/useFetch'
import { SEARCH_CIT_GET } from './services/api'

import './styles/globals.css'
import SideBar from './components/SideBar/index'
import Main from './components/Main/index'

function App() {
  const { request } = useFetch()

  useEffect(() => {
    async function getData() {
      const { url, options } = SEARCH_CIT_GET()
      const { json } = await request(url, options)
      console.log(json)
    }

    getData()
  }, [request])

  const successCallback = (position) => {
    console.log(position)
  }

  const errorCallback = (error) => {
    console.log(error)
  }

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  // console.log(data)

  return (
    <>
      <div className="wrapper">
        <SideBar />
        <Main />
      </div>
    </>
  )
}

export default App
