import React, { Component } from 'react';
import './navstyle.css'

import {Route, Link, BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Button, Row, Col, Nav, Navbar, NavDropdown, Container,FormControl, Form } from 'react-bootstrap'
// import Login from './Login'
// import Quality from './Quality';
// import Another from './Another';
// import Submit from './Submit'
class NavBar extends Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    static contextTypes = {
        router: PropTypes.object
      }

    componentDidMount() {

    }
     logout(e){
        e.preventDefault();
        this.context.router.history.push("/");
    }

    render(){
        return(

<Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">
<img
        src="http://www.clker.com/cliparts/8/6/a/a/1368299938662232109excavator-256-th.png"
        width="40"
        height="40"
        class="navicon"
        alt="React Bootstrap logo"
      />
<b>Facility Monitoring System</b>
</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">

  </Nav>
  <Nav>
  
    <Nav.Link href="/" >
    <img
        src="https://www.firstware.com/wp-content/uploads/2014/10/user-orange-100x100.png"
        width="40"
        height="40"
        class="logouticon"
        alt="React Bootstrap logo"
      />
    
    Logout</Nav.Link>
    
   
  </Nav>
</Navbar.Collapse>
</Navbar>


)
}
}
export default NavBar;



// <Nav.Link href="/home" class='icon'>
  
//   Home</Nav.Link>
//   <Nav.Link href="/people">People</Nav.Link>
//   <Nav.Link href="/qualitytable">Quality</Nav.Link>
//   <NavDropdown title="Velocity" id="basic-nav-dropdown">
//         <NavDropdown.Item href="/framepdi">Frame PDI</NavDropdown.Item>
//         <NavDropdown.Item href="/bhlpage">BHL</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Body</NavDropdown.Item>
//         <NavDropdown.Item href="/mpsstatus">MPS Status</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.5">Stop Time</NavDropdown.Item>
//         {/* <NavDropdown.Divider /> */}
//         <NavDropdown.Item href="/buildmiss">Build/ Misses</NavDropdown.Item>
//       </NavDropdown>
//   {/* <Nav.Link href="/velocity">Velocity</Nav.Link> */}
//     <Nav.Link href="/costinfo">Cost</Nav.Link>