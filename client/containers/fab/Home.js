import React, { Component } from 'react';
import './Fms.css'

import PropTypes from 'prop-types';
import * as HomeActions from '../../actions/fab/home'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Button, Row, Col,  Card,Container } from 'react-bootstrap'
import { AvForm, AvInput,AvField,AvGroup} from 'availity-reactstrap-validation';
import {ResponsiveEmbed, Image} from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";

class Home extends Component {
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
        
        this.props.actions.saveHomeValues(this.state.date,this.state.shift);
        //  const { router } = this.context
        // const state1 = router.getState()
        // console.log(state1);
        console.log(this.props)
        
        this.context.router.history.push("/fabpeople");
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        // console.log(this.state);
    }


    render() {
        return (
            <div  >
                 {/* <Sidenav/> */}
        {/* <Sidenav/>
            <Caro></Caro> */}
            
         <Container>
             <Row>
                 <Col>
                
                 </Col>
             </Row>
             </Container>
             <div class="content" >
             <Container>
           <Card className='Cardtop   '>
                    <Card.Header className='CardHead ' ><b>Welcome to Fabrication!!</b></Card.Header>
                    <Card.Body className='CardBody ' >
                    <Image className='Welcomeimage' src="http://s7d2.scene7.com/is/image/Caterpillar/CM20170914-36505-08247" fluid />

             


                        <AvForm onValidSubmit={this.Validation}>

                            <Row>

                                <Col>
                                    <AvGroup controlId="formGroupDate">
                                      
                                       
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
                           
                           <Button  style={buttonStyle} type="submit">Proceed</Button>

                        </AvForm>
                       
                   
                        
                    </Card.Body>
               
                    </Card>
                    </Container></div>
                    {/* <Caro/> */}
            </div>
            
           
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px",
    color: "white",
    border: 0,
    backgroundColor: 'goldenrod',
    float:"right"
};

Home.propTypes = {
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
  )(Home)