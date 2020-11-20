import React from 'react';
import { FaBars } from 'react-icons/fa';
import { GiOwl } from 'react-icons/gi';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>

          <NavLogo to="/"><GiOwl size={40}/></NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>See</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>Learn</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Reflect</NavLinks>
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
