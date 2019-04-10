import React, { Component } from "react";
import "../css/Velocity.css";
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
import * as VelocityActions from '../actions/velocity';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


function validateForm(machinePlan,
    machineRun,
    DeburingCompleted,
    OPhrs,
    machinePlan1,
    machineRun1,
    OPhrs1
    ) {
    const errors = [];

        if (OPhrs===0 && OPhrs1===0)
        {
            errors.push("entering O/P Hrs is Important!!!");
            
        }
      
        return errors;
   }


class Velocity extends Component {
  constructor(props,context) {
    super(props, context);
    this.state = {
        open: true,
      errors:[] ,
      machinePlan:0 ,
      machineRun:0,
      DeburingCompleted:0,
      OPhrs:0 ,
      machinePlan1:0 ,
      machineRun1:0,
      OPhrs1:0 ,
      smShow: false,
  
     
    };
    
}
   
    
    handleSubmit = e => {
      this.props.actions.validateVelocity( this.state.machinePlan,
        this.state.machineRun,
        this.state.DeburingCompleted,
        this.state.OPhrs,
        this.state.machinePlan1,
        this.state.machineRun1,
        this.state.OPhrs1,
        );
        
        const {machinePlan,
            machineRun,
            DeburingCompleted,
            OPhrs,
            machinePlan1,
            machineRun1,
            OPhrs1 } = this.state;
    
        const errors = validateForm(machinePlan,
            machineRun,
            DeburingCompleted,
            OPhrs,
            machinePlan1,
            machineRun1,
            OPhrs1);
        if (errors.length > 0) {
          this.setState({ errors });
          this.setState({ smShow: true });
          return;
        }
        else{this.setState({redirect:true});
      }
      e.preventDefault();
    
        // submit the data...
      }

    render() {
      
    const {  open } = this.state; 
    let smClose = () => this.setState({ smShow: false });
   
    if (this.state.redirect) {
        return <Redirect to="/velocityPageTwo"/>;
      }
    return(
      <div>
       <HeaderTAB/>
       <div className="includeHeader">
          <h3>VELOCITY</h3>
        <Card className="velocitypage">
        
        
        <Card.Body>
        <>
        <Row className="rowHeader">
        <Button className="velocity"
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          >
           Velocity
        </Button></Row>
         
        <Collapse in={this.state.open}>
      <div id="example-collapse-text">
      <Form onSubmit={this.handleSubmit} className="formvelocity">

     
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
                                                                <Form.Group controlId="Machines-planned-six">
                                                                    <Form.Label>No of Machines Planned</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.machinePlan}  min="0" onChange={evt => this.setState({ machinePlan: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="Machines-Running-six">
                                                                    <Form.Label>No of Machines Running</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.machineRun}  min="0" onChange={evt => this.setState({ machineRun: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="Output Hrs-six">
                                                                    <Form.Label>Output Hours Produced</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.OPhrs}  min="0" onChange={evt => this.setState({OPhrs: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="Deburing completed-six">
                                                                    <Form.Label>Deburing Completed</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.DeburingCompleted}  min="0" onChange={evt => this.setState({ DeburingCompleted: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
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
                                                                <Form.Group controlId="Machines-planned-eight">
                                                                    <Form.Label>No of Machines Planned</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.machinePlan1}  min="0" onChange={evt => this.setState({ machinePlan1: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="Machines-Running-eight">
                                                                    <Form.Label>No of Machines Running</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.machineRun1}  min="0" onChange={evt => this.setState({ machineRun1: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="Output Hrs-eight">
                                                                    <Form.Label>Output Hours Produced</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.OPhrs1}  min="0" onChange={evt => this.setState({OPhrs1: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                              
                                            


                                       
                                
            
            
            </Col>
            </Row>
           
                <Card.Footer> <Row>
                <Col>
                <Button  id="proceedToVel" type="submit" className="pull-right"
                                                onClick={()=>this.handleSubmit} >Next</Button>
                     
                </Col>

            </Row></Card.Footer>
              
           
             <Modal 
                size="sm"
                show={this.state.smShow}
                onHide={smClose}
                aria-labelledby="error_modal"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="error_modal" >
                    Error
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Enter Some Values</Modal.Body>
                </Modal> 
            
            </Container>
            <br/>
           
          
           
    
       
         
       
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


               


               Velocity.propTypes = {
                classes: PropTypes.object.isRequired,
                text: PropTypes.string,
                  
                  };
                  function mapStateToProps(state) {
                    return {
                      velocitycomp: state.velocityReducer	
                    }
                  }
                  function mapDispatchToProps(dispatch) {
                    return {
                      actions: bindActionCreators(VelocityActions, dispatch)
                    }
                  }
                  export default connect(
                    mapStateToProps,
                    mapDispatchToProps
                  )(Velocity)
                  