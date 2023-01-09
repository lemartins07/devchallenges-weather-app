import styled from 'styled-components'
import cloudBackground from '../../assets/Cloud-background.png'

export const Aside = styled.aside`
  background-color: #1e213a;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

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
    margin-bottom: 2rem;
    height: 36%;
  }

  .thumb::before {
    background-image: url(${cloudBackground});
    background-position: 50%;
    background-size: cover;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    opacity: 10%;
  }

  .temperature {
    font-size: 9rem;
    line-height: 10.5625rem;
    margin-bottom: 4rem;

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
  }

  .date {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.3125rem;
    color: #a09fb1;
    margin-bottom: 4rem;
  }

  .place {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.3125rem;
    color: #88869d;
  }
`
