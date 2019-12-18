import React from "react"
import { Link } from "@reach/router"
import { NavLink } from "./styles"

const NavbarLinks = () => (
  <>
    <NavLink
      as={Link}
      to="/send"
      aria-label="Learn how to send funds to over 180 countries"
    >
      Send
    </NavLink>
    <NavLink as={Link} to="/receive" aria-label="Learn how to recieve funds">
      Recieve
    </NavLink>
    <NavLink as={Link} to="/about-us" aria-label="Learn about our company">
      About us
    </NavLink>
    <NavLink
      as={Link}
      to="/fees"
      aria-label="Learn how we structure our service fees"
    >
      Fees
    </NavLink>
    <NavLink
      as={Link}
      to="/help"
      aria-label="Check out our FAQ for any questions you may have"
    >
      Help
    </NavLink>
  </>
)

export default NavbarLinks
