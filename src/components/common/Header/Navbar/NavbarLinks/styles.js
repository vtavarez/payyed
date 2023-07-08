import styled from "styled-components"

export const NavLink = styled.a`
  font-family: "rubik", sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: #4c4d4d;
  padding: 0 0.85em;
  transition: all 0.5s ease;

  &:hover,
  &:focus {
    text-decoration: none;
    color: #2dbe60;
  }
  
  ${({ pathname, to }) =>
    pathname === to &&
    `
    text-decoration: none;
    color: #2dbe60;
  `}
`
