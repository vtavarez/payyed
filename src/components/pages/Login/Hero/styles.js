import styled from "styled-components"
import image from "assets/images/man-using-his-laptop.webp"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 0 0;
  width: 100vw;
  height: 46vh;
  background: linear-gradient(rgba(45, 190, 96, 0.9), rgba(45, 190, 96, 0.9)), url("${image}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  
  @media (min-width: 768px){
    width: 50%;
    height: 100vh;
    padding: 3rem 0;
  }
`

export const Logo = styled.div`
max-width: 83%;
width: 100%;

@media (min-width: 1200px){
  max-width: 75%;
 }
`

export const Content = styled.div`
  max-width: 83%;
  width: 100%;
  margin-top: 3rem;
  
  @media (min-width: 768px){
    margin-top: 96%;
  }

  @media (min-width: 1200px){
    max-width: 75%;
    margin-top: calc(50% - 130px);
  }
`

export const Heading = styled.h1`
  font-size: 2.75rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
`

export const SubHeading = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 3rem;
`