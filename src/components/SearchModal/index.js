import React, { useEffect, useState } from 'react'
import { MdClose, MdChevronRight } from 'react-icons/md'

import { Modal } from './style'
import Input from '../Forms/Input/index'
import useFetch from '../../hooks/useFetch'
import { SEARCH_CITY_GET } from '../../services/api'

const SearchModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [query, setQuery] = useState('')
  const { data, loading, request } = useFetch()
  const { url, options } = SEARCH_CITY_GET(query)

  useEffect(() => {
    if (query !== '') debouncedSearch(query)
  }, [query])

  function handleClick() {
    setModalIsOpen(!modalIsOpen)
  }

  function handleSubmit(event) {
    event.preventDefault()
    debouncedSearch()
    setQuery('')
  }

  function handleResultClick(item) {
    console.log(item)
  }

  function debounce(fn, delay) {
    let timerId
    return (...args) => {
      clearTimeout(timerId)
      timerId = setTimeout(() => fn(...args), delay)
    }
  }

  const debouncedSearch = debounce(() => {
    request(url, options)
    console.log(data)
  }, 500)

  return (
    <Modal modalIsOpen={modalIsOpen}>
      <div className="close">
        <button className="btnClose" onClick={handleClick}>
          <MdClose />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          placeholder="search location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btnSearch">Search</button>
      </form>

      <ul className="searchResults">
        {loading ? (
          <p>Carregando</p>
        ) : (
          data &&
          data.map((item) => (
            <>
              <li key={item.name} onClick={(item) => handleResultClick(item)}>
                <input type="hidden" name="lat" value={item.lat} />
                <input type="hidden" name="lon" value={item.lon} />
                <p>
                  {item.name}
                  <span>
                    {item.state}, {item.country}
                  </span>
                </p>
                <MdChevronRight />
              </li>
            </>
          ))
        )}
      </ul>
    </Modal>
  )
}

export default SearchModal
