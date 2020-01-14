import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin-bottom: 1rem;

  @media (min-width: 992px){
    margin-left: -10px;
    margin-bottom: 0;
  }
`

export const Popover = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  transform: translateY(-15px);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.176);
  font-size: 0.875rem;
  z-index: 1000;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin-top: 0.125rem;
  color: #212529;
  border-radius: 0.24rem;
  background-color: #ffffff;
  list-style: none;
  text-align: left;
`

export const PopoverOption = styled.a`
  display: block;
  cursor: pointer;
  width: 100%;
  padding: 0.25rem 1.5rem;
  color: #212529;
  white-space: nowrap;
  font-size: 0.875rem;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #212529;
    text-decoration: none;
    background-color: #f8f9fa;
  }
  
  &:active {
    background-color: #2dbe60;
  }
`