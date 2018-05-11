import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const NavBar = () => {
  return (
        <Navbar color="faded" dark className="navbar-header">
          <NavbarBrand className="mr-auto">Lunch Finder</NavbarBrand>
        </Navbar>
    );
  }


export default NavBar
