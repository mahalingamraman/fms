
import { Container, Row, Col, Button ,Image} from 'react-bootstrap'
import './compo.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { Component } from 'react';
class Jumbo extends Component{
    render(){
        return(
            <Jumbotron fluid>

  <Container>
    <h1>Data saved sucessfully!!</h1><p>you can logout now..</p>
    {/* <p>
      Frame PDI >> BHL >> BODY >> Build/Misses >> MPS Status >> Stop Time
    </p> */}
    {/* <Row>
      <Col>
      <Button  className='rcbutton' href='#'> Frame PDI</Button>

      </Col>
      <Col>
      <Button  className='rbutton' href='#'> BHL</Button>

      </Col>
      <Col>
      <Button  className='rbutton' href='#'> BODY</Button>

      </Col>
      <Col>
      <Button  className='rbutton' href='#'> Build/ Misses</Button>

      </Col>
      <Col>
      <Button  className='rbutton' href='#'> MPS Status</Button>

      </Col>
      <Col>
      <Button  className='rbutton' href='#'> Stop Time</Button>

      </Col>
    </Row> */}
  </Container>
</Jumbotron>
);
}
}
export default Jumbo;