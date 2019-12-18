import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor };
  align-items: center;
  padding: 3.5rem 0;

  @media (min-width: 1024px){
    padding: ${({ padding }) => padding || "6.5rem 0"};
  }
`

export const Contents = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px){
    max-width: 540px;
  }

  @media (min-width: 768px){
    max-width: 720px;
  }

  @media (min-width: 992px){
    max-width: 960px;
  }
  
  @media (min-width: 1200px){
    max-width: 1170px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify ? justify : 'flex-start'}
  margin-left: -15px;
  margin-right: -15px;
`

export const Col = styled.div`
  flex-grow: 1;
  padding-left: 15px;
  padding-right: 15px;
`