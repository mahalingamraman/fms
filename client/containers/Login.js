import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button  from 'react-bootstrap/Button';
import '../css/Login.css';
import Form from 'react-bootstrap/Form';
import * as LoginActions from '../actions/login'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router';

function validateForm(username) {
  const errors = [];
 
  const user="lptMachine";

    if(username.length===0 || username.toUpperCase()!==user.toUpperCase() )
     { 
       errors.push("Enter the valid user name");
     
     }
     
    return errors;
  }
      


class Login extends Component {
  constructor(props,context) {
    super(props,context);
          //newly added

    this.state = {
      user: this.props.user || '',
     errors:[],
     isEnabled:false,
      };
  }
 
 
  handleChange(e) {
	console.log(e.target.value);
    this.setState({ user : e.target.value })
  }

  handleSubmit = event => {
    this.props.actions.validateUsername(this.state.user);

    const {username}=this.state;
    const errors = validateForm(this.state.user);
    if (errors.length > 0) {
      this.setState({ errors });
       return;
    }
    else{
      this.setState({redirect:true});
  }
  alert(`Signed up with username: ${username} `);
  event.preventDefault();
/*
  let isValidUser = this.props.login.isValidUser ?'Valid User':'Invalid USer';
    if(isValidUser==='Valid User')
    {this.setState({redirect:true})}
   */
    
  }
  handleOnClick = () => {
    // some action...
    // then redirect
    
   
  }

render(){
  //redirect is not working
  if (this.state.redirect) {
    return <Redirect push to="/home" />;
  }
  const {user}=this.state;
  const isEnabled = user.length!==0;
    const { errors } = this.state;
  return (
    <div className="wrap-login">
        <div className="loginmodal-container">
                   
            <h1> Login to Your Account</h1>
           
            <Form onSubmit={this.handleSubmit}>
              <Form.Group >
                  {errors.map(error => (
                      <p key={error}>{error}</p>
                    ))}
                  
                  <Form.Control
                    placeholder="Username"
                    type="input"
                    value={this.state.username}
                    onChange={this.handleChange.bind(this)}            //should not be this.state.handleChange  /*{this.props.login.userName} is used to get the value entered by the user*/
                    /> 
               </Form.Group>
               <Button className="loginButton"
                id="login"
                type="submit"
                disabled={!isEnabled}
                onClick={()=>this.handleSubmit}>
                Login
                </Button> 
                      
                
              </Form>
              <div className="login-help">
                  <a href="#">Register</a> - <a href="#">Forgot Password</a>
              </div>

              
          </div>
       </div>
          

      );
  }}
 
Login.propTypes = {

  user: PropTypes.string,
};
function mapStateToProps(state) {
  return {
    login: state.loginReducer	
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
