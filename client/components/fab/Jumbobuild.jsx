
import { Container, Row, Col, Button ,Image} from 'react-bootstrap'
import './compo.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { Component } from 'react';
class Jumbobuild extends Component{
    render(){
        return(
            <Jumbotron fluid>

  <Container>
    <h1>Velocity Information</h1>
    {/* <p>
      Frame PDI >> BHL >> BODY >> Build/Misses >> MPS Status >> Stop Time
    </p> */}
    <Row>
      <Col>
      <Button  className='rbutton' href='#'> Frame PDI</Button>

      </Col>
      <Col>
      <Button  className='rbutton' href='#'> BHL</Button>

      </Col>
      <Col>
      <Button  className='rbutton' href='#'> BODY</Button>

      </Col>
      <Col>
      <Button  className='rcbutton' href='#'> Build/ Misses</Button>

      </Col>
      <Col>
      <Button  className='rbutton' href='#'> MPS Status</Button>

      </Col>
      <Col>
      <Button  className='rbutton' href='#'> Stop Time</Button>

      </Col>
    </Row>
  </Container>
</Jumbotron>
);
}
}
export default Jumbobuild;