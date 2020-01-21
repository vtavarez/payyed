import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 0;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  
  @media (min-width: 768px){
    width: 50%;
    height: 100vh;
    padding: 3rem 0;
  }
`