import styled from "styled-components"

export const Title = styled.div`
  background-color: #f1f5f6;
  border-top: 1px solid #e9eff0;
  border-bottom: 1px solid #e9eff0;
  padding: 0.5rem 1rem;
`

export const Date = styled.div`
  text-align: center;
`
export const Description = styled.div`
  text-align: left;
`
export const Status = styled.div`
  display: none;
  text-align: center;

  @media (min-width: 768px){
    display: block;
  }
`
export const Amount = styled.div`
  text-align: right;
`