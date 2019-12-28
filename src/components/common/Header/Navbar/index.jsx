import React, { Fragment, useState } from "react"
import Hamburger from "components/common/Header/Hamburger"
import NavbarLinks from "components/common/Header/NavbarLinks"
import Drawer from "components/common/Header/Drawer"
import { Link } from "@reach/router"
import { Contents } from "components/common/"
import { Wrapper, Logo, Nav, NavLink, SignupButton } from "./styles"
import logo from "assets/illustrations/logo.webp"

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
          <NavLink as={Link} to="/login" aria-label="login to your dashboard">
            Login
          </NavLink>
          <SignupButton as={Link} to="/signup" aria-label="Sign up for payyed">
            Sign up
          </SignupButton>
        </Nav>
      </Wrapper>
      <Drawer toggle={toggle} />
    </Fragment>
  )
}

export default NavBar
