import React, { Component } from 'react';

import { Button, Row, Col, Container, Card } from 'react-bootstrap'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { AvForm,AvRadio,AvRadioGroup, Label,AvInput,AvField,AvGroup} from 'availity-reactstrap-validation';
// import Card from 'reactstrap/Card'
// import DatePicker from 'react-bootstrap-date-picker'
import DatePicker from "react-datepicker";
// import 'react-16-bootstrap-date-picker'
// var DatePicker = require("react-bootstrap-date-picker");
import PropTypes from 'prop-types';
import * as PeopleActions from '../../actions/oht/people'
import * as LoginActions from '../../actions/oht/login'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../../components/oht/NavBar";
class People extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.home)
        // this.props.unhide_action.hideAll();
        this.state = {


            no_of_operators: '',
            no_of_apprentice: '',
            no_of_agency: '',
            injury_free:'',
            reason_injury:''

        }
        this.Validation = this.Validation.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    componentWillMount() {
        console.log(this.props.home)
    }
    static contextTypes = {
        router: PropTypes.object
      }
    Validation(event,values){
        console.log(this.state.reason_injury)
        this.props.actions.savePeopleValues(this.state.no_of_operators,this.state.no_of_apprentice,this.state.no_of_agency,this.state.injury_free,this.state.reason_injury);
        // this.props.unhide_action.unhideAll();
        this.context.router.history.push("/ohtquality");
    }
    onChange(e){
        // console.log(e.target.no_of_operators);
        // console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
        
    }



    render() {
        return (
            <div>
            <NavBar/>
            <div >
            <Container responsive>
                <Card >
                    <Card.Header body inverse style={{ backgroundColor: '#FAB914' }}><b>People</b></Card.Header>
                    <Card.Body >

                        <AvForm onValidSubmit={this.Validation}>

                            <Row>
                                <Col>
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
                                <Row>
                                    <Col>
                                    {/* <b>Is injury free day?</b>
                                    <AvGroup check>
                                        <Label check>
                                            <AvField type="radio" name="injury"  />{' '}
                                            Yes
                                         </Label>
                                    </AvGroup >
                                    <AvGroup check>
                                        <Label check>
                                            <AvField type="radio" name="injury" value="No"  />No
                                         </Label>
                                    </AvGroup> */}
                                      <AvRadioGroup className="form-check-radio" name="injury_free" label="Is injury free day?"
                                    // value={this.state.injury_free}
                                    // onChange={this.onChange}
                                    required errorMessage="Pick one!">
          <AvRadio label="Yes" value="Yes"  checked={this.state.injury_free === 'Yes'} onChange={this.onChange}  />
          <AvRadio label="No" value="No" checked={this.state.injury_free==='No'} onChange={this.onChange} />
  
        </AvRadioGroup>
        {
            this.state.injury_free==='Yes'?
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
                                </Col>

                            </Row>



                           
                        <br/>
                        <div>  


                            <Button color="primary" type='submit'>
                                Proceed

                            </Button>
                        </div>
                      </AvForm>
                    </Card.Body>
                </Card>
                 </Container>
               </div>
               </div>

        );
    }
}

People.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string,
  };
  function mapStateToProps(state) {
    return {
      people: state.peopleOhtReducer,	
    
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(PeopleActions, dispatch),
    //   unhide_action: bindActionCreators(LoginActions, dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(People)