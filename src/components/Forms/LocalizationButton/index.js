import React, { useContext } from 'react'

import { MdMyLocation } from 'react-icons/md'

import { Button } from './style'
import { GlobalContext } from '../../../context/GlobalContext'

const LocalizationButton = () => {
  const { getWetherByUserLocation } = useContext(GlobalContext)

  function handleClick(event) {
    event.preventDefault()
    getWetherByUserLocation()
  }

  return (
    <Button onClick={handleClick}>
      <MdMyLocation />
    </Button>
  )
}

export default LocalizationButton
