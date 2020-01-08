import React from "react"
import { Wrapper } from "./styles"

function Link({ children, currentIndex }) {
  const number = parseInt(children);
  return (
    <Wrapper role="button" href="#" activeLink={currentIndex + 1 === number}>
      {children}
    </Wrapper>
  )
}

export default Link