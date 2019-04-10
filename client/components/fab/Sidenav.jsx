import React, { Component } from 'react';
import './navstyle.css'
import PropTypes from 'prop-types';
import { Button, Row, Col, Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap'
class Sidenav extends Component{
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
          
<div class="sidebar">
  <a  href="/home">
  <img
        src="https://www.freeiconspng.com/minicovers/black-home-icon-11.png"
        width="40"
        height="40"
        class="logouticon"
        alt="React Bootstrap logo"
      />
  
  Home</a>
  <a href="/people">
  <img
        src="https://www.freeiconspng.com/minicovers/group-of-people-icon-22.png"
        width="40"
        height="40"
        class="logouticon"
        alt="React Bootstrap logo"
      />
  People</a>
  <a href="/qualitytable">
  <img
        src="https://img.icons8.com/ios/2x/good-quality-filled.png"
        width="40"
        height="40"
        class="logouticon"
        alt="React Bootstrap logo"
      />
  Quality</a>
  <a href="/framepdi">
  <img
        src="https://secure.gravatar.com/avatar/c3c158ec7d25aa88eab75ec11ec41a90?s=100&d=retro&r=g"
        width="40"
        height="40"
        class="logouticon"
        alt="React Bootstrap logo"
      />
  Velocity</a>
  <a href="/costinfo">
  <img
        src="https://img.icons8.com/ios/2x/expensive-filled.png"
        width="40"
        height="40"
        class="logouticon"
        alt="React Bootstrap logo"
      />
  Cost</a>
</div>


)
}
}
export default Sidenav;