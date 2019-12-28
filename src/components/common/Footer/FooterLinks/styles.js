import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 410px;
  width: 100%;

  @media (min-width: 768px){
    padding-right: 0;
    padding-left: 0;
  }
`

export const NavLink = styled.a`
  font-size: 1rem;
  color: #252b33;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover,
  &:focus {
    text-decoration: none;
    color: #2dbe60;
  }
`