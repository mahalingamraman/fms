

import React, { Component } from 'react';

import PropTypes from 'prop-types';
import * as HomeActions from '../../../actions/fab/home'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Button,Container, Row, Col,  Card } from 'react-bootstrap'
import { AvForm, AvInput,AvField,AvGroup} from 'availity-reactstrap-validation';
// import Card from 'reactstrap/Card'
// import DatePicker from 'react-bootstrap-date-picker'
import DatePicker from "react-datepicker";
// import 'react-16-bootstrap-date-picker'
// var DatePicker = require("react-bootstrap-date-picker");
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

class Form3 extends Component {
    constructor(props) {
        super(props);
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
        
        this.props.actions.saveForm3Values(this.state.date,this.state.shift);
        //  const { router } = this.context
        // const state1 = router.getState()
        // console.log(state1);
        
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        // console.log(this.state);
    }


    render() {
        return (
            <div>
          
            <div style={{marginLeft:"20px"}}>
            <AvForm onValidSubmit={this.Validation}>
            <Container>
  <Row>
     <Col><AvField type="number"  name="sol_month_plan" label="SOL Month Plan"  required  /></Col>
    <Col><AvField type="number"  name="sol_mtd_plan" label="SOL MTD Plan"  required  /></Col>
    <Col><AvField type="number"  name="sol_actual" label="SOL Actual"  required  /></Col>
  </Row>
  <Row>
  <Col><AvField type="number"  name="fol_month_plan" label="FOL Month Plan"  required  /></Col>
  <Col><AvField type="number"  name="fol_mtd_plan" label="FOL MTD Plan"  required  /></Col>
  <Col><AvField type="number"  name="fol_actual" label="FOL Actual"  required  /></Col>
  </Row>
  <Row>
  <Col><AvField type="number"  name="tonso_month_plan" label="TOSNO Month Plan"  required  /></Col>
  <Col><AvField type="number"  name="tonso_mtd_plan" label="TOSNO MTD Plan"  required  /></Col>
  <Col><AvField type="number"  name="tonso_actual" label="TOSNO Actual"  required  /></Col>
  </Row>
  <br/>
  <br/>
  <Row>
      <Col>
      <Button type="submit" >Save</Button>
      </Col>
  </Row>
</Container>
           
</AvForm>
            </div>
            </div>

        );
    }
}

Form3.propTypes = {
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
      actions: bindActionCreators(HomeActions, dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form3)