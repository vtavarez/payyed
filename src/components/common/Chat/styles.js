import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
  border-radius: 0.25rem;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (min-width: 1024px){
    min-width: 263px
  }
`

export const Icon = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.3rem;
  color: #dee3e4;
`

export const Heading = styled.h3`
  font-family: "rubikregular", sans-serif;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`

export const SubHeading = styled.p`
  color: #8e9a9d;
  opacity: 0.8;

  @media (min-width: 1024px){
    max-width: 230px;
  }
`