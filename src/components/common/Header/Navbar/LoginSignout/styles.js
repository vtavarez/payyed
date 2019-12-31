import styled from "styled-components"
import { ButtonLink, ButtonPrimary, ButtonOutlinePrimary } from "../../../Buttons"

export const NavLink = styled(ButtonLink)`
  font-family: "rubikmedium", sans-serif;
  text-transform: uppercase;
  color: #4c4d4d;
  padding: 0 0.85em;
  font-size: 14px;

  &:hover,
  &:focus {
    text-decoration: none;
    color: #2dbe60;
  }
`
export const SignupButton = styled(ButtonPrimary)`
  display: none;
  font-family: "rubikmedium", sans-serif;
  font-size: 14px;
  padding: 0.65rem 2rem;
  text-transform: uppercase;
  margin-left: 1rem;

  &:hover,
  &:focus {
    text-decoration: none;
    color: #f8f9fa;
  }

  @media (min-width: 1024px){
    display: block;
  }
`

export const SignoutButton = styled(ButtonOutlinePrimary)`
  display: none;
  font-family: "rubikmedium", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  margin-left: 1rem;

  @media (min-width: 1024px){
    display: block;
    padding: 0.65rem 2rem;
  }
`