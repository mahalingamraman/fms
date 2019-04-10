import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
class Caro extends Component{
    render(){
        return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://pbs.twimg.com/media/C5Dvda3UoAEFRed.jpg:large'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to Facility Monitoring system</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s3-prod.chicagobusiness.com/330118474_1-5.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>CAT </h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.thenorthernecho.co.uk/resources/images/3549680/"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>CAT</h3>
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>);
}
}
export default Caro;