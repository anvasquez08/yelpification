import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const NavBar = (props) => {
  return (
        <Navbar color="faded" dark className="navbar-header">
          <NavbarBrand className="ml-auto" onClick={() => props.handleViewStateChange('restaurantResults')}>Lunch Finder</NavbarBrand>
			    <ul className="navbar-nav ml-auto" >
					  <a className="nav-item nav-link" onClick={() => props.handleViewStateChange('bookmarks')}>Bookmarks</a>
				    <a className="nav-item nav-link" onClick={() => props.handleViewStateChange('login')}>Login / Signup</a>		
			    </ul>
        </Navbar>
    );
  }

export default NavBar
