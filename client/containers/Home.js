import React, {Component}from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderTAB from '../containers/header';
import '../css/header.css';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import PropTypes from 'prop-types';
import '../css/Home.css';
import * as HomeActions from '../actions/home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*function validateForm(date,shift,supervisor) {
        
    if(date===0 && shift===0 && supervisor===0)
    {
        this.setState({ smShow: true });
      return false;
    }
    return true;
 
}*/
function validateForm(selectedDay,shift,supervisor) {
  const errors = [];
      if(selectedDay.length<=0)
      {
        errors.push("DATE !!!!");
      }
      if (shift.length<=0)
      {
          errors.push("Please select a shift");
          
      }

      if (supervisor.length<=0)
      {
          errors.push("Please select a supervisor");
          
      }
    
      return errors;
 }
 
class Home extends Component{
  constructor(props,context) {
      super(props, context);


      this.state = {
        open: true,
        selectedDay: "" || this.props.selectedDay,
        shift:"" || this.props.shift, 
        supervisor:"" || this.props.supervisor,
        errors:[],
        smShow: false,
        date:moment().format('YYYY-MM-DD'),
       
      };
       
    }
    
   

    handleSubmit = e => {
     
       this.props.actions.validateHomePageValues(this.state.selectedDay,this.state.shift,this.state.supervisor);
        
       const {selectedDay,shift,supervisor } = this.state;
    
        const errors = validateForm(selectedDay ,shift,supervisor);
        if (errors.length > 0) {
          this.setState({ errors });
          this.setState({ smShow: true });
          return;
        }
        else{this.setState({redirect:true});
      }
      e.preventDefault();
    
        // submit the data...
      }

      handleOnClick = () => {
              // some action...
              // then redirect
             
              this.setState({redirect: true});
            }
    
  render()
  {
      if (this.state.redirect) {
          return <Redirect to="/people"/>;
        }
        
    
      let smClose = () => this.setState({ smShow: false });
      
      const{open}=this.state;
      return(
        
        <div className="includeHeader">
        <HeaderTAB /> 
        
      
          <Card  className="htpage">
          <Card.Body >
            <>
          
          <Row>
         
          <Button className="welcome"
            onClick={() => this.setState({ open: !open })} 
            aria-controls="example-collapse-text"
            aria-expanded={open} position="relative"

            >
             Welcome to LPT Machining !!
          </Button>
           
          <Collapse in={this.state.open}>
            <div id="example-collapse-text">
  
            
                 <Form onSubmit={this.handleSubmit}>
                
                 <Container>
                        <Row className="row_header">
                            
                     
                                          <Col>
                                            <Form.Group controlId="Date-control">
                                              <Form.Label>Date</Form.Label>
                                              <Form.Control as="input" type="date"  value={this.state.selectedDay}  min="1990-01-01" max={this.state.date} onChange={evt => this.setState({ selectedDay: evt.target.value })}>
                                               
                                              </Form.Control>
                                            </Form.Group>
                                            </Col>
                                           
                                            <Col>
                                            <Form.Group controlId="Shift-control">
                                              <Form.Label>Shift</Form.Label>
                                              <Form.Control as="select" type="dropdown-button" value={this.state.shift} onChange={evt => this.setState({ shift: evt.target.value })}>
                                                <option >Select shift</option>
                                                <option>Shift 1</option>
                                                <option>Shift 2</option>
                                                <option>Shift 3</option>
                                              </Form.Control>
                                            </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="Supervisor-control">
                                                  <Form.Label>Supervisor</Form.Label>
                                                  <Form.Control as="select" type="dropdown-button" value={this.state.supervisor} onChange={evt => this.setState({ supervisor: evt.target.value })}>
                                                  <option >Select supervisor</option>
                                                    <option>Supervisor A</option>
                                                    <option>Supervisor B</option>
                                                    <option>Supervisor C</option>
                                                  </Form.Control>
                                                </Form.Group>
                                            </Col>
                                              
                                            <br></br>
                                            <pre></pre>
                                            </Row> 
                                          <Card.Footer>
                                           <Row>
                                             <Col>
                                              <Button className="proceedToQ"
                              
                                                  id="proceed"
                                                  type="submit"
                                                  onClick={()=>this.handleOnClick}>
                                                  Proceed
                                                  </Button> 
                                                  </Col>                          
                                           </Row></Card.Footer>
                                           
                                           <Modal
                                                size="sm"
                                                show={this.state.smShow}
                                                onHide={smClose}
                                                aria-labelledby="example-modal-sizes-title-sm"
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="example-modal-sizes-title-sm">
                                                    Error
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>All fields are needed !!!</Modal.Body>
                                             </Modal>
                                           
                                           
                                           
                                           
                                           
                                           </Container> 
                                          </Form>
                                           
                                   
                        
          </div>
      </Collapse>


      </Row></>
      </Card.Body>
                
</Card>
</div>
         
      
      );
  }
}



   

   
  
     

 
      
Home.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
  };
  
function mapStateToProps(state) {
    return {
     homecomp: state.homeReducer	
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
  







                                             


 

  













