import React from "react"
import { Wrapper, NavLink } from "./styles"
import links from "./links"

function FooterLinks() {
  return (
    <Wrapper>
      {links.map((link, index) => (
        <NavLink key={index} href={link.href}>
          {link.title}
        </NavLink>
      ))}
    </Wrapper>
  )
}

export default FooterLinks
