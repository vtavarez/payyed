import styled from "styled-components"

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
