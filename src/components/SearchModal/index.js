import React, { useEffect, useState, useContext } from 'react'
import { MdClose, MdChevronRight } from 'react-icons/md'

import { Modal } from './style'
import Input from '../Forms/Input/index'
import useFetch from '../../hooks/useFetch'
import { SEARCH_CITY_GET } from '../../services/api'
import { GlobalContext } from '../../context/GlobalContext'
import ReactLoading from 'react-loading'

const SearchModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [query, setQuery] = useState('')
  const { data, loading, request, setData } = useFetch()
  const { url, options } = SEARCH_CITY_GET(query)
  // eslint-disable-next-line no-unused-vars
  const { getData } = useContext(GlobalContext)

  const debouncedSearch = debounce(() => {
    request(url, options)
  }, 500)

  useEffect(() => {
    if (query !== '') debouncedSearch(query)
  }, [query])

  function handleClick() {
    setModalIsOpen(!modalIsOpen)
    setData('')
    setQuery('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    debouncedSearch()
    setQuery('')
  }

  function handleResultClick(e) {
    const lat = e.currentTarget.querySelector("input[name='lat']").value
    const lon = e.currentTarget.querySelector("input[name='lon']").value

    getData(lat, lon)
    setModalIsOpen(!modalIsOpen)
    setQuery('')
    setData('')
  }

  function debounce(fn, delay) {
    let timerId
    return (...args) => {
      clearTimeout(timerId)
      timerId = setTimeout(() => fn(...args), delay)
    }
  }

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
          <div className="loader">
            <ReactLoading
              type={'spin'}
              color={'#e7e7eb'}
              height={'50px'}
              width={'50px'}
            />
          </div>
        ) : (
          data &&
          data.map((item) => (
            <>
              <li key={item.lat} onClick={handleResultClick}>
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
