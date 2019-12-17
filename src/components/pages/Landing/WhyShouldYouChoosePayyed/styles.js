import styled from 'styled-components'

export const Heading = styled.h2`
  font-size: 2.25rem;
  text-align: center;
`

export const SubHeading = styled.p`
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 3rem;
`

export const Feature = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  &:nth-child(-n+3){
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px){
    flex-basis: 25%;
    max-width: 25%;
    &:nth-child(-n+3){
      margin-bottom: 0;
    }
  }
`

export const Title = styled.h3`
  font-size: 20px;
  margin: 20px 0 10px;
`

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`