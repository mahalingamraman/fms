import React, { Component } from 'react';

import Another from '../../containers/oht/Another';
import Home from '../../containers/oht/Home';
import Quality from '../../containers/oht/Quality';

import People from '../../containers/oht/People';
import Velocity from '../../containers/oht/Velocity';
import Cost from '../../containers/oht/Cost';
import Login from '../../containers/oht/Login';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import PropTypes from 'prop-types';
import { ic_delete } from "react-icons-kit/md/ic_delete";
import { ic_home } from "react-icons-kit/md/ic_home";
import { ic_people } from "react-icons-kit/md/ic_people";
import { ic_thumb_up } from "react-icons-kit/md/ic_thumb_up";
import { ic_monetization_on } from "react-icons-kit/md/ic_monetization_on";
import { ic_directions_run } from "react-icons-kit/md/ic_directions_run";
import { ic_question_answer } from "react-icons-kit/md/ic_question_answer";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, TabContainer, Row, Col, Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap'
// import Login from './Login'
// import Quality from './Quality';
// import Another from './Another';
// import Submit from './Submit'
const IconCnt_ = styled.div`
color: #fff;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {

  }
  logout(e) {
	  this.props.history.push("/");
    this.context.router.history.push("/");
  }

  render() {
	 if(!this.props.login.isValidUser){
		 return '';
	 }
    return (
	
      <div>
        <TabContainer responsive>
          <Navbar responsive bg="dark" variant="dark">
            <Navbar.Brand href="/home">FMS</Navbar.Brand>
            <Nav className="mr-auto">{this.props.login.userName}
			{this.props.login.user == 'oht'?
			(<Nav>
				<Nav><Link to="/ohthome" ><IconCnt_><Icon icon={ic_home} /> Home</IconCnt_></Link></Nav>
				<Nav><Link to="/ohtpeople" ><IconCnt_><Icon icon={ic_people} /> People<t/></IconCnt_></Link></Nav>
                <Nav><Link to="/ohtquality"><IconCnt_><Icon icon={ic_thumb_up} /> Quality<t/></IconCnt_></Link></Nav>
                <Nav><Link to="/ohtvelocity" ><IconCnt_><Icon icon={ic_directions_run} />Velocity<t/></IconCnt_></Link></Nav>
                <Nav><Link to="/ohtcost" ><IconCnt_><Icon icon={ic_monetization_on} />Cost<t/></IconCnt_></Link></Nav>
                <Nav><Link to="/ohtother" ><IconCnt_><Icon icon={ic_question_answer} />Report<t/></IconCnt_></Link>&nbsp;</Nav>  
			</Nav>): ''}
			{this.props.login.user == 'lptmachine'?
			(<Nav>
				<Nav><Link to="/home" ><IconCnt_><Icon icon={ic_home} /> Home <t/> </IconCnt_></Link></Nav>
				<Nav><Link to="/people" ><IconCnt_><Icon icon={ic_people} /> People <t/></IconCnt_></Link></Nav>
        <Nav><Link to="/quality"><IconCnt_><Icon icon={ic_thumb_up} /> Quality <t/></IconCnt_></Link></Nav>
        <Nav><Link to="/velocity" ><IconCnt_><Icon icon={ic_directions_run} />Velocity <t/></IconCnt_></Link></Nav>
        <Nav><Link to="/cost" ><IconCnt_><Icon icon={ic_monetization_on} />Cost <t/></IconCnt_></Link></Nav>
			
			</Nav>): ''}
			{this.props.login.user == 'fab'?
			(<Nav>	
              <Nav>
				<Link to="/fabhome">
				<img src="https://www.freeiconspng.com/minicovers/black-home-icon-11.png" width="40" height="40" class="logouticon" alt="React Bootstrap logo"/>
				Home</Link>
			  </Nav>
			  <Nav><Link to="/fabpeople">
			  <img
					src="https://www.freeiconspng.com/minicovers/group-of-people-icon-22.png"
					width="40"
					height="40"
					class="logouticon"
					alt="React Bootstrap logo"
				  />
			  People</Link></Nav>
			  <Nav><Link to="/fabqualitytable">
			  <img
					src="https://img.icons8.com/ios/2x/good-quality-filled.png"
					width="40"
					height="40"
					class="logouticon"
					alt="React Bootstrap logo"
				  />
			  Quality</Link></Nav>
			  <Nav><Link to="/fabframepdi">
			  <img
					src="https://secure.gravatar.com/avatar/c3c158ec7d25aa88eab75ec11ec41a90?s=100&d=retro&r=g"
					width="40"
					height="40"
					class="logouticon"
					alt="React Bootstrap logo"
				  />
			  Velocity</Link></Nav>
			  <Nav><Link to="/fabcostinfo">
			  <img
					src="https://img.icons8.com/ios/2x/expensive-filled.png"
					width="40"
					height="40"
					class="logouticon"
					alt="React Bootstrap logo"
				  />
			  Cost</Link></Nav>
            </Nav>): ''}

						
                      </Nav>
					  <Nav><Link to="/" >Logout</Link></Nav>
					  
</Navbar>
</TabContainer>
</div>


                )
                }
                }
NavBar.propTypes = {
                  classes: PropTypes.object.isRequired,
                text: PropTypes.string,
              };
function mapStateToProps(state) {
  return {
                  login: state.loginReducer	
                
              }
            }
            
            export default connect(
              mapStateToProps
            )(NavBar)
            
            
