import styled from 'styled-components'

export const Wrapper = styled.div`
  /* margin-bottom: 1rem; */
  display: flex;
  align-items: center;
  border: 1px solid #e7e7eb;
  padding: 0 1rem;

  svg {
    font-size: 1.5rem;
    color: #616475;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  text-transform: capitalize;
`

export const InputComponent = styled.input`
  height: 48px;
  max-width: 240px;
  margin-right: 0.8rem;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  color: #616475;
  font-size: 1rem;
  padding-left: 1rem;
  box-sizing: border-box;
`
