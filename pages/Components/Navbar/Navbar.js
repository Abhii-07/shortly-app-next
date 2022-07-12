import React from 'react'
import { Navlinks, NavMenuList, StyledNavbar } from '../../../styles/Navbar.styled'


const Navbar = () => {
return (
    <StyledNavbar>
        <NavMenuList>
            <Navlinks>
                Features
            </Navlinks>
            <Navlinks>
                Pricing
            </Navlinks>
            <Navlinks>
                Resources
            </Navlinks>
        </NavMenuList>
    </StyledNavbar>
)
}

export default Navbar