import React, { Component } from 'react';

import PropTypes from 'prop-types';
import * as HomeActions from '../../../actions/oht/home'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Button, Row, Col,  Card } from 'react-bootstrap'

import { AvForm, AvInput,AvField,AvGroup} from 'availity-reactstrap-validation';
import * as LoginActions from '../../../actions/oht/login'
// import Card from 'reactstrap/Card'
// import DatePicker from 'react-bootstrap-date-picker'
import DatePicker from "react-datepicker";
// import 'react-16-bootstrap-date-picker'
// var DatePicker = require("react-bootstrap-date-picker");
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

class Form9 extends Component {
    constructor(props) {

        super(props);
        this.props.unhide_action.hideAll();
        this.props.unhide_action.hidePeople();
        this.state = {


           

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
        
        this.props.actions.saveHomeValues(this.state);
        //  const { router } = this.context
        // const state1 = router.getState()
        // console.log(state1);
        // this.props.unhide_action.unhidePeople();
        console.log(this.props)
        this.context.router.history.push("/people");
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        // console.log(this.state);
    }


    render() {
        return (
            <div>
           
            <div style={{marginLeft:"20px"}}>
            
           
             

                <Card style={{
                    
                }}
                className="CardTop">
                    
                    <Card.Body >
                    



                        <AvForm onValidSubmit={this.Validation}>

                            <Row>
                               <Col>
                               <Row>
                               <Col>
                                    <AvGroup>
                                       
                                        <AvField value={this.state.shift}
                                                onChange={this.onChange} type="select" label ="Model" name="model"  placeholder="Select "  errorMessage="Field Required" required>
                                            <option value="" hidden>Select Shift</option>
                                            <option value="Shift 1">Shift 1</option>
                                            <option value="Shift 2">Shift 2</option>
                                            <option value="Shift 3">Shift 3</option>

                                        </AvField>
                                    </AvGroup>
                                    </Col>
                                    </Row>   <Row>
                                    <Col>
                                    <AvGroup>
                                    
                                        <AvField value={this.state.shift}
                                                onChange={this.onChange} type="select" label ="PDI Preparation" name="pdi_preparation"  placeholder="Select "  errorMessage="Field Required" required>
                                            <option value="" hidden>Select Shift</option>
                                            <option value="Shift 1">Shift 1</option>
                                            <option value="Shift 2">Shift 2</option>
                                            <option value="Shift 3">Shift 3</option>

                                        </AvField>
                                    </AvGroup>
                                    </Col>
                                    </Row>   <Row>
                                    <Col>
                                    <AvGroup>
                                       
                                        <AvField value={this.state.shift}
                                                onChange={this.onChange} type="select" label ="PDI Inspection" name="pdi_inspection"  placeholder="Select "  errorMessage="Field Required" required>
                                            <option value="" hidden>Select Shift</option>
                                            <option value="Shift 1">Shift 1</option>
                                            <option value="Shift 2">Shift 2</option>
                                            <option value="Shift 3">Shift 3</option>

                                        </AvField>
                                    </AvGroup>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col>
                                    <AvGroup>
                                       
                                        <AvField value={this.state.shift}
                                                onChange={this.onChange} type="select" label ="PDA" name="pda"  placeholder="Select "  errorMessage="Field Required" required>
                                            <option value="" hidden>Select Shift</option>
                                            <option value="Shift 1">Shift 1</option>
                                            <option value="Shift 2">Shift 2</option>
                                            <option value="Shift 3">Shift 3</option>

                                        </AvField>
                                    </AvGroup>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col>
                                    <AvGroup>
                                       
                                        <AvField value={this.state.shift}
                                                onChange={this.onChange} type="select" label ="FPC" name="fpc"  placeholder="Select "  errorMessage="Field Required" required>
                                            <option value="" hidden>Select Shift</option>
                                            <option value="Shift 1">Shift 1</option>
                                            <option value="Shift 2">Shift 2</option>
                                            <option value="Shift 3">Shift 3</option>

                                        </AvField>
                                    </AvGroup>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col>
                                    <AvGroup>
                                       
                                        <AvField value={this.state.shift}
                                                onChange={this.onChange} type="select" label ="RTS" name="rts"  placeholder="Select "  errorMessage="Field Required" required>
                                            <option value="" hidden>Select Shift</option>
                                            <option value="Shift 1">Shift 1</option>
                                            <option value="Shift 2">Shift 2</option>
                                            <option value="Shift 3">Shift 3</option>

                                        </AvField>
                                    </AvGroup>
                                    </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                    <AvGroup>
                                       
                                        <AvField value={this.state.shift}
                                                onChange={this.onChange} type="select" label ="Shipped Machine" name="shipped_machine"  placeholder="Select "  errorMessage="Field Required" required>
                                            <option value="" hidden>Select Shift</option>
                                            <option value="Shift 1">Shift 1</option>
                                            <option value="Shift 2">Shift 2</option>
                                            <option value="Shift 3">Shift 3</option>

                                        </AvField>
                                    </AvGroup>
                                    </Col>
                                    </Row>
                                   
                                    </Col>
                            </Row>
                            <br/>
                            <br/>

                           <Button variant="success"type="submit">Submit</Button>

                        </AvForm>
                         
                   
                        
                    </Card.Body>
                </Card>

            </div>
            </div>

        );
    }
}

Form9.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string,
  };
  function mapStateToProps(state) {
    return {
      home: state.homeReducer,	
      login:state.loginReducer
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(HomeActions, dispatch),
      unhide_action:bindActionCreators(LoginActions,dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form9)