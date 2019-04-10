import React, { Component } from 'react';
import './Fms.css'
import PropTypes from 'prop-types';
import * as HomeActions from '../../actions/fab/home'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, Row, Col,  Card } from 'react-bootstrap'
import { AvForm, AvInput,AvField,AvGroup} from 'availity-reactstrap-validation';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import * as CostActions from '../../actions/fab/cost'
import NavBar from "../../components/fab/NavBar";
import SweetAlert from 'sweetalert-react';

class Costpage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            rework: '',
            cost:''

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
        
        this.props.actions.saveCostValues(this.state.rework,this.state.cost);
        
        console.log(this.props)
        this.context.router.history.push("/jumbo");
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        // console.log(this.state);
    }


    render() {
        return (
            <div class="content">
              
            
            <div className="wrapper">
            <div >
            
           <Card className='Cardtop'>
                    <Card.Header className='CardHead_velocity' ><b>Cost Details</b></Card.Header>
                    <Card.Body className='CardBody_velocity' >
                    
                   

<div>
                        <AvForm className="FormBody" onValidSubmit={this.Validation}>

                            <Row>

                                <Col>
                                  
                                    <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="rework"
                                        
                                          label="Rework time(minutes)"
                                          value={this.state.rework}
                                              onChange={this.onChange}
                                          placeholder="enter rework time in minutes"
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                              
                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="cost"
                                        
                                          label="
                                          Rejection & Scrap Cost in Dollar($)"
                                          value={this.state.cost}
                                              onChange={this.onChange}
                                          placeholder="enter scrap cost in $"
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                              
                                  
                                
                                   
                                   
                                </Col>
                            </Row>
                           
                           <Button  style={buttonStyle} type="submit">Save and Submit</Button>
                         
                        </AvForm>
                       
                        </div>
                        
                    </Card.Body>
               
                    </Card>
                    {/* <SweetAlert title="Here's a message!" onConfirm={this.onConfirm} /> */}
            
            </div>
            
            </div>
            
            </div>
        );
    }
}

const buttonStyle = {
   
    color: "white",
    border: 0,
    backgroundColor: 'goldenrod',
    width:'100%'
};

Costpage.propTypes = {
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
      actions: bindActionCreators(CostActions, dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Costpage)