import React from 'react';
import { FaBars } from 'react-icons/fa';
import { GiOwl } from 'react-icons/gi';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>

          <NavLogo to="/"><GiOwl size={40} /></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='see'>See</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='learn'>Learn</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='reflect'>Reflect</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
