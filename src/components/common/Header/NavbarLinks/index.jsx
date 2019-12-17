import React from 'react';
import { Link } from "@reach/router"
import { NavLink } from './styles';

const NavbarLinks = () => (
  <>
    <NavLink as={Link} to="/send" aria-label='Send'>Send</NavLink>
    <NavLink as={Link} to="/receive" aria-label='Recieve'>Recieve</NavLink>
    <NavLink as={Link} to="/about-us" aria-label='About us'>About us</NavLink>
    <NavLink as={Link} to="/fees" aria-label='Service fees'>Fees</NavLink>
    <NavLink as={Link} to="/help" aria-label='Help'>
      Help
    </NavLink>
  </>
)

export default NavbarLinks;