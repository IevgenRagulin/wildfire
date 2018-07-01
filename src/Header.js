import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import SignUP from './SignUp';
// import Witness from './Witness.js';

class Header extends Component {
  render() {
    return (
    //     <Router>
    //     <div>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/topics">Topics</Link>
    //         </li>
    //       </ul>
    
    //       <hr />
    
    //       <Route exact path="/" component={Home} />
    //       <Route path="/about" component={About} />
    //       <Route path="/topics" component={Topics} />
    //     </div>
    //   </Router>    
        <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="/wildfire">Whistle</a>
             </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
            <NavItem eventKey={1} href="https://desolate-anchorage-86223.herokuapp.com/map">
                Map
            </NavItem>
            <NavItem eventKey={2} href="/wildfire/witness-form">
                Witness Form
            </NavItem>
            </Nav>
            <Nav pullRight>
            <NavDropdown eventKey={3} title="" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href="/wildfire/subscribe">Log In</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.2} href="/wildfire/signup">Sign Up</MenuItem>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}
// const Home = () => (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
  
// const About = () => (
// <div>
//     <h2>About</h2>
// </div>
// );
// const Topics = () => (
// <div>
//     <h2>Topics</h2>
// </div>
// );
  
export default Header;