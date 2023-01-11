import styled from 'styled-components'

export const Modal = styled.div`
  height: 100vh;
  background-color: #1e213a;
  position: absolute;
  width: 100%;
  z-index: 1000;
  padding: 2rem 3rem;
  transition: 0.2s;
  transform: ${(props) => (props.modalIsOpen ? 'translateX(-100%)' : '')};

  .close {
    display: flex;
    justify-content: end;
  }

  .btnClose {
    font-size: 1.5rem;
    color: white;
    background: none;
    border: none;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0 0;
  }

  .btnSearch {
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 1rem;
    color: #e7e7eb;
    background: #3c47e9;
    height: 48px;
    border: none;
    outline: none;
    width: 86px;
    margin-left: 0.8rem;
  }
`
