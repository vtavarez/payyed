import ReactSelect from "react-select"
import styled from "styled-components"

export const Select = styled(ReactSelect)`
  width: 100px;

  & .currency-select__control {
    border: none;
    background-color: transparent;
  }

  & .currency-select__indicator-separator {
    display: none;
  }

  & .currency-select__value-container {
    padding: 0;
    height: 50px;
    transform: translateX(5px);
  }

  & .currency-select__single-value {
    right: 0;
  }

  & .currency-select__menu {
    width: fit-content;
    min-width: 200px;
    right: 0;
  }

  & .currency-select__option {
    white-space: nowrap;
  }
`

export const CurrencyFlag = styled.img`
  display: inline-block;
  margin-right: 0.4rem;
  width: 25px;
  transform: translateY(-2px);
`

export const OptionValue = styled.span`
  color: ${({ isSelected }) => isSelected ? "#ffffff" : "#212529"};
  font-size: 1rem;

`

export const OptionDescription = styled.small`
  padding-left: 0.5rem;
  color: #8e9a9d;
`