import React from "react"
import NavBar from "./Navbar"
import { Wrapper } from "../Grid"

export function Header() {
  return (
    <Wrapper bgColor="#ffffff" padding="0">
      <NavBar />
    </Wrapper>
  )
}
