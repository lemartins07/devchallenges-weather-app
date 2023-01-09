import React from 'react'

import { Button } from './style'

const SearchButton = ({ handleClick }) => {
  return <Button onClick={handleClick}>Search for places</Button>
}

export default SearchButton
