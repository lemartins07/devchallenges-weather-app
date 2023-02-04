import styled from 'styled-components'

export const Modal = styled.div`
  height: 100vh;
  background-color: #1e213a;
  position: absolute;
  width: 460px;
  z-index: 1000;
  padding: 2rem 3rem;
  transition: 0.2s;
  transform: ${(props) => (props.modalIsOpen ? '' : 'translateY(-100%)')};
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
      padding: 1rem 1rem;
      margin-bottom: 1rem;
      /* align-items: center; */
      border: 1px solid transparent;
      min-height: 74px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 2;

      p {
        display: block;
        margin: 0;
      }

      span {
        font-size: 0.8rem;
        color: #70746a;
        display: block;
        margin-top: 0.5rem;
      }
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

    .loader {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 300px;
    }
  }
`
