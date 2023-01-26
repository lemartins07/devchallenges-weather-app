import styled from 'styled-components'

export const Container = styled.section`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
`

export const Box = styled.div`
  /* flex-basis: minmax(120px, 150px); */
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
`
