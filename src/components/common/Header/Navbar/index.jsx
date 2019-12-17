import React, { useState } from "react"
import Hamburger from "components/common/Header/Hamburger"
import NavbarLinks from "components/common/Header/NavbarLinks"
import Drawer from "components/common/Header/Drawer"
import { Link } from "@reach/router"
import { Content } from "components/common/"
import { Wrapper, Logo, Nav, NavLink, SignupButton } from "./styles"
import logo from "assets/illustrations/logo.webp"

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
    <Wrapper as={Content}>
      <Logo>
        <Link to="/">
          <img src={logo} alt="payyed" />
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
        <SignupButton as={Link} to="/sign-up" aria-label="Sign up">
          Sign up
        </SignupButton>
      </Nav>
    </Wrapper>
    <Drawer toggle={toggle} />
    </>
  )
}

export default NavBar
