import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import HeaderTAB from "./header";
import Modal from 'react-bootstrap/Modal';

import PropTypes from 'prop-types';
import '../css/People.css';
import * as PeopleActions from '../actions/people';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



function validateForm(sm_six,
  
    sm_eight,
    ) {
    const errors = [];

        if ( sm_six.length===0 && sm_eight.length===0)
        {
            errors.push("Section Manager value is Important!!!");
            
        }
      
        return errors;
   }

class People extends Component {
  constructor(props,context) {
    super(props, context);
    this.state = {
        open: true,
      errors:[],
      sm_six:"" || this.props.sm_six,
      sm_eight:"" || this.props.sm_eight,
      opwd:0 || this.props.opwd,
      opwod:0 || this.props.opwod,
      Apprentice:0 || this.props.Apprentice,
      Agency:0 || this.props.Agency,
      Injure:"No" ||this.props.Injure,
      opwd1:0 || this.props.opwd1,
      opwod1:0 || this.props.opwod1,
      Apprentice1:0 || this.props.Apprentice1,
      Agency1:0 || this.props.Agency1,
      smShow: false,

     
    };
    
}

    
    handleSubmit = e => {
        this.props.actions.validatePeople(this.state.sm_six,this.state.opwd,this.state.opwod,this.state.Apprentice,this.state.Agency,this.state.Injure,this.state.sm_eight,this.state.opwd1,this.state.opwod1,this.state.Apprentice1,this.state.Agency1);


        const { sm_six,
            sm_eight} = this.state;
    
        const errors = validateForm(sm_six,
            sm_eight);
        if (errors.length > 0) {
          this.setState({ errors });
          this.setState({ smShow: true });
          return;
        }
        else{ this.props.history.push("/quality");;
      }
      e.preventDefault();
    
        // submit the data...
      }

    render() {
      
    const {  open } = this.state; 
    let smClose = () => this.setState({ smShow: false });
    if (this.state.redirect) {
        return <Redirect to="/quality"/>;
      }
    return(
      <div>
       <HeaderTAB/>
       <div className="includeHeader">
          <h3>PEOPLE</h3>
        <Card className="peoppage">
        
        
        <Card.Body>
        <>
        <Row className="rowHeader">
        <Button className="people"
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          >
           People
        </Button></Row>
         
        <Collapse in={this.state.open}>
      <div id="example-collapse-text">
      <Form onSubmit={this.handleSubmit} className="formpeople">

     
        <Container>
        <Row className="row_header">
            <Col className="column_header">
                                                <Row>
                                                    <Col>
                                                    <Form.Control plaintext readOnly defaultValue="BAY 6 & 7" size="lg" align="center" /> 
                                                    </Col>
                                                    </Row>
                          
                                                <Row>
                                                    <Col>

                                                        <Form.Group controlId="Section-manager six">
                                                        <Form.Label>Select a section manager</Form.Label>
                                                        <Form.Control as="select" type="dropdown-button" value={this.state.sm_six} onChange={evt => this.setState({ sm_six: evt.target.value })}>
                                                        <option >Select one option</option>
                                                        <option>Prabakar</option>
                                                        <option>Sampath</option>
                                                        <option>Diva</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                                <Col>
                                                                <Form.Group controlId="op-control six">
                                                                    <Form.Label>No of Operators-with deburing</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.opwd}  min="0" onChange={evt => this.setState({ opwd: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="op-control-wod six">
                                                                    <Form.Label>No of Operators-without deburing</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.opwod}  min="0" onChange={evt => this.setState({ opwod: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="Apprentice-control six">
                                                                    <Form.Label>No of Apprentice</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.Apprentice}  min="0" onChange={evt => this.setState({Apprentice: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="Agency-control six">
                                                                    <Form.Label>No of Agency</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.Agency}  min="0" onChange={evt => this.setState({ Agency: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                 <Row>
                                                <Col>
                                               
                                                    <Form.Group as={Row}>
                                                    <Form.Label>Is Injure Free Day??  </Form.Label> 
                                                        <Form.Check
                                                        type="radio"
                                                        label="YES"
                                                        name="formHorizontalRadios"
                                                        id="YES"
                                                        onChange={evt => this.setState({ Injure: evt.target.id })}
                                                        />
                                                        <Form.Check
                                                        type="radio"
                                                        label="NO"
                                                        id="NO"
                                                        name="formHorizontalRadios"
                                                        value={this.state.Injure}
                                                        onChange={evt => this.setState({ Injure: evt.target.id })}
                                                        />
                                            
                                                  
                                                    </Form.Group>
                                               
                                                </Col>   
                                                </Row>
                                               
 

                                       
                                    
                   
            </Col>
            <Col className="column_header">
                                                 <Row>
                                                    <Col>
                                                    <Form.Control plaintext readOnly defaultValue="BAY 8& 9" size="lg" align="center" /> 
                                                    </Col>
                                                </Row>
                            
                                   
                                                 <Row>
                                                     <Col>
                                                        <Form.Group controlId="Section-manager eight">
                                                        <Form.Label>Select a section manager</Form.Label>
                                                        <Form.Control as="select" type="dropdown-button" value={this.state.sm_eight} onChange={evt => this.setState({ sm_eight: evt.target.value })}>
                                                        <option>Select one option</option>
                                                        <option>Prabakar</option>
                                                        <option>Sampath</option>
                                                        <option>Diva</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                                <Col>
                                                                <Form.Group controlId="Operator-control eight">
                                                                    <Form.Label>No of Operators-with deburing</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.opwd1}  min="0"  onChange={evt => this.setState({ opwd1: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="Operator-control-wod">
                                                                    <Form.Label>No of Operators-without deburing</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.opwod1}  min="0"  onChange={evt => this.setState({ opwod1: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="Apprentice-control eight">
                                                                    <Form.Label>No of Apprentice</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.Apprentice1}  min="0" onChange={evt => this.setState({ Apprentice1: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="Agency-control">
                                                                    <Form.Label>No of Agency</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.Agency1}  min="0" max="3" onChange={evt => this.setState({ Agency1: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                              
                                            


                                       
                                
            
            
            </Col>
            </Row>
            <Card.Footer>
            <Row>
                <Col>
                <Button  id="proceedToVel" type="submit" className="pull-right"
                                                onClick={()=>this.handleSubmit} >Next</Button>
                     
                </Col>

            </Row></Card.Footer>
            
                <Modal 
                size="sm"
                show={this.state.smShow}
                onHide={smClose}
                aria-labelledby="example-modal-sizes-title-sm"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm" >
                    Error
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Section Manager value is Important !!!</Modal.Body>
                </Modal>
            
            </Container>
            
    
         
       
       </Form>
       
    
    </div>
    </Collapse>
   
    </>
   
   
    </Card.Body>
                                      
        
      </Card>
      </div> 
      </div>
       
    );
}}

People.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
  
  };
  function mapStateToProps(state) {
    return {
      peoplecomp: state.peopleReducer	
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(PeopleActions, dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(People)
  