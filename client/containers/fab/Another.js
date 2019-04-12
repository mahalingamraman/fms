import React, { Component } from 'react';
import { Button, Row, Col, Nav, Navbar, NavDropdown, FormControl, Form, Card } from 'react-bootstrap'
import DatePicker from "react-datepicker";


class Another extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return ( <div className="Another">
      <Card bg="warning" border="light" style={{
                    width: '75rem',
                    marginTop: "70px"
                }}>
                    <Card.Body >
                        <Card.Header >Welcome</Card.Header>
                        <Form>

                            <Row>
                                <Col>
                                    <Form.Group controlId="formGroupType">
                                        <Form.Label>Enter Type </Form.Label>
                                        <Form.Control as="select" placeholder="Enter Type">
                                            <option>Value Stream PQVC</option>
                                            <option>Plant PQVC</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formGroupFacility">
                                        <Form.Label>Facility</Form.Label>
                                        <Form.Control as="select" placeholder="Facility">
                                            <option>Planta 1</option>
                                            <option>Planta 2</option>
                                            <option>Planta 3</option>
                                            <option>Planta 4</option>
                                            <option>Planta 5</option>
                                            <option>Planta 4B - Harier</option>
                                            <option>Planta 3B, Mexico</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formGroupVStream">
                                        <Form.Label>Value Stream</Form.Label>
                                        <Form.Control as="select" placeholder="Value Stream">
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formGroupDate">
                                        <Form.Label>Date</Form.Label>
                                        <DatePicker 
                                            // selected={this.state.startDate}
                                            // onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>



                        </Form>
                        <Button variant="dark">Proceed</Button>
                    </Card.Body>
                </Card>
                <Card bg="warning" border="light" style={{
                    width: '75rem',
                    marginTop: "70px"
                }}>
                    <Card.Body >
                        <Card.Header >Welcome</Card.Header>
                        <Form>

                            <Row>
                                <Col>
                                    <Form.Group controlId="formGroupType">
                                        <Form.Label>Enter Type </Form.Label>
                                        <Form.Control as="select" placeholder="Enter Type">
                                            <option>Value Stream PQVC</option>
                                            <option>Plant PQVC</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formGroupFacility">
                                        <Form.Label>Facility</Form.Label>
                                        <Form.Control as="select" placeholder="Facility">
                                            <option>Planta 1</option>
                                            <option>Planta 2</option>
                                            <option>Planta 3</option>
                                            <option>Planta 4</option>
                                            <option>Planta 5</option>
                                            <option>Planta 4B - Harier</option>
                                            <option>Planta 3B, Mexico</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formGroupVStream">
                                        <Form.Label>Value Stream</Form.Label>
                                        <Form.Control as="select" placeholder="Value Stream">
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formGroupDate">
                                        <Form.Label>Date</Form.Label>
                                        <DatePicker 
                                            // selected={this.state.startDate}
                                            // onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>



                        </Form>
                        <Button variant="dark">Proceed</Button>
                    </Card.Body>
                </Card>
      </div>
    );
  }
}

export default Another;

// import React, { Component } from 'react';

// var React = require('react');
// var ReactPropTypes = React.PropTypes;
// var Accordion = require('react-bootstrap').Accordion;
// var Panel = require('react-bootstrap').Panel;    

// class Another extends Component {
// render() {
//     var open = 3;
//     return (
//       <Accordion>
//         <Panel header="Recommended Assignments" eventKey='1'>
//           Some Info here
//         </Panel>
//         <Panel header="Candidate Information" eventKey='2'>
//           More Info here
//         </Panel>
//         <Panel header="Contact Information" eventKey={open}>
//           Yet another Panel
//         </Panel>
//        </Accordion>
//     );
//   }
// }

// export default Another;