import React, { Component } from 'react';
import './Fms.css'

import { Button, Row, Col, Card, Collapse } from 'react-bootstrap'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { AvForm, AvRadio, AvRadioGroup, Label, AvInput, AvField, AvGroup } from 'availity-reactstrap-validation';
// import Card from 'reactstrap/Card'
// import DatePicker from 'react-bootstrap-date-picker'
import DatePicker from "react-datepicker";
// import 'react-16-bootstrap-date-picker'
// var DatePicker = require("react-bootstrap-date-picker");
import PropTypes from 'prop-types';
import * as PeopleActions from '../actions/people'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../components/NavBar";
class PeopleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            open: false,
            no_of_operators: '',
            no_of_apprentice: '',
            no_of_agency: '',
            injury_free: '',
            reason_injury: ''

        }
        this.Validation = this.Validation.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {

    }
    static contextTypes = {
        router: PropTypes.object
    }
    Validation(event, values) {
        console.log(this.state.reason_injury)
        this.props.actions.savePeopleValues(this.state.no_of_operators, this.state.no_of_apprentice, this.state.no_of_agency, this.state.injury_free, this.state.reason_injury);
        this.context.router.history.push("/quality");
    }
    onChange(e) {
        // console.log(e.target.no_of_operators);
        // console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);

    }



    render() {
        const { open } = this.state;
        return (
            <div className="Container">
                <NavBar />
              
       
          

                <Card className='CardTop'>
                    <Card.Header className='CardHead' ><b>People</b></Card.Header>
                    <Card.Body className='CardBody'>
                    <span><Button
                    className=" button"
          onClick={() => this.setState({ open: !open })}
         
          
        > Main/Body
        </Button></span>
        <span><Button
                    className=" button"
          onClick={() => this.setState({ open: !open })}
         
          
        > BHL
        </Button></span>
        <span><Button
                    className=" button"
          onClick={() => this.setState({ open: !open })}
         
          
        > Feeder/Rail
        </Button></span>
        <Collapse in={this.state.open}>
        <div >
        
                        <AvForm  onValidSubmit={this.Validation}>

                            <Row>

<Col>
                                <Col>
                                    <AvGroup>

                                        <AvField
                                            type="number"
                                            name="no_of_operators"
                                            id="no_of_operators"
                                            placeholder="No of Operators"
                                            errorMessage="Field Required"
                                            value={this.state.no_of_operators}
                                            onChange={this.onChange}
                                            label="No of Operators"
                                            required
                                        />
                                    </AvGroup>
                                    </Col>
                                    <Col>
                                    <AvGroup>

                                        <AvField
                                            type="number"
                                            name="no_of_apprentice"
                                            id="no_of_apprentice"
                                            placeholder="No of Apprentice"
                                            errorMessage="Field Required"
                                            label="No of Apprentice"
                                            value={this.state.no_of_apprentice}
                                            onChange={this.onChange}
                                            required
                                        />
                                    </AvGroup>

                                    </Col>
                                    <Col>
                                    <AvGroup >

                                        <AvField
                                            type="number"
                                            name="no_of_agency"
                                            id="no_of_agency"
                                            placeholder="No of Agency"
                                            errorMessage="Field Required"
                                            value={this.state.no_of_agency}
                                            onChange={this.onChange}
                                            label="No of Agency"
                                            required
                                        />
                                    </AvGroup>
                                </Col>
                                </Col>
                            </Row>
                            <div className="FormBody">
                            <Row>
                                <Col>

                                    <AvRadioGroup name="injury_free" label="Is injury free day?"

                                        required errorMessage="Pick one!">
                                        <AvRadio label="Yes" value="Yes" checked={this.state.injury_free === 'Yes'} onChange={this.onChange} />
                                        <AvRadio label="No" value="No" checked={this.state.injury_free === 'No'} onChange={this.onChange} />

                                    </AvRadioGroup>
                                    {
                                        this.state.injury_free === 'Yes' ?
                                            <div>
                                                <AvField

                                                    name="reason_injury"

                                                    label="Reason for Injury"
                                                    placeholder="Reason"
                                                    value={this.state.reason_injury}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            :
                                            <div>

                                            </div>
                                    }
                                </Col>
                            </Row>
                            </div>



                            
                         


                                <Button color="primary" style={buttonStyle} type='submit'>
                                    Proceed
    
                            </Button>
                         
                        </AvForm>
                        </div>
                        </Collapse>
                    </Card.Body>
                </Card>

            </div>


        );
    }
}


const buttonStyle = {
    margin: "10px 10px 10px 10px",
    color: "white",
    border: 0,
    backgroundColor: 'yellowgreen'
};

const buttonStylex = {
    margin: "10px 10px 10px 10px",
    color: "white",
    border: "0 solid yellowgreen",
    width:"100%",
    
    backgroundColor: 'teal'
};


People.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string,
};
function mapStateToProps(state) {
    return {
        people: state.peopleReducer,

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
)(PeopleForm)