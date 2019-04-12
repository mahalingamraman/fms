import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Card,Collapse,Row,Col,Button } from 'react-bootstrap';
import Form1 from "./velocity_forms/Form1"
import Form2 from "./velocity_forms/Form2"
import Form3 from "./velocity_forms/Form3"
import Form4 from "./velocity_forms/Form4"
import Form5 from "./velocity_forms/Form5"
import Form6 from "./velocity_forms/Form6"
import Form7 from "./velocity_forms/Form7"
import Form8 from "./velocity_forms/Form8"
import Form9 from "./velocity_forms/Form9"
import PropTypes from 'prop-types';
import * as VelocityActions from '../../actions/oht/velocity'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

 class Velocity extends React.Component {
    constructor(props) {
        super(props);
       
    }
      Prev = (e) => {
        console.log(e.target.value);
        var i=parseInt(e.target.value);
      
        this.props.actions.Prev(i);

      }
      Next = (e) => {
      
        console.log(e.target.value);
        var i=parseInt(e.target.value);
      
        this.props.actions.Next(i);

      }

  render() {

    return (
    //   <ListGroup>
    //     <ListGroupItem color="success">
        <div>
    
            <br/>
            <br/>
            <br/>
            
            <Row >
            <Col>
            
            <Button onClick={this.props.actions.expandAll} aria-controls=" card0 card1 card2 card3 card4 card5 card6 card7 card8"
          aria-expanded="true" variant="primary">Expand All</Button>
            </Col>
            <Col>
            </Col>
            <Button onClick={this.props.actions.collapseAll} aria-controls=" card0 card1 card2 card3 card4 card5 card6 card7 card8"
          aria-expanded="false"  variant="primary">Collapse All</Button>
           
            </Row>
           <br/>
           <br/> 
           <br/>
                         
          <Card>
          <Card.Header body inverse style={{ backgroundColor: '#FAB914' }} aria-controls="card0"
          aria-expanded={this.props.velocity.collapse[0]}  onClick={this.props.actions.toggle_1} ><b>Indexing Performance</b></Card.Header>
          <Collapse in={this.props.velocity.collapse[0]}>
          <div id="card0">
            <Card.Body>
            <Form1 />
            </Card.Body>
            <Card.Footer> 
            <Row >
            <Col>
            
            </Col>
            <Col>
            </Col>
            <Button value="0" onClick={this.Next} variant="primary">Next</Button>
           
            </Row>
            </Card.Footer>
            </div>
            </Collapse>
          </Card>
        {/* //   </ListGroupItem> */}
        {/* //   <ListGroupItem  color="success"> */}
        <Card>
        <Card.Header body inverse style={{ backgroundColor: '#FAB914' }} aria-controls="card1"
          aria-expanded={this.props.velocity.collapse[1]}  onClick={this.props.actions.toggle_2}><b>Stop Time</b></Card.Header>
        <Collapse in={this.props.velocity.collapse[1]}>
        <div id="card1">
          <Card.Body>
          <Form2/>
          </Card.Body>
          <Card.Footer> 
            <Row >
            <Col>
            <Button value="1"onClick={this.Prev} variant="primary">Previous</Button>
            </Col>
            <Col>
            </Col>
            <Button value="1" onClick={this.Next} variant="primary">Next</Button>
           
            </Row>
            </Card.Footer>
            </div>
          </Collapse>
        </Card>
      
        <Card>
        <Card.Header body inverse style={{ backgroundColor: '#FAB914' }} varia-controls="card2"
          aria-expanded={this.props.velocity.collapse[2]}  onClick={this.props.actions.toggle_3}><b>OHT / TOSNO MPS Status</b></Card.Header>
        <Collapse in={this.props.velocity.collapse[2]}>
        <div id="card2">
          <Card.Body>
         <Form3/>
          </Card.Body>
          <Card.Footer> 
            <Row >
            <Col>
            <Button value="2" onClick={this.Prev} variant="primary">Previous</Button>
            </Col>
            <Col>
            </Col>
            <Button value="2" onClick={this.Next} variant="primary">Next</Button>
           
            </Row>
            </Card.Footer>
            </div>
          </Collapse>
        </Card>
       
        <Card>
        <Card.Header body inverse style={{ backgroundColor: '#FAB914' }} aria-controls="card3"
          aria-expanded={this.props.velocity.collapse[3]}  onClick={this.props.actions.toggle_4}><b>SOL To FOL -Part I</b></Card.Header>
        <Collapse in={this.props.velocity.collapse[3]}>
        <div id="card3">
          <Card.Body>
          <Form4/>
          </Card.Body>
          <Card.Footer> 
            <Row >
            <Col>
            <Button value="3" onClick={this.Prev} variant="primary">Previous</Button>
            </Col>
            <Col>
            </Col>
            <Button value="3" onClick={this.Next} variant="primary">Next</Button>
           
            </Row>
            </Card.Footer>
            </div>
          </Collapse>
        </Card>

        <Card>
        <Card.Header body inverse style={{ backgroundColor: '#FAB914' }} aria-controls="card4"
          aria-expanded={this.props.velocity.collapse[4]}  onClick={this.props.actions.toggle_5}><b>SOL To FOL -Part II</b></Card.Header>
        <Collapse in={this.props.velocity.collapse[4]}>
          <div id="card4">
          <Card.Body>
          <Form5/>
          </Card.Body>
          <Card.Footer> 
            <Row >
            <Col>
            <Button value="4" onClick={this.Prev} variant="primary">Previous</Button>
            </Col>
            <Col>
            </Col>
            <Button value="4" onClick={this.Next} variant="primary">Next</Button>
           
            </Row>
            </Card.Footer>
            </div>
          </Collapse>
        </Card>

        <Card>
        <Card.Header body inverse style={{ backgroundColor: '#FAB914' }} aria-controls="card5"
          aria-expanded={this.props.velocity.collapse[5]}  onClick={this.props.actions.toggle_6}><b>Paint Touch Up</b></Card.Header>
        <Collapse in={this.props.velocity.collapse[5]}>
        <div id="card5">
          <Card.Body>
        <Form6></Form6>
          </Card.Body>
          <Card.Footer> 
            <Row >
            <Col>
            <Button value="5" onClick={this.Prev} variant="primary">Previous</Button>
            </Col>
            <Col>
            </Col>
            <Button value="5" onClick={this.Next} variant="primary">Next</Button>
           
            </Row>
            </Card.Footer>
            </div>
          </Collapse>
        </Card>

        <Card>
        <Card.Header body inverse style={{ backgroundColor: '#FAB914' }} aria-controls="card6"
          aria-expanded={this.props.velocity.collapse[6]}  onClick={this.props.actions.toggle_7}><b>Paint SOL To Paint FOL</b></Card.Header>
        <Collapse in={this.props.velocity.collapse[6]}>
        <div id="card6">
          <Card.Body>
          <Form7/>
          </Card.Body>
          <Card.Footer> 
            <Row >
            <Col>
            <Button value="6" onClick={this.Prev} variant="primary">Previous</Button>
            </Col>
            <Col>
            </Col>
            <Button value="6" onClick={this.Next} variant="primary">Next</Button>
           
            </Row>
            </Card.Footer>
            </div>
          </Collapse>
        </Card>

        <Card>
        <Card.Header body inverse style={{ backgroundColor: '#FAB914' }} aria-controls="card7"
          aria-expanded={this.props.velocity.collapse[7]} onClick={this.props.actions.toggle_8}><b>Paint FOL To RTS</b></Card.Header>
        <Collapse in={this.props.velocity.collapse[7]}>
        <div id="card7">
          <Card.Body>
        <Form8/>
          </Card.Body>
          <Card.Footer> 
            <Row >
            <Col>
            <Button value="7" onClick={this.Prev} variant="primary">Previous</Button>
            </Col>
            <Col>
            </Col>
            <Button value="7" onClick={this.Next} variant="primary">Next</Button>
           
            </Row>
            </Card.Footer>
            </div>
          </Collapse>
        </Card>

        <Card>
        <Card.Header body inverse style={{ backgroundColor: '#FAB914' }}    aria-controls="card8"
          aria-expanded={this.props.velocity.collapse[8]} onClick={this.props.actions.toggle_9}><b>RTS Shippment</b></Card.Header>
        <Collapse in={this.props.velocity.collapse[8]}>
        <div id="card8">
          <Card.Body>
          <Form9/>
          </Card.Body>
          <Card.Footer> 
            <Row >
            <Col>
            <Button value="8" onClick={this.Prev} variant="primary">Previous</Button>
            </Col>
            <Col>
            </Col>
         
           
            </Row>
            </Card.Footer>
            </div>
          </Collapse>
        </Card>
        
        {/* </ListGroupItem>
        <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
        <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
      </ListGroup> */}
      
      </div>
    );
  }
    }
Velocity.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
};
function mapStateToProps(state) {
  return {
    velocity: state.velocityOhtReducer,	
  
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(VelocityActions, dispatch),
    // unhide_action: bindActionCreators(LoginActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Velocity);
