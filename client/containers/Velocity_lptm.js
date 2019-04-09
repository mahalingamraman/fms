import React, { Component } from "react";
import "../css/Velocity_lptm.css";
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
import * as VelocityActions from '../actions/velocity_lptm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


function validateForm(machinePlan,
    machineRun,
    DeburingCompleted,
    OPhrs,
    machinePlan1,
    machineRun1,
    OPhrs1, OHT,
    UGM,
    PendingForRework,
    PartsPending,CriticalIssues
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
      errors:[],
      machinePlan:0 || this.props.machinePlan,
      machineRun:0 || this.props.machineRun,
      DeburingCompleted:0 || this.props.DeburingCompleted,
      OPhrs:0 || this.props.OPhrs,
      machinePlan1:0 ||this.props.machinePlan1,
      machineRun1:0 ||this.props.machineRun1,
      OPhrs1:0 || this.props.OPhrs1,
      OHT:0 || this.props.OHT,
      UGM:0 || this.props.UGM,
      PendingForRework:0 || this.props.PendingForRework,
      PartsPending:0 || this.props.PartsPending,
      CriticalIssues:"" || this.props.CriticalIssues,
      smShow: false,
      ShiftManager:false,
     
    };
    
}
    handleShiftSubmit=e=>{

        this.props.actions.validateVelocity( this.state.machinePlan,
            this.state.machineRun,
            this.state.DeburingCompleted,
            this.state.OPhrs,
            this.state.machinePlan1,
            this.state.machineRun1,
            this.state.OPhrs1,
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
              this.setState({ShiftManagerClose:true})
              return;
            }
           
          e.preventDefault();
    }

    
    handleSubmit = e => {
        
        const {machinePlan,
            machineRun,
            DeburingCompleted,
            OPhrs,
            machinePlan1,
            machineRun1,
            OPhrs1, OHT,
            UGM,
            PendingForRework,
            PartsPending,CriticalIssues } = this.state;
    
        const errors = validateForm(machinePlan,
            machineRun,
            DeburingCompleted,
            OPhrs,
            machinePlan1,
            machineRun1,
            OPhrs1, OHT,
            UGM,
            PendingForRework,
            PartsPending,CriticalIssues);
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
    
    let ShiftManagerClose = () => this.setState({ ShiftManager: false });
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
            <Row >
                <Col>
                <Button className="ShiftManagerForm" type="submit" onClick={()=>this.setState({ShiftManager:true})}>Shift Manager</Button></Col></Row>
            
                <Modal 
                size="lg"
                show={this.state.ShiftManager}
                onHide={ShiftManagerClose}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="shift_manager_form" >
                    Applicable Only for Shift Manager 1 & 2
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
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
                       
            


                </Modal.Body>
                </Modal>
                <Card.Footer> <Row>
                <Col>
                <Button  id="proceedToVel" type="submit" className="pull-right"
                                                onClick={()=>this.handleSubmit} >Next</Button>
                     
                </Col>

            </Row></Card.Footer>
              
           
            
            
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

/*
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
                </Modal> */


               Velocity.propTypes = {
                    open: PropTypes.bool,
                    errors:PropTypes.array,
                    machinePlan:PropTypes.number,
                    machineRun:PropTypes.number,
                    DeburingCompleted:PropTypes.number,
                    OPhrs:PropTypes.number,
                    machinePlan1:PropTypes.number,
                    machineRun1:PropTypes.number,
                    OPhrs1:PropTypes.number,
                    OHT:PropTypes.number,
                    UGM:PropTypes.number,
                    PendingForRework:PropTypes.number,
                    PartsPending:PropTypes.number,CriticalIssues:PropTypes.string,
                    smShow:PropTypes.bool,
                  
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
                  