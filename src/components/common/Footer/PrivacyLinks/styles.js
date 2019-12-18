import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto 0;
  max-width: 182px;
  width: 100%;

  @media (min-width: 768px){
    margin: 0 0 0 auto;
  }
`

export const NavLink = styled.a`
  color: #67727c;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    text-decoration: none;
    color: #2dbe60;
  }
`