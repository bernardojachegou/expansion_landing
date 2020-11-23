import React from 'react';
import { FaBars } from 'react-icons/fa';
import { GiOwl } from 'react-icons/gi';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>

          <NavLogo
            to='home'
            smooth={true}
            duration={500}
            exact="true"
            offset={-80}
          ><GiOwl size={40} /></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='first-section'
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >Why?</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='second-section'
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >How?</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='third-section'
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >When?</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='contact'
                smooth={true}
                duration={1000}
                exact="true"
                offset={-80}
              >Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
