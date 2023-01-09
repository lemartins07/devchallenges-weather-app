import React from 'react'
// import { SEARCH_CIT_GET } from '../../services/api'
// import useFetch from '../../hooks/useFetch'

import whetherImg from '../../assets/Shower.png'

import LocalizationButton from '../Forms/LocalizationButton/index'
import SearchButton from '../Forms/SearchButton/index'
import { MdPlace } from 'react-icons/md'
import { Aside, WheaterData } from './style'

const SideBar = () => {
  function handleClick(event) {
    event.preventDefault()
    console.log('clicou')
  }

  return (
    <Aside>
      <form>
        <SearchButton handleClick={handleClick} />
        <LocalizationButton handleClick={handleClick} />
      </form>
      <WheaterData>
        <div className="thumb">
          <img src={whetherImg} alt="tempo" />
        </div>
        <div className="temperature">
          15<span>ºC</span>
        </div>
        <p className="description">Shower</p>
        <p className="date">
          Today <span>•</span>Fri, 5 Jun
        </p>
        <p className="place">
          <MdPlace />
          Helsinki
        </p>
      </WheaterData>
    </Aside>
  )
}

export default SideBar
