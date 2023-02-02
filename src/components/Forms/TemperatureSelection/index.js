import React, { useContext } from 'react'

import { Button } from './style'
import { GlobalContext } from '../../../context/GlobalContext'

const TemperatureSelection = ({ children, id, activeBtn, setActiveBtn }) => {
  const toggleClassCheck = activeBtn === id ? 'active' : null
  const { convertTemperature } = useContext(GlobalContext)

  function handleClick() {
    setActiveBtn((active) => id)
    convertTemperature(id)
  }

  return (
    <Button onClick={handleClick} id={id} className={toggleClassCheck}>
      {children}
    </Button>
  )
}

export default TemperatureSelection
