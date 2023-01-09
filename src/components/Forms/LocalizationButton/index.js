import React from 'react'
import { MdMyLocation } from 'react-icons/md'

import { Button } from './style'

const LocalizationButton = ({ handleClick }) => {
  return (
    <Button onClick={handleClick}>
      <MdMyLocation />
    </Button>
  )
}

export default LocalizationButton
