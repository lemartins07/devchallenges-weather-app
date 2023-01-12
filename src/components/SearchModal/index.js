import React from 'react'
import { MdClose, MdChevronRight } from 'react-icons/md'

import { Modal } from './style'
import Input from '../Forms/Input/index'

const SearchModal = ({ modalIsOpen, setModalIsOpen }) => {
  function handleClick() {
    setModalIsOpen(!modalIsOpen)
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <Modal modalIsOpen={modalIsOpen}>
      <div className="close">
        <button className="btnClose" onClick={handleClick}>
          <MdClose />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="search" placeholder="search location" />
        <button className="btnSearch">Search</button>
      </form>
      <ul className="searchResults">
        <li>
          London <MdChevronRight />
        </li>
        <li>
          Barcelona <MdChevronRight />
        </li>
        <li>
          Long Beach <MdChevronRight />
        </li>
      </ul>
    </Modal>
  )
}

export default SearchModal
