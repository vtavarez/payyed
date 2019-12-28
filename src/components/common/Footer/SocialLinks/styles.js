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
    padding: 0.25rem 0.5rem;
    color: #ffffff;
    text-align: center;
    background-color: #000000;
    border-radius: 0.25rem;
    transition: all 0.35s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: -12px;
    border-width: 0.4rem 0.4rem 0;
    border-top-color: #000000;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-style: solid;
    transition: all 0.35s ease;
  }

  &:nth-child(1){
    &::before {
      left: -27px;
    }
    &::after {
      left: 5px;
    }

    &::before,
    &::after {
      opacity: 0;
    }

    &:hover,
    &:focus {
      &::before,
      &::after {
        opacity: 1;
      }

      color:#3B5998
    }
  }

  &:nth-child(2){
    &::before {
      left: -22px;
    }
    &::after {
      left: 2px;
    }

    &::before,
    &::after {
      opacity: 0;
    }

    &:hover,
    &:focus {
      &::before,
      &::after {
        opacity: 1;
      }

      color:#00ACEE
    }
  }
  &:nth-child(3){
    &::before {
      left: -20px;
    }
    &::after {
      left: 3px;
    }

    &::before,
    &::after {
      opacity: 0;
    }

    &:hover,
    &:focus {
      &::before,
      &::after {
        opacity: 1;
      }

      color:#DD4B39
    }
  }
  &:nth-child(4){
    &::before {
      left: -25px;
    }
    &::after {
      left: 5px;
    }

    &::before,
    &::after {
      opacity: 0;
    }

    &:hover,
    &:focus {
      &::before,
      &::after {
        opacity: 1;
      }

      color:#C4302B
    }
  }
`
