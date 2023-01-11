import styled from 'styled-components'

export const MainComponent = styled.main`
  display: grid;
  align-items: start;
  row-gap: 4rem;
  width: 70%;
  margin-left: auto;
  margin-right: auto;

  /* & > * {
    border: 1px solid red;
  } */
`
export const TemperatureSelection = styled.div`
  text-align: right;
  padding: 2rem 0 1rem;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    border: none;
    outline: none;
    margin-left: 1rem;
    background: #585676;

    font-family: 'Raleway';
    font-weight: 700;
    font-size: 18px;
    color: #e7e7eb;
  }

  button.active {
    background: #e7e7eb;
    color: #110e3c;
  }
`

export const FiveDaysWheater = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));

  .box {
    flex: 0 1 120px;
    background-color: #1e213a;
    height: 177px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      font-family: 'Raleway';
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.1875rem;

      color: #e7e7eb;
    }

    img {
      height: 62px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      .min {
        font-family: 'Raleway';
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.1875rem;

        color: #a09fb1;
      }
    }
  }
`

export const Highlights = styled.section`
  margin-bottom: 2rem;

  h1 {
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: #e7e7eb;
    margin-bottom: 2rem;
  }

  .box {
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr;

    @media (min-width: 40rem) {
      grid-template-columns: repeat(2, 1fr);
    }

    /* border: 1px solid green; */

    div {
      background-color: #1e213a;
      /* max-width: 330px; */
      height: min(159px, 204px);
      text-align: center;

      h3 {
        font-family: 'Raleway';
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.1875rem;
        color: #e7e7eb;
      }

      p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 4rem;
        color: #e7e7eb;
        margin: 0;

        span {
          font-size: 2.25rem;
          font-weight: 500;
        }
      }
    }
  }
`
