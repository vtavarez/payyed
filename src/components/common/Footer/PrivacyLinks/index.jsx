import React from "react"
import links from "./links"
import { Wrapper, NavLink } from "./styles"

function PrivacyLinks() {
  return (
    <Wrapper>
      {links.map((link, index) => (
        <NavLink key={index} href={link.href} alt={link.title}>
          {link.title}
        </NavLink>
      ))}
    </Wrapper>
  )
}

export default PrivacyLinks
