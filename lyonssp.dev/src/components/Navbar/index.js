import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, Hamburger, NavMenu, NavItem, NavLinks } from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
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