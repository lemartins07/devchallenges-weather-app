import React from 'react'

import { Button } from './style'

const SearchButton = ({ modalIsOpen, setModalIsOpen }) => {
  function handleClick(event) {
    event.preventDefault()

    setModalIsOpen(!modalIsOpen)
  }

  return <Button onClick={handleClick}>Search for places</Button>
}

export default SearchButton
