import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${props => props.theme.nav};
    height: 80px;
    margin-top: -80px;
    display: flex;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all escape;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    margin-left: 32px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
`;

export const NavLogo = styled.div`
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Hamburger = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &:active {
        border-bottom: 3px solid #fff
    }
    
    &:hover {
        color: #fff
    }
`
