import React, { Component } from 'react';
import { Col, Row, Table, Button, Modal } from 'react-bootstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import TableRow from './TableRow';
import NavBar from "../../components/fab/NavBar";
import PropTypes from 'prop-types';
import * as QualityActions from '../../actions/fab/quality'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
var i=4;
var def_type;
var def_note;

class Quality extends Component {
  
  // state = {
    
  //   formValues:{
  //     defect_type:"",
  //     defect_note:""
  //   }
  // };
  

  toggleAddModal = () => {
    this.props.actions.toggleAddModal();
  }

  add = (event, {defect_type, defect_note}) => {
    this.props.actions.addRow(defect_type,defect_note);
    // this.setState(prevState => {
    //   // you shouldn't mutate, this is just an example.
      
      console.log(this.props)
      
    //   // var temp={};
    //   // temp['defect_type']=defect_type;
    //   // temp['defect_note']=defect_note;
    //   // prevState.data.push(temp)
    // //   prevState.data[id]['defect_type']=defect_type;
    // //   prevState.data[id]['defect_note']=defect_note;
    //   // console.log(this.state)
    //   return {...prevState, addModal: false};
    // });
  }

  edit = (id, defect_type,defect_note) => {
  this.props.actions.editRow(id,defect_type,defect_note);
  }

  remove = (id) => {
  this.props.actions.removeRow(id);
  }

  // checkId = (value) => {
  //   return !this.state.data[value] || 'That Manufacturer ID already exists, please edit the existing row or pick another one.'
  // }

 

  render() {

    return (
      <div>
 
      
      <div style={{marginLeft:"40px", marginTop:'30px',  alignItems: "center" ,justifyContent: "center"}}>
        <Row>
          <Col>
            <Button className="float-right" outline color="secondary"  color="secondary" onClick={this.toggleAddModal}><span aria-hidden><b>&#43;</b></span></Button>
          </Col>
        </Row>
        <Row>
       
          <Table  bordered hover size="sm">
            <thead  style={{ backgroundColor: '#FAB914' }}>
              <tr>
                <th>Defect Type</th>
                <th>Defect Notes</th>
              </tr>
            </thead>
           
            <tbody>
              {/* {Object.keys(this.state.data).map(function() {
                const row = this.state.data[key];
                return <TableRow key={key} id={key} {...row} edit={this.edit} remove={this.remove} />
              })} */}
               {this.props.quality.data.map((data, index) => {
                const row = data;
                return <TableRow key={index} id={index} {...row} edit={this.edit} remove={this.remove} />
              })}
            </tbody>
            {/* <tbody>
              { const=Object.keys(this.state.data).["defect_type"] ;
              {
                const row = this.state.data[key];
                return <TableRow key={key} id={key} {...row} edit={this.edit} remove={this.remove} />
              })}
            </tbody> */}
          </Table>
        
        </Row>
        <Modal show={this.props.quality.addModal} onHide={this.toggleAddModal}>
          <AvForm  onValidSubmit={this.add}>
          <Modal.Header toggle={this.toggleAddModal}>
            Add a new Defect
          </Modal.Header>
          <Modal.Body>
            
          {/* <AvField  name="id" value={Object.keys(this.state.data).length+1} hidden/> */}
            <AvField type="select" name="defect_type" label="Defect Type" required  >
          <option>Missed</option>
          <option>Found</option>
          <option>New</option>
          <option>Inline</option>
          <option>Override</option>
        </AvField>
            <AvField label="Defect Note" name="defect_note" required />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit"onClick={this.toggleAddModal}>Save</Button>
          
          </Modal.Footer>
          </AvForm>
        </Modal>
      </div>
      </div>
    )
  }
}
// function Table_Row(props) { console.log(props)
//   const def_type=props.data.defect_type;
//   const def_note=props.data.defect_note;
//   var ret="";
//   for(var i=0;i<def_type.length;i++)
//   {
//    ret+=JSON.stringify(<TableRow defect_type={def_type[i]} defect_note={def_note[i]}  edit={props.edit} remove={props.remove} />)
//    console.log(ret)
//   }
 
//  return ret;
//  //  document.getElementById('tbody').innerHTML=ret;
//  }

Quality.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
};
function mapStateToProps(state) {
  return {
    quality: state.qualityReducer,	
  
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(QualityActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quality)
