/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'

import LocalizationButton from '../Forms/LocalizationButton/index'
import SearchButton from '../Forms/SearchButton/index'
import { MdPlace } from 'react-icons/md'
import { Aside, WheaterData } from './style'
import SearchModal from '../SearchModal/index'
import { GlobalContext } from '../../context/GlobalContext'
import ImgWheater from '../ImgWheater/index'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SideBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const { data, error, dateHelper, scale, loading } = useContext(GlobalContext)
  const { today, weekDay, month } = dateHelper()

  if (error)
    return (
      <Aside>
        <p>{error}</p>
      </Aside>
    )

  return (
    <Aside>
      <form>
        <SearchButton
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
        <LocalizationButton />
      </form>
      <SearchModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <WheaterData>
        <div className="thumb">
          <ImgWheater data={data} />
        </div>
        <div className="temperature">
          {loading ? <Skeleton /> : data.main.temp.toFixed(0)}
          <span>º{scale === 'c' ? 'C' : 'F'}</span>
        </div>
        <p className="description">
          {loading ? <Skeleton /> : data.weather[0].description}
        </p>
        <p className="date">
          Today <span>•</span> {weekDay}, {today} {month}
        </p>
        <p className="place">
          <MdPlace />
          {loading ? <Skeleton /> : data.name}
        </p>
      </WheaterData>
    </Aside>
  )
}

export default SideBar
