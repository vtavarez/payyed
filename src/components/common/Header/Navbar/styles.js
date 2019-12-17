import styled from "styled-components"
import { ButtonLink, ButtonPrimary } from "../../Buttons"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 4;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px -16px rgba(0, 0, 0, 1);

  @media (min-width: 1024px){
    box-shadow: none;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  width: fit-content;
  align-self: stretch;
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  align-self: stretch;

  &:nth-child(3){
    display: none;
    margin-right: auto;

    @media (min-width: 1024px){
      display: flex;
    }
  }
`

export const NavLink = styled(ButtonLink)`
  font-family: "rubikmedium", sans-serif;
  text-transform: uppercase;
  color: #4c4d4d;
  padding: 0 0.85em;
  font-size: 14px;

  &:hover {
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

  &:hover {
    text-decoration: none;
    color: #f8f9fa;
  }

  @media (min-width: 1024px){
    display: block;
  }
`
