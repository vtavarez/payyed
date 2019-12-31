import React, { Fragment, useState, useContext } from "react"
import { Link } from "@reach/router"
import { Contents } from "components/common/"
import { Wrapper, Logo, Nav } from "./styles"
import logo from "assets/illustrations/logo.webp"
import Hamburger from "./Hamburger"
import NavbarLinks from "./NavbarLinks"
import LoginSignout from "./LoginSignout"
import Drawer from "./Drawer"

function NavBar() {
  const [toggle, setToggle] = useState(false)
  return (
    <Fragment>
      <Wrapper as={Contents}>
        <Logo>
          <Link to="/">
            <img src={logo} alt="payyed logo" />
          </Link>
        </Logo>
        <Hamburger setToggle={() => setToggle(!toggle)} toggle={toggle} />
        <Nav>
          <NavbarLinks />
        </Nav>
        <Nav>
          <LoginSignout />
        </Nav>
      </Wrapper>
      <Drawer toggle={toggle} />
    </Fragment>
  )
}

export default NavBar
