import React from 'react'

import { Button } from './style'

const SearchButton = ({ modalIsOpen, setModalIsOpen }) => {
  console.log('modalIsOpen:', modalIsOpen)

  function handleClick(event) {
    event.preventDefault()
    console.log(modalIsOpen)
    console.log('clicou', modalIsOpen)
    setModalIsOpen(!modalIsOpen)
  }

  return <Button onClick={handleClick}>Search for places</Button>
}

export default SearchButton
