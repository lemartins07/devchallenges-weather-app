import styled from 'styled-components'

export const Slider = styled.div`
  max-width: 300px;
  margin: 0 auto;
  margin-top: 0.8rem;

  .numbersDisplay {
    display: flex;
    justify-content: space-between;
    span {
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 12px !important;
      line-height: 14px;
      text-align: center;

      color: #a09fb1;
    }
  }

  .sliderBox {
    max-width: 300px;
    height: 8px;
    border-radius: 4px;
    background-color: #e7e7eb;

    span {
      background-color: red;
      display: block;
      width: ${(props) => props.humidity + '%'};
      height: 8px;
      background-color: #ffec65;
    }
  }
`
