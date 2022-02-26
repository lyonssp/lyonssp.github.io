import { FaBars, FaCode } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, Hamburger, NavMenu, NavItem, NavLinks } from './NavbarElements'
import logo from "../../img/logo.svg"

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    <FaCode />
                </NavLogo>
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
                        <NavLinks to="skills">Skills</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;