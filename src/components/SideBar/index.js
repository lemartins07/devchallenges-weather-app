import React, { useState, useContext } from 'react'
// import { SEARCH_CIT_GET } from '../../services/api'
// import useFetch from '../../hooks/useFetch'

// import whetherImg from '../../assets/Shower.png'

import LocalizationButton from '../Forms/LocalizationButton/index'
import SearchButton from '../Forms/SearchButton/index'
import { MdPlace } from 'react-icons/md'
import { Aside, WheaterData } from './style'
import SearchModal from '../SearchModal/index'
import { GlobalContext } from '../../context/GlobalContext'
import ImgWheater from '../ImgWheater/index'

const SideBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { data, loading, error, dateHelper } = useContext(GlobalContext)
  const { today, weekDay, month } = dateHelper()

  if (error)
    return (
      <Aside>
        <p>{error}</p>
      </Aside>
    )

  if (loading)
    return (
      <Aside>
        <h1>Carregando</h1>
      </Aside>
    )

  if (data) {
    return (
      <Aside>
        <form>
          <SearchButton
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
          <LocalizationButton />
        </form>
        <SearchModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
        <WheaterData>
          <div className="thumb">
            {/* ?<img src={whetherImg} alt="tempo" /> */}
            <ImgWheater data={data} />
          </div>
          <div className="temperature">
            {data.main.temp.toFixed(0)}
            <span>ºC</span>
          </div>
          <p className="description">{data.weather[0].description}</p>
          <p className="date">
            Today <span>•</span> {weekDay}, {today} {month}
          </p>
          <p className="place">
            <MdPlace />
            {data.name}
          </p>
        </WheaterData>
      </Aside>
    )
  } else return null
}

export default SideBar
