import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Label, InputComponent } from './style'

const Input = ({ type, label, name, value, onChange, error, onBlur }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}></Label>
      <InputComponent
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="search locations"
      />
      {error && <p>{error}</p>}
    </Wrapper>
  )
}

Input.defaultProps = {
  type: 'text',
  label: '',
}

Input.prototype = {
  type: PropTypes.string,
  label: PropTypes.string,
}

export default Input
