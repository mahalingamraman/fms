import React, { Component } from 'react';
import './Fms.css'

import { Button, Row, Col, Card, Collapse,Container } from 'react-bootstrap'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { AvForm, AvRadio, AvRadioGroup, Label, AvInput, AvField, AvGroup } from 'availity-reactstrap-validation';
// import Card from 'reactstrap/Card'
// import DatePicker from 'react-bootstrap-date-picker'
import DatePicker from "react-datepicker";
// import 'react-16-bootstrap-date-picker'
// var DatePicker = require("react-bootstrap-date-picker");
import PropTypes from 'prop-types';
import * as PeopleActions from '../../actions/fab/people'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../../components/fab/NavBar";
class People extends Component {
    constructor(props) {
        super(props);
        this.state = {

            open: false,
            open1:false,
            open2:false,
            no_of_operators: '0',
            no_of_apprentice: '0',
            no_of_agency: '0',
            injury_free: '',
            reason_injury: '',

            no_of_operators1: '0',
            no_of_apprentice1: '0',
            no_of_agency1: '0',
            injury_free1: '',
            reason_injury1: '',

            no_of_operators2: '0',
            no_of_apprentice2: '0',
            no_of_agency2: '0',
            injury_free2: '',
            reason_injury2: ''

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
        this.props.actions.savePeopleValues(
            this.state.no_of_operators, this.state.no_of_apprentice, this.state.no_of_agency, this.state.injury_free, this.state.reason_injury,
            this.state.no_of_operators1, this.state.no_of_apprentice1, this.state.no_of_agency1, this.state.injury_free1, this.state.reason_injury1,
            this.state.no_of_operators2, this.state.no_of_apprentice2, this.state.no_of_agency2, this.state.injury_free2, this.state.reason_injury2);
        this.context.router.history.push("/qualitytable");
    }
    onChange(e) {
        // console.log(e.target.no_of_operators);
        // console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.props);

    }



    render() {
        const { open } = this.state;
        const { open1 } = this.state;
        const { open2 } = this.state;
        return (
            <div class="content">
              
              
       
          

                <Card className='PeopleCardTop'>
                    <Card.Header className='PeopleCardHead ' ><b>People Information</b></Card.Header>
                    <Card.Body className='CardBody'>
                   <Row>
                   <Col>
                 
                    <Button
                    className=" button icon"
          onClick={() => this.setState({ open: !open })}
         
          
        > Main/Body
        </Button>
        </Col>
        <Col>
        <Button
                    className=" button icon1"
          onClick={() => this.setState({ open1: !open1 })}
         
          
        > BHL
        </Button></Col>
        <Col>
        <Button
                    className=" button icon2"
          onClick={() => this.setState({ open2: !open2 })}
         
          
        > Feeder/Rail
        </Button></Col>
       
        </Row>
        <Collapse in={this.state.open}>
        <div >
        <Container>
                        <AvForm  onValidSubmit={this.Validation}>
                        <Row>
                            
                            <Button  style={buttonStylex} type='disabled'>
                                       Main/ Body
        
                                </Button>
                            </Row>

                            <Row>


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
                        </Container>
                        </div>
                        </Collapse>
                        <Collapse in={this.state.open1}>
        <div >
                                    <Container>
                        <AvForm  onValidSubmit={this.Validation}>
                        <Row>
                            
                        <Button  style={buttonStylex} type='disabled'>
                                   BHL
    
                            </Button>
                        </Row>

                            <Row>


                                <Col>
                                    <AvGroup>

                                        <AvField
                                            type="number"
                                            name="no_of_operators1"
                                            id="no_of_operators"
                                            placeholder="No of Operators"
                                            errorMessage="Field Required"
                                            value={this.state.no_of_operators1}
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
                                            name="no_of_apprentice1"
                                            id="no_of_apprentice"
                                            placeholder="No of Apprentice"
                                            errorMessage="Field Required"
                                            label="No of Apprentice"
                                            value={this.state.no_of_apprentice1}
                                            onChange={this.onChange}
                                            required
                                        />
                                    </AvGroup>

                                    </Col>
                                    <Col>
                                    <AvGroup >

                                        <AvField
                                            type="number"
                                            name="no_of_agency1"
                                            id="no_of_agency"
                                            placeholder="No of Agency"
                                            errorMessage="Field Required"
                                            value={this.state.no_of_agency1}
                                            onChange={this.onChange}
                                            label="No of Agency"
                                            required
                                        />
                                    </AvGroup>
                                </Col>
                               
                            </Row>
                            <div className="FormBody">
                            <Row>
                                <Col>

                                    <AvRadioGroup name="injury_free1" label="Is injury free day?"

                                        required errorMessage="Pick one!">
                                        <AvRadio label="Yes" value="Yes" checked={this.state.injury_free1 === 'Yes'} onChange={this.onChange} />
                                        <AvRadio label="No" value="No" checked={this.state.injury_free1 === 'No'} onChange={this.onChange} />

                                    </AvRadioGroup>
                                    {
                                        this.state.injury_free1 === 'Yes' ?
                                            <div>
                                                <AvField

                                                    name="reason_injury"

                                                    label="Reason for Injury"
                                                    placeholder="Reason"
                                                    value={this.state.reason_injury1}
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
                        </Container>
                        </div>
                        
                        </Collapse>
                        <Collapse in={this.state.open2}>
        <div >
        <Container>
                        <AvForm  onValidSubmit={this.Validation}>
                        <Row>
                            
                            <Button  style={buttonStylex} type='disabled'>
                                      Feeder/ Rail
        
                                </Button>
                            </Row>
                            <Row>



                                <Col>
                                    <AvGroup>

                                        <AvField
                                            type="number"
                                            name="no_of_operators2"
                                            id="no_of_operators"
                                            placeholder="No of Operators"
                                            errorMessage="Field Required"
                                            value={this.state.no_of_operators2}
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
                                            name="no_of_apprentice2"
                                            id="no_of_apprentice"
                                            placeholder="No of Apprentice"
                                            errorMessage="Field Required"
                                            label="No of Apprentice"
                                            value={this.state.no_of_apprentice2}
                                            onChange={this.onChange}
                                            required
                                        />
                                    </AvGroup>

                                    </Col>
                                    <Col>
                                    <AvGroup >

                                        <AvField
                                            type="number"
                                            name="no_of_agency2"
                                            id="no_of_agency"
                                            placeholder="No of Agency"
                                            errorMessage="Field Required"
                                            value={this.state.no_of_agency2}
                                            onChange={this.onChange}
                                            label="No of Agency"
                                            required
                                        />
                                    </AvGroup>
                                </Col>
                               
                            </Row>
                            <div className="FormBody">
                            <Row>
                                <Col>

                                    <AvRadioGroup name="injury_free2" label="Is injury free day?"

                                        required errorMessage="Pick one!">
                                        <AvRadio label="Yes" value="Yes" checked={this.state.injury_free2 === 'Yes'} onChange={this.onChange} />
                                        <AvRadio label="No" value="No" checked={this.state.injury_free2 === 'No'} onChange={this.onChange} />

                                    </AvRadioGroup>
                                    {
                                        this.state.injury_free2 === 'Yes' ?
                                            <div>
                                                <AvField

                                                    name="reason_injury"

                                                    label="Reason for Injury"
                                                    placeholder="Reason"
                                                    value={this.state.reason_injury2}
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



                            
                         


                                <Button  style={buttonStyle} type='submit'>
                                    Proceed
    
                            </Button>
                         
                        </AvForm></Container>
                        </div>
                        </Collapse>
                    </Card.Body>
                </Card>
                {/* <div class="footer">
  <p>@fms2019</p>
</div> */}
            </div>


        );
    }
}


const buttonStyle = {
    margin: "10px 10px 10px 10px",
    color: "white",
    border: 0,
    
    backgroundColor: 'goldenrod'
};

const buttonStylex = {
    margin: "10px 10px 10px 10px",
    color: "white",
    border: "0 solid goldenrod",
    width:"100%",
    
    backgroundColor: 'black'
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
)(People)