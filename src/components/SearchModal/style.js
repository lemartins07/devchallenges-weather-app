import styled from 'styled-components'

export const Modal = styled.div`
  height: 100vh;
  background-color: #1e213a;
  position: absolute;
  width: 460px;
  z-index: 1000;
  padding: 2rem 3rem;
  transition: 0.2s;
  transform: ${(props) => (props.modalIsOpen ? '' : 'translateX(-100%)')};
  box-sizing: border-box;

  @media (max-width: 960px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    padding: 1rem;
  }
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

  .searchResults {
    font-family: 'Raleway';
    font-weight: 500;
    font-size: 1rem;
    color: #e7e7eb;
    padding: 0;
    margin: 0;
    margin-top: 4rem;

    li {
      list-style: none;
      padding: 1.5rem 1rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid transparent;
      min-height: 74px;
    }

    li:hover {
      border: 1px solid #616475;
      cursor: pointer;
      svg {
        display: initial;
        font-size: 1.5rem;
      }
    }

    li svg {
      display: none;
    }
  }
`
