import styled from "styled-components"

export const Wrapper = styled.div`
  border-bottom: 1px solid #e9eff0;
  padding: 1rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f4f7f8;
  }
`

export const Date = styled.div`
  text-align: center;
`

export const Day = styled.span`
  font-family: "rubiklight", sans-serif;
  font-size: 1.125rem;
  display: block;
`
export const Month = styled.span`
  font-family: "rubiklight", sans-serif;
  font-size: 0.75rem;
  display: block;
  text-transform: uppercase;
`

export const TransactionName = styled.span`
  font-family: "rubikregular", sans-serif;
  font-size: 1.125rem;
  display: block;
`

export const TransactionDescription = styled.span`
  color #8e9a9d;
`

export const TransactionAmount = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  text-align: right;
  font-size: 1.125rem;
`

export const Sign = styled.span`
  margin-right: 5px;
`

export const Amount = styled.span`
  display: inline-block;

  @media (min-width: 768px){
    display: inline;
    margin-right: 5px;
  }
`

export const Currency  = styled.span`
  font-size: 0.875rem;
  text-transform: uppercase;
`