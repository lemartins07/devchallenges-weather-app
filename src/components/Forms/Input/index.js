import React from 'react'
import PropTypes from 'prop-types'
import { MdSearch } from 'react-icons/md'

import { Wrapper, Label, InputComponent } from './style'

const Input = ({ type, label, name, value, onChange, error, onBlur, icon }) => {
  return (
    <Wrapper>
      {label && <Label htmlFor={name}>{name}</Label>}
      <MdSearch />
      <InputComponent
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="search locations"
        autoComplete="off"
      />
      {error && <p>{error}</p>}
    </Wrapper>
  )
}

Input.defaultProps = {
  type: 'text',
  label: null,
}

Input.prototype = {
  type: PropTypes.string,
  label: PropTypes.string,
}

export default Input
