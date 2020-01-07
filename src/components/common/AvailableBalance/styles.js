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
`

export const Balance = styled.h3`
  font-family: "rubikregular", sans-serif;
  margin-bottom: 0.4rem;
  font-size: 2.25rem;
`

export const Title = styled.p`
  margin-bottom: 0.5rem;
  color: #8e9a9d;
  opacity: 0.8;
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(16, 85, 96, 0.1);
  margin: 1rem -15px 0;
  padding: 15px 15px 0;
  height: 2.4rem;
`