import React, { Component } from 'react';
import './Fms.css'
import PropTypes from 'prop-types';
import * as BuildActions from '../../actions/fab/BuildActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, Row, Col,  Card, NavDropdown } from 'react-bootstrap'
import { AvForm, AvInput,AvField,AvGroup} from 'availity-reactstrap-validation';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../../components/fab/NavBar";
import Jumbobuild from "../../components/fab/Jumbobuild"
class Buildmissform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeder:'0',
            main:'0',
            total:'0',
            volume:'0'

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
   
    Validation(event, values){
      
        
        this.props.actions.saveBuildValues(this.state.feeder,
            this.state.main, 
            this.state.total,
            this.state.volume);
        
        console.log(this.props)
        this.context.router.history.push("/mpsstatus");
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        // console.log(this.state);
    }


    render() {
        return (
            <div>
              <Jumbobuild/>
            
            <div className="container">
            <div >
            
           <Card className='Cardtop'>
                    <Card.Header className='CardHead_velocity' ><b>Build / Misses</b></Card.Header>
                    <Card.Body className='CardBody_velocity' >
                    
                   

<div>
                        <AvForm className="FormBody" onValidSubmit={this.Validation}>

                            <Row>

                                <Col>
                                  
                                    <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="feeder"
                                        
                                          label="Misses feeder Line"
                                          value={this.state.feeder}
                                              onChange={this.onChange}
                                          placeholder="feeder line value"
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                              </Col>
                              <Col>
                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="main"
                                        
                                          label="Misses Main Line"
                                          value={this.state.main}
                                              onChange={this.onChange}
                                          placeholder="main line value"
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                              </Col>
                              <Col>
                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="total"
                                        
                                          label="Total misses"
                                          value={this.state.total}
                                              onChange={this.onChange}
                                          placeholder="total misses"
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                                  </Col><Col>
                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="volume"
                                       
                                          label="Volume"
                                          value={this.state.volume}
                                              onChange={this.onChange}
                                          placeholder="volume value"
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                                
                                   
                                   
                                </Col>
                            </Row>
                           
                            <NavDropdown.Divider />
                            <Button  style={buttonStylex} href='/bhlpage'> Prev</Button>

                           <Button  style={buttonSmallx} type="submit">Next</Button>
                         
                        </AvForm>
                       
                        </div>
                        
                    </Card.Body>
               
                    </Card>
            
            </div>
            </div>
            </div>
        );
    }
}

const buttonStylex = {
  
    color: "white",
    border: 0,
    float:'left',
    backgroundColor: 'goldenrod'
};
const buttonSmallx = {
   
      color: "white",
      border: 0,
    
      backgroundColor: 'goldenrod',
      display:'inline-block',
      float:'right'
  };
  
Buildmissform.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string,
  };
  function mapStateToProps(state) {
    return {
     build:state.BuildReducer
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(BuildActions, dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Buildmissform)