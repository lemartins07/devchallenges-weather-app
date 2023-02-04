import styled from 'styled-components'

export const MainComponent = styled.main`
  display: grid;
  align-items: start;
  row-gap: 4rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  .temperatureSelection {
    text-align: right;
    padding: 2rem 0 1rem;
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
  }
  .box > div {
    background-color: #1e213a;
    /* max-width: 330px; */
    max-height: 204px;
    /* min-height: 159px; */
    text-align: center;
    padding: 1.5rem;

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
`
