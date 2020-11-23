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
              <NavLinks to='first-section'>Why?</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='second-section'>How?</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='third-section'>When?</NavLinks>
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
