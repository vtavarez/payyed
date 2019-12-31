import React from 'react';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Drawer = ({ toggle }) => (
  <Wrapper toggle={toggle}>
    <NavbarLinks />
  </Wrapper>
)

export default Drawer;