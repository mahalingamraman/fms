import React, {Component}from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import '../css/Cost_lptm.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderTAB from './header';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import * as CostActions from '../actions/cost_lptm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



function validateForm(reworkTime,
    rejectionScrapCost) {
    const errors = [];
        if(reworkTime<0 && 
            rejectionScrapCost<0)
        {
          errors.push("Enter Valid Number greater than 0");
        }
       
      
        return errors;
   }
 
   class Cost extends Component{
    constructor(props,context) {
        super(props, context);

 
        this.state = {
            open: true,
         reworkTime:0 || this.props.reworkTime,
         rejectionScrapCost:0 || this.props.rejectionScrapCost,
          errors:[],
          smShow: false,

         
        };
        
      }
      
     

      handleSubmit = e => {
        this.props.actions.validateCost(this.state.reworkTime,this.state.rejectionScrapCost);

          const { reworkTime,
            rejectionScrapCost } = this.state;
      
          const errors = validateForm(reworkTime,
            rejectionScrapCost);
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
            return <Redirect to="/home"/>;
          }
          
      
        let smClose = () => this.setState({ smShow: false });
        
        const{open}=this.state;
        return(
          
            <div>
            <HeaderTAB/>
            <div className="includeHeader">
            <h4>COST</h4>
             <Card className="costpage">
             
             
             <Card.Body>
             <>
             <Row className="rowHeader">
             <Button className="cost"
               onClick={() => this.setState({ open: !open })}
               aria-controls="example-collapse-text"
               aria-expanded={open}
               >
                Cost
             </Button></Row>
              
             <Collapse in={this.state.open}>
           <div id="example-collapse-text">
           <Form onSubmit={this.handleSubmit} className="formcost">
     
          
             <Container>
             <Row className="row_header">
                 <Col className="column_header">
                                                         
                                                  
                                                     <Row>
                                                                     <Col>
                                                                     <Form.Group controlId="reworkTime">
                                                                         <Form.Label>Rework time(in minutes)</Form.Label>
                                                                         <Form.Control as="input" type="number" value={this.state.reworkTime}  min="0" onChange={evt => this.setState({reworkTime: evt.target.value })}>
                                                                         
                                                                         </Form.Control>
                                                                     </Form.Group>
                                                                     </Col>
                                                     </Row>
                                                     <Row>
                                                     <Col>
                                                                     <Form.Group controlId="rejectionScrapCost">
                                                                         <Form.Label>Rejection & Scrap Cost in Dollar($)</Form.Label>
                                                                         <Form.Control as="input" type="number" value={this.state.rejectionScrapCost}  min="0" onChange={evt => this.setState({ rejectionScrapCost: evt.target.value })}>
                                                                         
                                                                         </Form.Control>
                                                                     </Form.Group>
                                                                     </Col>
                                                     </Row>
                 
                    </Col>
                 </Row>
                 <Card.Footer>
                 <Row>
                     <Col>
                     <Button  id="costsave" type="submit" className="pull-right"
                                                     onClick={()=>this.handleSubmit} >Save</Button>
                          
                     </Col>
     
                 </Row>
                 </Card.Footer>
                     <Modal 
                     size="sm"
                     show={this.state.smShow}
                     onHide={smClose}
                     aria-labelledby="example-modal-sizes-title-sm"
                     >
                     <Modal.Header closeButton>
                         <Modal.Title id="example-modal-sizes-title-sm" >
                         Error
                         </Modal.Title>
                     </Modal.Header>
                     <Modal.Body>Section Manager value is Important !!!</Modal.Body>
                     </Modal>
                 
                 </Container>
                 <br/>
                
               
                
         
            
              
            
            </Form>
            
         
         </div>
         </Collapse>
        
         </>
        
        
         </Card.Body>
                                           
             
           </Card>
           </div> 
           </div>
            
         );
     }}
/*dropdwn :
 <Col> 
                                                  <DropdownButton
                                                      drop={"down"}
                                                      variant="primary"
                                                      title={` Select Shift `}
                                                      id={`dropdown-button-drop-=down`}
                                                      key={"down"}
                                                     
                                                      
                                                  >
                                                      <Dropdown.Item value={"s1"} eventKey={this.state.shift}  onSelect={this.handleShiftChange}>Shift 1</Dropdown.Item>
                                                      <Dropdown.Item value={"s2"} eventKey={this.state.shift}  onSelect={this.handleShiftChange}>Shift 2</Dropdown.Item>
                                                      <Dropdown.Item value={"s3"} eventKey={this.state.shift} onSelect={this.handleShiftChange}>Shift 3</Dropdown.Item>
                                                  </DropdownButton>
                                                </Col> 
                                                <Col>  
                                                  <DropdownButton
                                                      drop={"down"}
                                                      variant="primary"
                                                      eventKey={this.state.supervisor}
                                                      title={` Select Supervisor `}
                                                      id={`dropdown-button-drop-=down`}
                                                      key={"down"}
                                                      onSelect={this.handleSupChange}
                                                     
                                                  >
                                                      <Dropdown.Item value={"sup1"} eventKey={"1"}  >Supervisor A</Dropdown.Item>
                                                      <Dropdown.Item value={"sup2"} eventKey={"2"}  >Supervisor B</Dropdown.Item>
                                                      <Dropdown.Item value={"sup3"} eventKey={"3"} >Supervisor C</Dropdown.Item>
                                                  </DropdownButton>
                                                  </Col>*/

                                                    Cost.propTypes = {
                                                    open: PropTypes.bool,
                                                    errors:PropTypes.array,
                                                    reworkTime:PropTypes.number,
                                                    rejectionScrapCost:PropTypes.number,
                                                    smShow:PropTypes.bool,
                                                  
                                                  };
                                                  function mapStateToProps(state) {
                                                    return {
                                                      costcomp: state.costReducer	
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
                                                  )(Cost)
                                             


 

  













