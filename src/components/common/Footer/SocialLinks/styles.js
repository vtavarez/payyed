import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 146px;
  width: 100%;
  margin: 1rem auto 0;

  @media (min-width: 768px){
    margin: 0 0 0 auto;
  }
`

export const Icon = styled.button`
  position: relative;
  width: 26px;
  height: 26px;
  margin: 0px 6px 4px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  color: #4d555a;

  &::before {
    font-family: "rubikregular", sans-serif;
    content: '${({ tooltip }) => tooltip}';
    position: absolute;
    max-width: 200px;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.25rem 0.5rem;
    color: #ffffff;
    text-align: center;
    background-color: #000000;
    border-radius: 0.25rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.35s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: -11px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0.4rem 0.4rem 0;
    border-top-color: #000000;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-style: solid;
    opacity: 0;
    visibility: hidden;
    transition: all 0.35s ease;
  }

  &:hover,
  &:focus {
    &::before,
    &::after {
      visibility: visible;
      opacity: 1;
    }
  }

  &:nth-child(1){
    &:hover,
    &:focus {
      color:#3B5998
    }
  }

  &:nth-child(2){
    &:hover,
    &:focus {
      color:#00ACEE
    }
  }

  &:nth-child(3){
    &:hover,
    &:focus {
      color:#DD4B39
    }
  }

  &:nth-child(4){
    margin-right: 0;
    &:hover,
    &:focus {
      color:#C4302B
    }
  }
`
