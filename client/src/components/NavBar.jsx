import React from 'react';
import { 
  Navbar,
  NavbarBrand
} from 'reactstrap';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
        <Navbar color="faded" dark className="navbar-header">
          <NavbarBrand className="mr-auto">Lunch Finder</NavbarBrand>
        </Navbar>
    );
  }
}

