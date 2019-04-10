import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Input,Row,
  Button,Card,Alert
} from 'react-bootstrap';
import PropTypes from 'prop-types';

import * as LoginActions from '../actions/login'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


import { AvForm, AvInput,AvField,AvGroup} from 'availity-reactstrap-validation';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

// import { CardTitle } from 'material-ui';

class Login extends Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
          text: this.props.text || ''
        }
        // this.Validate = this.Validate.bind(this);

    }
  // Validate(event,value){
  //   // var value=Document.getElementById("uname").value; 
  //  console.log(value)
  //   if(value.uname=="oht")
  // //  {  this.state.isValid=true;
  // {
  //   this.setState(prevState => ({ isValid: true }));
  //      return true;
  //  }
  //  else{
  //      alert("Enter a valid Username!!")
  //      return false;
  //  }
  // }
  handleChange(e) {
    console.log(e.target.value);
      this.setState({ text: e.target.value })
      console.log(this.props.login)
    }

  render() {
    return (
        <div style={{
          width: '20rem',
          marginTop:"60px",
          display: "block",
  marginLeft: "auto",
  marginRight: "auto",
           justifyContent: "center" 
          
      }}
         >
         
        <Card style={{
            width: '20rem',
            marginTop:"60px",
            display: "block",
    marginLeft: "auto",
    marginRight: "auto",
             justifyContent: "center" 
            
        }}>
            <Card.Header body inverse style={{ backgroundColor: '#FAB914' }}><b>Login</b></Card.Header>
            {/* <CardTitle>Login to Your Account</CardTitle> */}
            <Card.Body >
                <br/>
                <br/>
                
        <AvForm className="form" onValidSubmit={() => this.props.actions.validateUsername(this.state.text)} >
          <Row>
          <Col>
            <AvGroup>
              {/* <Label><b>Username</b></Label> */}
              <AvField
                type="name"
                name="uname"
                id="uname"
                label="Username"
                placeholder="Enter Username"
                value={this.state.text}
		            onChange={this.handleChange.bind(this)}
              />
            </AvGroup>
          </Col>
          </Row>
          
          <br/>
          <br/>
          
          <div>
          {this.props.login.isValidUser ? 
          <div>  
         
              <div>
            
            <Route render={({ history }) => (


<Button color="primary" type='submit'
    onClick=   {()=>{history.push('/home')} } >
    Proceed </Button>
)} />
</div>

</div>
 :
 <div>
   {/* <Alert  variant='danger'>
    Not a Valid Username!!
  </Alert> */}
  {/* {alert("Not a Valid User!!")} */}

  <Button color="primary" type='submit' >
      Proceed </Button>

  
  
</div>}
</div>
       
        </AvForm>
      </Card.Body>
      </Card>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
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