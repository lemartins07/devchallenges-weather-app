import styled from 'styled-components'
import cloudBackground from '../../assets/Cloud-background.png'

export const Aside = styled.aside`
  background-color: #1e213a;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-content: start;

  @media (max-width: 400px) {
    height: 100vh;
  }

  grid-row: 1/ 3;

  form {
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem 0;
  }
`
export const WheaterData = styled.div`
  text-align: center;
  font-family: 'Raleway';
  font-weight: 500;

  .thumb {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 376px;
    @media (max-width: 400px) {
      min-height: initial;
    }
  }

  .thumb::before {
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(${cloudBackground});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    background-position: top;

    position: absolute;
    opacity: 10%;
  }

  .temperature {
    font-size: 9rem;
    line-height: 10.5625rem;
    margin-bottom: 4rem;

    @media (max-width: 400px) {
      margin-bottom: 0;
    }

    span {
      font-size: 3rem;
      line-height: 3.5rem;
      color: #a09fb1;
    }
  }

  .description {
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.625rem;
    color: #a09fb1;
    margin-bottom: 4rem;
    text-transform: capitalize;
    @media (max-width: 400px) {
      margin-bottom: 1.5rem;
    }
  }

  .date {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.3125rem;
    color: #a09fb1;
    margin-bottom: 4rem;
    @media (max-width: 400px) {
      margin-bottom: 1.5rem;
    }
  }

  .place {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.3125rem;
    color: #88869d;
  }
`
