import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="">WildFire</a>
             </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
            <NavItem eventKey={1} href="#">
                Map
            </NavItem>
            <NavItem eventKey={2} href="#">
                Witness Form
            </NavItem>
            </Nav>
            <Nav pullRight>
            <NavDropdown eventKey={3} title="" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href="#">Log In</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.2} href="#">Sign Up</MenuItem>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;