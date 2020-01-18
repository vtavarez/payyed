import styled from "styled-components"

export const CurrencyFlag = styled.img`
  display: inline-block;
  margin: 0 0.2rem;
  width: 25px;
`

export const OptionValue = styled.span`
  color: ${({ isSelected }) => isSelected ? "#ffffff" : "#212529"};
  font-size: 1rem;

`

export const OptionDescription = styled.small`
  padding-left: 0.5rem;
  color: #8e9a9d;
`