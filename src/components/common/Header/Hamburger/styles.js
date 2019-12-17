import styled from 'styled-components';

export const Wrapper = styled.button`
  position: relative;
  display: block;
  border: none;
  background: none;
  padding: 0;
  width: 23px;
  height: 30px;
  margin: 2px auto 0 11px;
  
  &:focus {
    outline: none;
  }

  @media (min-width: 992px){
    display: none;
  }
`

export const Bar = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  left: 0;
  background-color: #3c3636;
  border-radius: 2px;
  opacity: 1;
  transition: all 0.25s ease-in-out;
  transform-origin: left center;

  &:nth-child(1){
    ${({ toggle }) => toggle ? `transform: rotate(45deg); top: 6px; left: 4px;` : `transform: rotate(0deg); top: 6px;`}
  }
  &:nth-child(2){
    top: 12px;
    transform-origin: left;
    ${({ toggle }) => toggle ? `transform: scaleX(0); opacity: 0` : `transform: scaleX(1); opacity: 1`}
  }
  &:nth-child(3){
    ${({ toggle }) => toggle ? `transform: rotate(-45deg); top: 22px; left: 4px;` : `transform: rotate(0deg); top: 18px;`}
  }

`