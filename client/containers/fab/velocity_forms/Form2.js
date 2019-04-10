import React, { Component } from 'react';
import { Col, Row, Table, Button, Modal } from 'react-bootstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import TableRow from './TableRow_form2';

var i=4;
var def_type;
var def_note;

class Form2 extends Component {
  
  state = {
    data: [
   
       
      
      
    ]
  };
  

  toggleAddModal = () => {
    this.setState(prevState => ({
      addModal: !prevState.addModal,
    }));
  }

  add = (event, {stop_time_type,stop_time, stop_time_desc}) => {
    this.setState(prevState => {
      // you shouldn't mutate, this is just an example.
      
      var temp={};
      temp['id']=prevState.data.length;
      temp['stop_time_type']=stop_time_type;
      temp['stop_time']=stop_time;
      temp['stop_time_desc']=stop_time_desc;
      prevState.data.push(temp)
    //   prevState.data[id]['defect_type']=defect_type;
    //   prevState.data[id]['defect_note']=defect_note;
      console.log(this.state)
      return {...prevState, addModal: false};
    });
  }

  edit = (id, stop_time_type,stop_time, stop_time_desc) => {
    this.setState(prevState => {
      // you shouldn't mutate, this is just an example.
  
      prevState.data[id]={}
      prevState.data[id]['stop_time_type']=stop_time_type;
      prevState.data[id]['stop_time']=stop_time;
      prevState.data[id]['stop_time_desc']=stop_time_desc;

      return prevState;
    });
  }

  remove = (id) => {
    this.setState(prevState => {
      // you shouldn't mutate, this is just an example.
      delete prevState.data[id];
      return prevState;
    })
  }

  checkId = (value) => {
    return !this.state.data[value] || 'That Manufacturer ID already exists, please edit the existing row or pick another one.'
  }

 

  render() {

    return (
      <div style={{marginLeft:"40px", marginTop:'30px',  alignItems: "center" ,justifyContent: "center"}}>
         <Row>
          <Col>
            <Button className="float-right" variant="dark"  color="dark" onClick={this.toggleAddModal}><span aria-hidden><b>&#43;</b></span></Button>
          </Col>
        </Row>
        <br/>
        
          <Row>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Stop Time Type</th>
                <th>Stop Time (mins)</th>
                <th>Stop Time Description</th>
              </tr>
            </thead>
           
            <tbody>
              {/* {Object.keys(this.state.data).map(function() {
                const row = this.state.data[key];
                return <TableRow key={key} id={key} {...row} edit={this.edit} remove={this.remove} />
              })} */}
               {this.state.data.map((data, index) => {
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
        <Modal show={this.state.addModal} onHide={this.toggleAddModal}>
          <AvForm  onValidSubmit={this.add}>
          <Modal.Header toggle={this.toggleAddModal}>
            Stop Time
          </Modal.Header>
          <Modal.Body>
            
          {/* <AvField  name="id" value={Object.keys(this.state.data).length+1} hidden/> */}
            <AvField type="select" name="stop_time_type" label="Stop Time Type" required  >
          <option>Online</option>
          <option>Offline</option>
        </AvField>
            <AvField label="Stop Time (mins)" name="stop_time" required />
            <AvField label="Stop Time Description" name="stop_time_desc" required />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit"onClick={this.toggleAddModal}>Save</Button>
          
          </Modal.Footer>
          </AvForm>
        </Modal>
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

export default  Form2;
