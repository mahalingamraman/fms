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
import * as VelocityActions from '../actions/velocitySM';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


function validateForm( OHT,
    UGM,
    PendingForRework,
    PartsPending,CriticalIssues
    ) {
    const errors = [];

        if (OHT===0 && UGM===0)
        {
            errors.push("entering O/P Hrs is Important!!!");
            
        }
      
        return errors;
   }


class ShiftManager extends Component {
  constructor(props,context) {
    super(props, context);
    this.state = {
        open: true,
      errors:[],
      OHT:0 ,
      UGM:0 ,
      PendingForRework:0 ,
      PartsPending:0 ,
      CriticalIssues:"" ,
      smShow: false,
      
     
    };
    
}
    handleShiftSubmit=e=>{

        this.props.actions.validateVelocity( 
            this.state.OHT,
            this.state.UGM,
            this.state.PendingForRework,
            this.state.PartsPending,this.state.CriticalIssues);

        const{ OHT,
            UGM,
            PendingForRework,
            PartsPending,CriticalIssues}=this.state;
            const errors = validateForm(OHT,
                UGM,
                PendingForRework,
                PartsPending,CriticalIssues);
            if (errors.length > 0) {
              this.setState({ errors });
              this.setState({ smShow: true });
              return;
            }
            else{this.setState({redirect:true});
      
           
          e.preventDefault();
    }}

    
    

    render() {
      
    const {  open } = this.state; 
    let smClose = () => this.setState({ smShow: false });
    
    if (this.state.redirect) {
        return <Redirect to="/cost"/>;
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
           Applicable only for Shift Manager
        </Button></Row>
         
        <Collapse in={this.state.open}>
      <div id="example-collapse-text">
      <Form onSubmit={this.handleSubmit} className="formvelocity">

     
         
                
                    <Container>
                            <Row>
                                <Col >
                                                <Row>
                                                    <Col>
                                                    <Form.Control plaintext readOnly defaultValue="No of axle backlog" size="lg" align="center" /> 
                                                    </Col>
                                                    </Row>
                          
                                            
                                                <Row>
                                                                <Col>
                                                                <Form.Group controlId="OHT">
                                                                    <Form.Label>OHT</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.OHT}  min="0" onChange={evt => this.setState({ OHT: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="UGM">
                                                                    <Form.Label>UGM</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.UGM}  min="0" onChange={evt => this.setState({UGM: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="PendingForRework">
                                                                    <Form.Label>Pending For Rework</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.PendingForRework}  min="0" onChange={evt => this.setState({PendingForRework: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="IECC Parts Pending">
                                                                    <Form.Label>IECC Parts Pending</Form.Label>
                                                                    <Form.Control as="input" type="number" value={this.state.PartsPending}  min="0" onChange={evt => this.setState({PartsPending: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col>
                                                                <Form.Group controlId="Critical Issues">
                                                                    <Form.Label>Critical Issues</Form.Label>
                                                                    <Form.Control as="input" type="text" value={this.state.CriticalIssues}  min="0" onChange={evt => this.setState({CriticalIssues: evt.target.value })}>
                                                                    
                                                                    </Form.Control>
                                                                </Form.Group>
                                                                </Col>
                                                </Row>

                                                <Row>
                                                    <Col>
                                                     
                                                        <Button  id="proceed"
                                                                        type="submit" 
                                                                        onClick={this.handleShiftSubmit} >Save</Button>
                                                    </Col>
                                                </Row>

                                                </Col>
                                                </Row>
                                                </Container>
                       
            


               
                <Card.Footer> <Row>
                <Col>
                <Button  id="proceedToVel" type="submit" className="pull-right"
                                                onClick={()=>this.handleShiftSubmit} >Next</Button>
                     
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


               


               ShiftManager.propTypes = {
                classes: PropTypes.object.isRequired,
                text: PropTypes.string,
                  
                  };
                  function mapStateToProps(state) {
                    return {
                      velocitySMcomp: state.velocitySMReducer	
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
                  )(ShiftManager)
                  