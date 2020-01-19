import ReactSelect from "react-select"
import styled from "styled-components"

export const Select = styled(ReactSelect)`
  & .country-select__control {
    font-size: 1rem;
    padding: 0.510rem 0.55rem;
    border: 1px solid #dae1e3;
    border-radius: 0.25rem;
    color: #656565;
    background-color: #ffffff;
    background-clip: padding-box;
    transition: border-color 0.15s ease-in-out;
  }

  & .country-select__placeholder {
    opacity: 0.5;
  }

  & .country-select__indicator-separator {
    display: none;
  }

  & .country-select__menu {
    border-radius: 0;
  }
`