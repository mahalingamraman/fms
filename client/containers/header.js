


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
                    <Nav><Link href="/home">Home</Link></Nav>
                    <Nav><Link href="/people">People</Link></Nav>
                    <Nav><Link href="/quality">Quality</Link></Nav>
                    <Nav><Link href="/velocity">Velocity</Link></Nav>
                    <Nav><Link href="/cost">Cost</Link></Nav>
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
  
  