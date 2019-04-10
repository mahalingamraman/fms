import React, { Component } from 'react';
import { Col, Row, Table, Button, Modal } from 'react-bootstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import TableRow from './TableRow_form1';
// import icon from './favicon.ico';
var i=4;
var def_type;
var def_note;
class Form1 extends Component {
  
  state = {
    data: [
      // {
      //   index_time:,
      //   defect_note: 'man1',
      // },
      // {
      //   defect_type:'New', 
      //   defect_note: 'man1',
      // }
       
      
      
    ]
  };
  

  toggleAddModal = () => {
    this.setState(prevState => ({
      addModal: !prevState.addModal,
    }));
  }

  add = (event, {index_time,target,actual,prob_desc,offender,delay}) => {
    this.setState(prevState => {
      // you shouldn't mutate, this is just an example.
      
      var temp={};
      temp['id']=prevState.data.length;
      temp['index_time']=index_time;
      temp['target']=target;
      temp['actual']=actual;
      temp['prob_desc']=prob_desc;
      temp['offender']=offender;
      temp['delay']=delay;
      prevState.data.push(temp)
    //   prevState.data[id]['defect_type']=defect_type;
    //   prevState.data[id]['defect_note']=defect_note;
      console.log(this.state)
      return {...prevState, addModal: false};
    });
  }

  edit = (id, index_time,target,actual,prob_desc,offender,delay) => {
    this.setState(prevState => {
      // you shouldn't mutate, this is just an example.
     
      prevState.data[id]={}
      prevState.data[id]['index_time']=index_time;
      prevState.data[id]['target']=target;
      prevState.data[id]['actual']=actual;
      prevState.data[id]['prob_desc']=prob_desc;
      prevState.data[id]['offender']=offender;
      prevState.data[id]['delay']=delay;

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
                <th>Index</th>
                <th>Index Time</th>
                <th>Target (mins)</th>
                <th>Actual (mins)</th>
                <th>Problem Description</th>
                <th>Offender</th>
                <th>Delay (mins)</th>
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
            Index Performance
          </Modal.Header>
          <Modal.Body>
          
          <AvField
            label='Index Time'
            type="time"
            name="index_time"
            id="index_time"
            
            required
          />
  
      
            <AvField label="Target (mins)" name="target" required />
            <AvField label="Actual (mins)" name="actual" required />
            <AvField label="Problem Description" name="prob_desc" required />
            <AvField label="Offender" name="offender" required />
            <AvField label="Delay (mins)" name="delay" required />
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

export default Form1;
