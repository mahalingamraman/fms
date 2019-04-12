import React, { Component } from 'react';

import PropTypes from 'prop-types';
import * as HomeActions from '../../actions/oht/home'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Button, Row, Col,  Card, Container } from 'react-bootstrap'
import "../../css/oht/home_style.css"
import { AvForm, AvInput,AvField,AvGroup} from 'availity-reactstrap-validation';
import * as LoginActions from '../../actions/oht/login'
import Sidebar from "../../components/oht/Sidebar"
// import Card from 'reactstrap/Card'
// import DatePicker from 'react-bootstrap-date-picker'
import DatePicker from "react-datepicker";
// import 'react-16-bootstrap-date-picker'
// var DatePicker = require("react-bootstrap-date-picker");
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
class Home extends Component {
    constructor(props) {
        super(props);
        this.props.unhide_action.hideAll();
        this.props.unhide_action.hidePeople();
        this.state = {


            date: '',
            shift: ''

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
        
        this.props.actions.saveHomeValues(this.state.date,this.state.shift);
        //  const { router } = this.context
        // const state1 = router.getState()
        // console.log(state1);
        // this.props.unhide_action.unhidePeople();
        console.log(this.props)
        this.context.router.history.push("/ohtpeople");
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        // console.log(this.state);
    }


    render() {
        return (
            <div>
      
        <div >
            
           
             <Container responsive>

             <Card>
          <Card.Header body inverse style={{ backgroundColor: '#FAB914' }}><b>Welcome to OHT</b></Card.Header>
                    <Card.Body className="card-body">
                    



                        <AvForm onValidSubmit={this.Validation}>

                            <Row>

                                <Col>
                                    <AvGroup controlId="formGroupDate">
                                      
                                        {/* <DatePicker 
                                            // selected={this.state.startDate}
                                            // onChange={this.handleChange}
                                        /> */}
                                        <AvField
                                            type="date"
                                            name="date"
                                            id="date"
                                            label="Date"
                                            value={this.state.date}
                                                onChange={this.onChange}
                                            placeholder="date placeholder"
                                            errorMessage="Field Required"
                                            required
                                        />
                                    </AvGroup>
                                </Col>
                                <Col>
                                    {/* <FormGroup controlId="formGroupFacility">
                                        <Label>Facility</Label>
                                        <Input as="select" placeholder="Facility">
                                            
                                        </Input>
                                    </FormGroup> */}
                                    <AvGroup>
                                       
                                        <AvField value={this.state.shift}
                                                onChange={this.onChange} type="select" label ="Shift" name="shift" id="shift" placeholder="Select Shift"  errorMessage="Field Required" required>
                                            <option value="" hidden>Select Shift</option>
                                            <option value="Shift 1">Shift 1</option>
                                            <option value="Shift 2">Shift 2</option>
                                            <option value="Shift 3">Shift 3</option>

                                        </AvField>
                                    </AvGroup>
                                </Col>
                            </Row>
                            <br/>
                            <br/>

                           <Button color="primary"type="submit">Proceed</Button>

                        </AvForm>
                         
                   
                        
                    </Card.Body>
                </Card>
                </Container>
            </div>
            </div>

        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string,
  };
  function mapStateToProps(state) {
    return {
      home: state.homeReducerOHT,	
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
  )(Home)