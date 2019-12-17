import React from "react"
import { Wrapper, Bar } from "./styles"

const Hamburger = ({ toggle, setToggle }) => {
  return (
    <Wrapper onClick={setToggle}>
      {Array.from({ length: 3 }).map((_, i) => (
        <Bar key={i} toggle={toggle} />
      ))}
    </Wrapper>
  )
}

export default Hamburger
