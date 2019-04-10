import React, { Component } from 'react';
import './Fms.css'
import PropTypes from 'prop-types';
import * as HomeActions from '../../actions/fab/home'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, Row, Col,  Card,Image, ButtonGroup,Container, DropdownButton } from 'react-bootstrap'
import { AvForm, AvInput,AvField,AvGroup} from 'availity-reactstrap-validation';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../../components/fab/NavBar";
import * as FramePDIActions from '../../actions/fab/FramePDIaction'
import rotateRight from 'material-ui/svg-icons/image/rotate-right';
import Jumboframe from "../../components/fab/Jumboframe";

class FramePDI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plan:'0',
            backlog:'0',
            actual:'0',
            adherence:'0',
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
        
        this.props.actions.saveFramePDIValues(this.state.plan,this.state.backlog,this.state.actual,this.state.adherence);
        
        console.log(this.props)
        this.context.router.history.push("/bhlpage");
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        // console.log(this.state);
    }


    render() {
        return (
            <div className='bgclr'>
            <Jumboframe/>
            {/* <div className="d-flex flex-column">
  <ButtonGroup size="lg">
    <Button className='btnwide'>FramePDI</Button>
    <Button className='btnwidex'>BHL</Button>
    <Button className='btnwidex'>Backlog</Button>
  </ButtonGroup>

  
</div> */}
            <div className='bgclr'>
   
           {/* <Image className='frameimage' src="http://st.gde-fon.com/wallpapers_original/329389_bajkal_rassvet_rosa_trava_schaste_solnce_luchi_oze_4000x3000_www.Gde-Fon.com.jpg" fluid /> */}

            <div className="container">
            <div  >
            
           <Card className='Cardtop'>
                    <Card.Header className='CardHead_velocity' ><b>Frame PDI</b></Card.Header>
                    <Card.Body className='CardBody_velocity' >
                    
                   

<div>
                        <AvForm onValidSubmit={this.Validation}>

                            <Row>

                                <Col>
                                  
                                    <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="plan"
                                        
                                          label="Plan"
                                          value={this.state.plan}
                                              onChange={this.onChange}
                                          placeholder="enter plan value"
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                              </Col>
                              <Col>
                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="actual"
                                        
                                          label="Actual"
                                          value={this.state.actual}
                                              onChange={this.onChange}
                                          placeholder="enter actual value"
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                              </Col>
                              <Col>
                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="backlog"
                                        
                                          label="Backlog"
                                          value={this.state.backlog}
                                              onChange={this.onChange}
                                          placeholder="enter backlog value"
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                                  </Col>
                                  <Col>
                                  <AvGroup controlId="formGroupDate">
                                      
                                       
                                      <AvField
                                          type="number"
                                          name="adherence"
                                       
                                          label="Adherence %"
                                          value={this.state.adherence}
                                              onChange={this.onChange}
                                          placeholder="adherence%"
                                          errorMessage="Field Required"
                                          required
                                      />
                                  </AvGroup>
                                
                                   
                                   
                                </Col>
                            </Row>
                            <Button  style={buttonStylex} href='/qualitytable'> Prev</Button>

                           <Button  style={buttonStyle} type="submit">Next</Button>
                         
                        </AvForm>
                       
                        </div>
                        
                    </Card.Body>
               
                    </Card>
            
            </div>
            </div>
            </div>
            </div>
        );
    }
}

const buttonStyle = {
    
    color: "white",
    border: 0,
    
    float:'right',
    backgroundColor: 'goldenrod'
};
const buttonStylex = {
    
    color: "white",
    border: 0,
    
    float:'left',
    backgroundColor: 'goldenrod'
};


FramePDI.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string,
  };
  function mapStateToProps(state) {
    return {
     framepdi: state.FramePDIReducer
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(FramePDIActions, dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FramePDI)