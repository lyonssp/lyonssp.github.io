import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="career" onClick={toggle}>Career</SidebarLink>
                <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar;