import React from "react"
import { Wrapper } from "./styles"

export function Tab({ children, active, label }){
  return (
    <Wrapper data-label={label} active={active}>
      {children}
    </Wrapper>
  )
}