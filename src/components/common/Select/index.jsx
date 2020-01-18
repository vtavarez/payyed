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
