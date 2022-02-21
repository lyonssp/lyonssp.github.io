import React from 'react'
import { FaBars } from 'react-icons/fa'
import App from '../../App'
import { Nav, NavbarContainer, NavLogo, Hamburger, NavMenu, NavItem, NavLinks } from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/"><h1>lyonssp</h1></NavLogo>
                <Hamburger onClick={toggle}>
                    <FaBars />
                </Hamburger>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="career">Career</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="hobbies">Hobbies</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;