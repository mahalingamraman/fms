import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as LoginActions from '../actions/login'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../css/login.css";

class Login extends Component{
 constructor(props, context) {
    super(props, context);
	this.state = {
      email: this.props.email || ''
    }
  }
  handleChange(e) {
	console.log(e.target.value);
    this.setState({ email: e.target.value })
  }
  
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }


  handleSubmit( event ) {
    event.preventDefault();
  }

render(){
  let isValidUser = this.props.login.isValidUser ?'Valid User':'Invalid USer';
  return(
        <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <label>Email</label>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
      );
  }
  };
 
Login.propTypes = {
  email: PropTypes.string,
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
