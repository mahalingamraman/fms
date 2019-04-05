import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl, Alert } from "react-bootstrap";
import * as LoginActions from '../actions/login'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import "../css/login.css";

class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
      email: this.props.email || '',
	  show: false
    }
	this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ email: e.target.value })
  }

  validateForm() {
    return this.state.email.length > 0;
  }
  handleSubmit( event ) {
    event.preventDefault();
  }
  componentWillUpdate(){
	if(this.props.login.isValidUser){
	  this.props.history.push('/dashboard')
	}
	  console.log(this.props.login);
	 
  }

  render() {
    return (
      <div className="Login">
	  <Alert show={this.state.show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p></p>
		</Alert>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <label><h3>Login to Your Account</h3></label>
            <FormControl
              autoFocus
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={() => this.props.actions.validateUsername(this.state.email)}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  text: PropTypes.string,
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


