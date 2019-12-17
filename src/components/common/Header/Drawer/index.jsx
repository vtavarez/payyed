import React from 'react';
import NavbarLinks from 'components/common/Header/NavbarLinks';
import { Wrapper } from './styles';

const Drawer = ({ toggle }) => (
  <Wrapper toggle={toggle}>
    <NavbarLinks />
  </Wrapper>
)

export default Drawer;