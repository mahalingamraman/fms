import React, { Component } from 'react';
import './Fms.css'
import PropTypes from 'prop-types';
import * as MPSActions from '../../actions/fab/MPSActions'
import Jumbomps from "../../components/fab/Jumbomps"

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, Row, Col,  Card, Container,NavDropdown } from 'react-bootstrap'
import { AvForm, AvInput,AvField,AvGroup} from 'availity-reactstrap-validation';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../../components/fab/NavBar";


class MPSStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {

           splan:'0',
           sadherence:'0',
           sactual:'0',
           smtd:'0',
           sbacklog:'0',
           fplan:'0',
           fadherence:'0',
           factual:'0',
           fmtd:'0',
           fbacklog:'0'
        }
        this.Validation = this.Validation.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    static contextTypes = {
        router: PropTypes.object
      }

    componentDidMount() {
        // this.props.store.subscribe(this.Validation);
    }
   
    Validation(e){
        e.preventDefault();
        
        this.props.actions.saveMPSValues(
            this.state.splan,this.state.sadherence, this.state.sactual, this.state.smtd,this.state.sbacklog,
            this.state.fplan,this.state.fadherence, this.state.factual, this.state.fmtd,this.state.fbacklog);
        
        console.log(this.props)
        this.context.router.history.push("/costinfo");
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        // console.log(this.state);
    }


    render() {
        return (
            <div>
             <Jumbomps/>
            
            <div className="container"> 
            
            
           <Card className='Cardtop'>
                    <Card.Header className='Bhlhead' >MPS Status</Card.Header>
                    <Card.Body  >
                    
                   

                    <Container>
                        <AvForm onValidSubmit={this.Validation}>
                        
                           
                         
                         
                               <Row>
                               <Col>
                               <Button  style={buttonSmall} >SOL</Button>

                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="text"
                                          name="splan"
                                        
                                          label="SOL Plan "
                                          value={this.state.splan}
                                              onChange={this.onChange}
                                        placeholder="for the day"
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="text"
                                          name="sadherence"
                                        
                                          label="SOL Adherence"
                                          value={this.state.sadherence}
                                              onChange={this.onChange}
                                              placeholder="for the day"
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="text"
                                          name="sactual"
                                        
                                          label="SOL Actual"
                                          value={this.state.sactual}
                                              onChange={this.onChange}
                                              placeholder="for the day"
                                          errorMessage="Field Required"
                                          required
                                      />
                                      <AvField
                                          type="text"
                                          name="smtd"
                                        
                                          label="SOL - MTD"
                                          value={this.state.smtd}
                                              onChange={this.onChange}
                                         placeholder=''
                                          errorMessage="Field Required"
                                          required
                                      />
                                      <AvField
                                          type="text"
                                          name="sbacklog"
                                        
                                          label="Backlog"
                                          value={this.state.sbacklog}
                                              onChange={this.onChange}
                                         placeholder='for the day'
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                                 
                                
                                   
                                   
                                </Col>
                                <Col>
                               <Button  style={buttonSmall} >FOL</Button>

                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="text"
                                          name="fplan"
                                        
                                          label="FOL Plan "
                                          value={this.state.fplan}
                                              onChange={this.onChange}
                                        placeholder="for the day"
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="text"
                                          name="fadherence"
                                        
                                          label="FOL Adherence"
                                          value={this.state.fadherence}
                                              onChange={this.onChange}
                                              placeholder="for the day"
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="text"
                                          name="factual"
                                        
                                          label="FOL Actual"
                                          value={this.state.factual}
                                              onChange={this.onChange}
                                              placeholder="for the day"
                                          errorMessage="Field Required"
                                          required
                                      />
                                      <AvField
                                          type="text"
                                          name="fmtd"
                                        
                                          label="FOL - MTD"
                                          value={this.state.fmtd}
                                              onChange={this.onChange}
                                         placeholder=''
                                          errorMessage="Field Required"
                                          required
                                      />
                                      <AvField
                                          type="text"
                                          name="fbacklog"
                                        
                                          label="Backlog"
                                          value={this.state.fbacklog}
                                              onChange={this.onChange}
                                         placeholder='for the day'
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                                 
                                
                                   
                                   
                                </Col>
                                
                               </Row>
                              
                          
                           <NavDropdown.Divider />
                           <Button  style={buttonStylex} href='/buildmiss'> Prev</Button>

                           <Button  style={buttonSmallx} type="submit">Next </Button>
                         
                           </AvForm>
                           </Container>
                      
                       
                        
                        
                    </Card.Body>
               
                    </Card>
            
           
            </div>
            </div>
        );
    }
}

const buttonStylex = {
   
    color: "white",
    border: 0,
    
    backgroundColor: 'goldenrod',
    float:'left'
};
const buttonSmall = {
  width:"100%",
    color: "white",
    border: 0,
    marginTop: '10px',
    marginBottom: '15px',
    backgroundColor: 'black'
};

const buttonSmallx = {
  
      color: "white",
      border: 0,
     
      backgroundColor: 'goldenrod',
      
      float:'right'
  };
  


MPSStatus.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string,
  };
  function mapStateToProps(state) {
    return {
      mpsstatus:state.MPSReducer
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(MPSActions, dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MPSStatus)