import React from "react"
import { Container, Wrapper } from "./styles"

export function Tabs({ children, onClick }){
  return (
    <Container onClick={onClick}>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}