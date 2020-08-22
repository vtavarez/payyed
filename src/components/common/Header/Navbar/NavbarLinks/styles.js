import styled from "styled-components"

export const NavLink = styled.a`
  font-family: "rubikmedium", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  color: #4c4d4d;
  padding: 0 0.85em;

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
