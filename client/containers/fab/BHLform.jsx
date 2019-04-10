import React, { Component } from 'react';
import './Fms.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, Row, Col,  Card, Container, NavDropdown } from 'react-bootstrap'
import { AvForm, AvInput,AvField,AvGroup} from 'availity-reactstrap-validation';
import "react-datepicker/dist/react-datepicker.css";
import * as bhlaction from '../../actions/fab/bhlaction'
import Jumbobhl from "../../components/fab/Jumbobhl";

class BHLform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frame_fit_up:'0',
            lift_arm_welding:'0',
            frame_robot:'0',
            frame:'0',
            boom:'0',
            liftarm:'0',
            fplan:'0',
            factual:'0',
            fbacklog:'0',
            lplan:'0',
            lactual:'0',
            lbacklog:'0',
            bplan:'0',
            bactual:'0',
            bbacklog:'0',
            fremark:'',
            lremark:'',
            weldremark:''
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
        
        this.props.actions.saveBHLValues(
            this.state.frame_fit_up,this.state.lift_arm_welding,this.state.frame_robot,
            this.state.frame,this.state.boom,this.state.liftarm,this.state.fplan,
            this.state.factual,this.state.fbacklog,this.state.lplan,this.state.lactual,
            this.state.lbacklog,this.state.bplan,this.state.bactual,this.state.bbacklog);
        
        console.log(this.props)
        this.context.router.history.push("/buildmiss");
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        // console.log(this.state);
    }


    render() {
        return (
            <div>
              
            <Jumbobhl/>
            <div className="container">
            <div >
            
           <Card className='Cardtop'>
                    <Card.Header className='Bhlhead' >BHL Information</Card.Header>
                    <Card.Body  >
                    
                   

<div >
                        <AvForm onValidSubmit={this.Validation}>
                        <Container>
                            <Row>

                                <Col>
                                  
                                    <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="frame_fit_up"
                                        
                                          label="Frame Fit Up"
                                          value={this.state.frame_fit_up}
                                              onChange={this.onChange}
                                         
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="textarea"
                                          name="fremark"
                                        
                                          label="Remark"
                                          value={this.state.fremark}
                                              onChange={this.onChange}
                                         
                                          errorMessage="Field Required"
                                        
                                      />
                                  </AvGroup>
                                  </Col>
                                  <Col>
                              
                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="lift_arm_welding"
                                        
                                          label="Lift Arm Welding"
                                          value={this.state.lift_arm_welding}
                                              onChange={this.onChange}
                                         
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="textarea"
                                          name="lremark"
                                        
                                          label="Remark"
                                          value={this.state.lremark}
                                              onChange={this.onChange}
                                         
                                          errorMessage="Field Required"
                                        
                                      />
                                  </AvGroup>
                              </Col>
                              <Col>
                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="frame_robot"
                                        
                                          label="FrameRobot Welding"
                                          value={this.state.frame_robot}
                                              onChange={this.onChange}
                                        
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="textarea"
                                          name="weldremark"
                                        
                                          label="Remark"
                                          value={this.state.date}
                                              onChange={this.onChange}
                                         
                                          errorMessage="Field Required"
                                         
                                      />
                                  </AvGroup>
                                 
                                
                                   
                                   
                                </Col>
                                
                            </Row>
                            </Container>
                           
                           <Button  style={buttonStyle} ><b>Cleaning and PayOff</b></Button>
                           <Container>
                               <Row>
                               <Col>
                               <Button  style={buttonSmall} >Frame</Button>

                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="text"
                                          name="frame"
                                        
                                          label="Frame "
                                          value={this.state.frame}
                                              onChange={this.onChange}
                                        
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="text"
                                          name="fplan"
                                        
                                          label="Plan(MTD)"
                                          value={this.state.fplan}
                                              onChange={this.onChange}
                                        
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="text"
                                          name="factual"
                                        
                                          label="Actual(MTD)"
                                          value={this.state.factual}
                                              onChange={this.onChange}
                                         
                                          errorMessage="Field Required"
                                          required
                                      />
                                      <AvField
                                          type="text"
                                          name="fbacklog"
                                        
                                          label="Backlog"
                                          value={this.state.fbacklog}
                                              onChange={this.onChange}
                                         placeholder='as on date'
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                                 
                                
                                   
                                   
                                </Col>
                                <Col>
                                <Button  style={buttonSmall} >Lift Arm</Button>

                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="text"
                                          name="liftarm"
                                        
                                          label="Lift Arm "
                                          value={this.state.liftarm}
                                              onChange={this.onChange}
                                        
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="text"
                                          name="lplan"
                                        
                                          label="Plan(MTD)"
                                          value={this.state.lplan}
                                              onChange={this.onChange}
                                        
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="text"
                                          name="lactual"
                                        
                                          label="Actual(MTD)"
                                          value={this.state.lactual}
                                              onChange={this.onChange}
                                         
                                          errorMessage="Field Required"
                                          required
                                      />
                                      <AvField
                                          type="text"
                                          name="lbacklog"
                                        
                                          label="Backlog"
                                          value={this.state.lbacklog}
                                              onChange={this.onChange}
                                         placeholder='as on date'
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                                 
                                
                                   
                                   
                                </Col>
                                <Col>
                                <Button  style={buttonSmall} >Boom</Button>

                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="text"
                                          name="boom"
                                        
                                          label="Boom "
                                          value={this.state.boom}
                                              onChange={this.onChange}
                                        
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="text"
                                          name="bplan"
                                        
                                          label="Plan(MTD)"
                                          value={this.state.bplan}
                                              onChange={this.onChange}
                                        
                                          errorMessage="Field Required"
                                          required
                                      />
                                       <AvField
                                          type="text"
                                          name="bactual"
                                        
                                          label="Actual(MTD)"
                                          value={this.state.bactual}
                                              onChange={this.onChange}
                                         
                                          errorMessage="Field Required"
                                          required
                                      />
                                      <AvField
                                          type="text"
                                          name="bbacklog"
                                        
                                          label="Backlog"
                                          value={this.state.bbacklog}
                                              onChange={this.onChange}
                                         placeholder='as on date'
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                                 
                                
                                   
                                   
                                </Col>
                                
                               </Row>
                           </Container>
                           <NavDropdown.Divider />
                           <Button  style={buttonStylex} href='/framepdi'> Prev</Button>

                           <Button  style={buttonSmallx} type="submit">Next </Button>


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

const buttonStyle = {
   fontweight:'20%',
    color: "black",
    border: 0,
    width:'100%',
    backgroundColor: 'goldenrod'
};

const buttonStylex = {
    float:'left',
    width:'20%',
    backgroundColor:'goldenrod',
    border:'none'
 };
const buttonSmall = {
  width:"100%",
    color: "white",
    border: 0,
    marginTop: '10px',
    marginBottom: '15px',
    backgroundColor: 'black'
};
const buttonSmallx = {
    float:'right',
    width:'20%',
    backgroundColor:'goldenrod',
    border:'none'
  };
  




BHLform.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string,
  };
  function mapStateToProps(state) {
    return {
     bhlform:state.BHLReducer
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(bhlaction, dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BHLform)