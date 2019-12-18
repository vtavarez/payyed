import styled from "styled-components"

export const Copy = styled.p`
  text-align: left;
  margin: 0 auto 0;
  width: fit-content;
  color: #67727c;
  font-weight: 400;

  @media (min-width: 768px){
    margin: 0 auto 0 0;
  }
`
export const Payyed = styled.a`
  color: #2dbe60;
  
  &:hover,
  &:focus {
    text-decoration: none;
    color: #2dbe60;
  }
`