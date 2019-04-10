import React, { Component } from 'react';

import { Button, Row, Col, Container, Card,Tab,ListGroup,ListGroupItem } from 'react-bootstrap'
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
import styled from "styled-components";
import { Icon } from "react-icons-kit";

import { ic_edit } from "react-icons-kit/md/ic_edit";


// import Login from './Login'
// import Quality from './Quality';
// import Another from './Another';
// import Submit from './Submit'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../../components/oht/NavBar";
const IconCnt_ = styled.div`
color: #fff;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;
class People extends Component {
    constructor(props) {
        super(props);
        
        this.state = {


            no_of_operators: '',
            no_of_apprentice: '',
            no_of_agency: '',
            injury_free:'',
            reason_injury:''

        }
        this.Validation = this.Validation.bind(this);
        this.onChange=this.onChange.bind(this);
        this.lala=this.lala.bind(this);
    }

    componentDidMount() {

    }
    static contextTypes = {
        router: PropTypes.object
      }
    Validation(event,values){
        console.log(this.state.reason_injury)
        this.props.actions.savePeopleValues(this.state.no_of_operators,this.state.no_of_apprentice,this.state.no_of_agency,this.state.injury_free,this.state.reason_injury);
        // this.props.unhide_action.unhideAll();
        this.context.router.history.push("/quality");
    }
    onChange(e){
        // console.log(e.target.no_of_operators);
        // console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
        
    }
    lala(){
    console.log(this.props);
    }



    render() {
        return (
            <div>
            <NavBar/>
            <div >
            <Container responsive>
                <Card >
                    <Card.Header body inverse style={{ backgroundColor: '#FAB914' }}><b>Check your values before submitting!!</b></Card.Header>
                    <Card.Body >
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item action href="#home">
          Home
        </ListGroup.Item>
        <ListGroup.Item action href="#people">
          People
        </ListGroup.Item>
        <ListGroup.Item action href="#quality">
          Quality
        </ListGroup.Item>
        <ListGroup.Item action href="#velocity">
          Velocity
        </ListGroup.Item>
        <ListGroup.Item action href="#cost">
          Cost
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#home">
          {/* <Sonnet /> */}
          <ListGroup>
        <ListGroup.Item >
          <p>Date: {this.props.home.date}      <Button onClick={this.lala} style={{backgroundColor:"black", borderRadius:"4"}}><IconCnt_>
                                        <Icon icon={ic_edit} />
                                    </IconCnt_></Button></p>
          
        </ListGroup.Item>
        <ListGroup.Item action href="#shift">
        <p>Shift: {this.props.home.shift}</p>
          <Button onClick={this.lala}>Edit</Button>
        </ListGroup.Item>
        
      </ListGroup>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          {/* <Sonnet /> */}
          rfguheriuhn
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
                        
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
      people: state.peopleReducer,	
      home:state.homeReducer,

    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(PeopleActions, dispatch),
      unhide_action: bindActionCreators(LoginActions, dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(People)
 