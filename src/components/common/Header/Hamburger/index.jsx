import React from "react"
import { Wrapper, Bar } from "./styles"

const Hamburger = ({ toggle, setToggle }) => {
  return (
    <Wrapper
      onClick={setToggle}
      aria-label="Click here to toggle our user menu"
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <Bar key={i} toggle={toggle} />
      ))}
    </Wrapper>
  )
}

export default Hamburger
