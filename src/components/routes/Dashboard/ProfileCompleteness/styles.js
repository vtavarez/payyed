import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
`

export const Title = styled.h3`
  display: flex;
  align-items: center;
  font-family: "rubikregular", sans-serif;
  font-size: 1.3125rem;
  margin-bottom: 1rem;
`

export const Percentage = styled.span`
  color: #28a745;
  padding: 0.25rem 0.5rem;
  margin-left: 0.5rem;
  border-radius: 0.25rem;
  background-color: #eff0f2;
  font-size: 0.875rem;
`

export const Category = styled.div`
  border: 1px solid #ecf1f2;
  padding: 1rem;
  border-radius: 0.25rem;
  text-align: center;
  margin-bottom: 1.5rem;

  svg {
    display: block;
    margin-left: auto;
    margin-right: auto;

    &:nth-child(1){
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }

    &:nth-child(2){
      margin-top: 1.2rem;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 1024px){
    margin-bottom: 0;
  }
`