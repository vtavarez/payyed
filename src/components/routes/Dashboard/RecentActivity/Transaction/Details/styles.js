import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem
  background-color: #ffffff;

  @media (min-width: 768px){
    max-width: 620px;
    max-height: 445px;
  }
`

export const Banner = styled.div`
  flex: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  background-color: #2dbe60;

  @media (min-width: 768px){
    flex: 1;
    height: 100%;
  }
`

export const Content = styled.div`
  text-align: center;
`

export const TransactionName = styled.h3`
  font-family: "rubikregular", sans-serif;
  font-size: 1.125rem;
  color: #ffffff;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const Details = styled.div`
  flex: 100%;
  height: 65%;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;

  @media (min-width: 768px){
    flex: 1.475;
    height: 100%;
  }
`