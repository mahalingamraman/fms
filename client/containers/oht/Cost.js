import React, { Component } from 'react';


import { AvForm, AvField,AvGroup } from 'availity-reactstrap-validation';
import { Button,   Row, Col, Nav, Navbar, NavDropdown, FormControl, Input, FormGroup, Form, Card, Container } from 'react-bootstrap'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import Card from 'reactstrap/Card'
// import DatePicker from 'react-bootstrap-date-picker'
import DatePicker from "react-datepicker";
// import 'react-16-bootstrap-date-picker'
// var DatePicker = require("react-bootstrap-date-picker");
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../../components/oht/NavBar";

import * as CostActions from '../../actions/oht/cost'
import * as LoginActions from '../../actions/oht/login'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
class Cost extends Component {
    constructor(props) {
        super(props);
        this.state = {


            rework_time: '',
            rs_cost: '',
            

        }
        this.Validation = this.Validation.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {

    }
    static contextTypes = {
        router: PropTypes.object
      }
    Validation(event,values){
        this.props.actions.saveCostValues(this.state);
        this.context.router.history.push("/quality");
    }
    fieldValidate(value){
        console.log(value)
        if(value>0)
        return true;
        else
        return false;
    }
    onChange(e){
        this.setState({[e.target.value]:e.target.value});
    }




    render() {
        return (
            <div>
                <NavBar/>
            <div style={{marginLeft:"20px"}}>
            <Container>
                <Card className="card-user" 
                >
                    <Card.Header className="card-head" body inverse style={{ backgroundColor: '#FAB914' }}><b>People</b></Card.Header>
                    <Card.Body className="card-body">

                        <AvForm onValidSubmit={this.Validation}>

                            <Row>
                                <Col>
                                <Row>

                                    <Col>
                                        <AvGroup>
                                            
                                            <AvField
                                                type="number"
                                                name="rework_time"
                                                id="rework_time"
                                                label="Rework time (minutes)"
                                                placeholder="Enter Rework time (minutes)"
                                                value={this.state.rework_time}
                                                onChange={this.onChange}
                                                required
                                                
                                            />
                                        </AvGroup>
                                    </Col>
                                   
                                </Row>
                                <Row>
                                <Col>
                                        <AvGroup>
                                       
                                            <AvField
                                                type="number"
                                                name="rs_cost"
                                                id="rs_cost"
                                                label="Rejection & Scrap Cost in Dollar($)"
                                                placeholder="Enter Rejection & Scrap Cost in Dollar($)"
                                                value={this.state.rs_cost}
                                                onChange={this.onChange}
                                                // validate={this.fieldValidate}
                                                required
                                            />
                                        </AvGroup>
                                    </Col>
                                </Row>
                                </Col>

                            </Row>
                            <div>  


<Button color="primary" type='submit'
    >
    Save

</Button>
</div>



                        </AvForm>
                        <br/>
                      

                    </Card.Body>
                </Card>
                </Container>
               </div>
               </div>

        );
    }
}

Cost.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string,
  };
  function mapStateToProps(state) {
    return {
      cost: state.costReducer,	
    
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(CostActions, dispatch),
      unhide_action: bindActionCreators(LoginActions, dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cost)
