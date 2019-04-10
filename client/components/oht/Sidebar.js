import React from "react";
import { NavLink } from "react-router-dom";
// import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// import logo from "logo.svg";
import { Button, Row, Col, Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap'
var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    // this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  // activeRoute(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  // }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div className="sidebar" data-color= "black" data-active-color="info">
        <div className="logo">
      
           FMS
        
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          {/* <Nav>
            {this.props.routes.map((prop, key) => {
              if (prop.redirect) return null;
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav> */}
          <Navbar bg="dark" variant="dark">
          <li>
          <div className="sidebar-wrapper" ref="sidebar">
<Nav className="mr-auto">
<li>
<li>
  <Nav.Link className="nav-link" activeClassName="active" href="/home" >Home</Nav.Link>
  </li>
  <li>
  <Nav.Link className="nav-link" activeClassName="active"  href="/people" >People</Nav.Link></li>
  <li>
  <Nav.Link className="nav-link" activeClassName="active"  href="/quality">Quality</Nav.Link></li>
  <li>
  <Nav.Link className="nav-link" activeClassName="active"  href="/velocity" >Velocity</Nav.Link></li>
  <li>
  <Nav.Link className="nav-link" activeClassName="active"  href="/cost" >Cost</Nav.Link></li>
  <li>
  <Nav.Link className="nav-link" activeClassName="active"  href="/other" >Report</Nav.Link></li>
  </li>
</Nav>
</div>
{/* <Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
 

  </li>
{/* </Form> */}
</Navbar>
<div className="logo"></div>
        <Button variant="outline-info" onClick={this.logout}>Logout</Button>
</div>  

        
      </div>
    );
  }
}

export default Sidebar;
