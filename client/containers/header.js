


import '../css/header.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class HeaderTAB extends React.Component {
   
    render() {
     
      return (
        <div className="header">
        <Navbar className="headerTitle">
        <Navbar.Brand ><h2>FMS</h2></Navbar.Brand>
        </Navbar>
        <Navbar className="headerBody">
            <div className="tabSel">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/people">People</Nav.Link>
                    <Nav.Link href="/quality">Quality</Nav.Link>
                    <Nav.Link href="/velocity">Velocity</Nav.Link>
                    <Nav.Link href="/cost">Cost</Nav.Link>
                </Nav>
            </div>
        </Navbar>
       
        </div>
      );
    }
  }
  
 
  /*
  function mapStateToProps(state) {
    return {
      headerTab: state.headerReducer	
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(headerActions, dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(headerpage)
*/
  
  