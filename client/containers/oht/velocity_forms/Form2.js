// import React, { Component } from 'react';
// import { Col, Row, Table, Button, Modal } from 'react-bootstrap';
// import { AvForm, AvField } from 'availity-reactstrap-validation';
// import TableRow from './TableRow_form2';

// var i=4;
// var def_type;
// var def_note;

// class Form2 extends Component {
  
//   state = {
//     data: [
   
       
      
      
//     ]
//   };
  

//   toggleAddModal = () => {
//     this.setState(prevState => ({
//       addModal: !prevState.addModal,
//     }));
//   }

//   add = (event, {stop_time_type,stop_time, stop_time_desc}) => {
//     this.setState(prevState => {
//       // you shouldn't mutate, this is just an example.
      
//       var temp={};
//       temp['id']=prevState.data.length;
//       temp['stop_time_type']=stop_time_type;
//       temp['stop_time']=stop_time;
//       temp['stop_time_desc']=stop_time_desc;
//       prevState.data.push(temp)
//     //   prevState.data[id]['defect_type']=defect_type;
//     //   prevState.data[id]['defect_note']=defect_note;
//       console.log(this.state)
//       return {...prevState, addModal: false};
//     });
//   }

//   edit = (id, stop_time_type,stop_time, stop_time_desc) => {
//     this.setState(prevState => {
//       // you shouldn't mutate, this is just an example.
  
//       prevState.data[id]={}
//       prevState.data[id]['stop_time_type']=stop_time_type;
//       prevState.data[id]['stop_time']=stop_time;
//       prevState.data[id]['stop_time_desc']=stop_time_desc;

//       return prevState;
//     });
//   }

//   remove = (id) => {
//     this.setState(prevState => {
//       // you shouldn't mutate, this is just an example.
//       delete prevState.data[id];
//       return prevState;
//     })
//   }

//   checkId = (value) => {
//     return !this.state.data[value] || 'That Manufacturer ID already exists, please edit the existing row or pick another one.'
//   }

 

//   render() {

//     return (
//       <div style={{marginLeft:"40px", marginTop:'30px',  alignItems: "center" ,justifyContent: "center"}}>
//          <Row>
//           <Col>
//             <Button className="float-right" variant="dark"  color="dark" onClick={this.toggleAddModal}><span aria-hidden><b>&#43;</b></span></Button>
//           </Col>
//         </Row>
//         <br/>
        
//           <Row>
//           <Table striped bordered hover size="sm">
//             <thead>
//               <tr>
//                 <th>Stop Time Type</th>
//                 <th>Stop Time (mins)</th>
//                 <th>Stop Time Description</th>
//               </tr>
//             </thead>
           
//             <tbody>
//               {/* {Object.keys(this.state.data).map(function() {
//                 const row = this.state.data[key];
//                 return <TableRow key={key} id={key} {...row} edit={this.edit} remove={this.remove} />
//               })} */}
//                {this.state.data.map((data, index) => {
//                 const row = data;
//                 return <TableRow key={index} id={index} {...row} edit={this.edit} remove={this.remove} />
//               })}
//             </tbody>
//             {/* <tbody>
//               { const=Object.keys(this.state.data).["defect_type"] ;
//               {
//                 const row = this.state.data[key];
//                 return <TableRow key={key} id={key} {...row} edit={this.edit} remove={this.remove} />
//               })}
//             </tbody> */}
//           </Table>
        
//         </Row>
//         <Modal show={this.state.addModal} onHide={this.toggleAddModal}>
//           <AvForm  onValidSubmit={this.add}>
//           <Modal.Header toggle={this.toggleAddModal}>
//             Stop Time
//           </Modal.Header>
//           <Modal.Body>
            
//           {/* <AvField  name="id" value={Object.keys(this.state.data).length+1} hidden/> */}
//             <AvField type="select" name="stop_time_type" label="Stop Time Type" required  >
//           <option>Online</option>
//           <option>Offline</option>
//         </AvField>
//             <AvField label="Stop Time (mins)" name="stop_time" required />
//             <AvField label="Stop Time Description" name="stop_time_desc" required />
//           </Modal.Body>
//           <Modal.Footer>
//             <Button type="submit"onClick={this.toggleAddModal}>Save</Button>
          
//           </Modal.Footer>
//           </AvForm>
//         </Modal>
//       </div>
//     )
//   }
// }
// // function Table_Row(props) { console.log(props)
// //   const def_type=props.data.defect_type;
// //   const def_note=props.data.defect_note;
// //   var ret="";
// //   for(var i=0;i<def_type.length;i++)
// //   {
// //    ret+=JSON.stringify(<TableRow defect_type={def_type[i]} defect_note={def_note[i]}  edit={props.edit} remove={props.remove} />)
// //    console.log(ret)
// //   }
 
// //  return ret;
// //  //  document.getElementById('tbody').innerHTML=ret;
// //  }

// export default  Form2;
// // import React, { Component } from 'react';
// // import { Col, Row, Table, Button, Modal } from 'react-bootstrap';
// // import { AvForm, AvField } from 'availity-reactstrap-validation';
// // import TableRow from './TableRow_form1';
// // // import icon from './favicon.ico';
// // var i=4;
// // var def_type;
// // var def_note;
// // class Form1 extends Component {
  
// //   state = {
// //     data: [
// //       // {
// //       //   index_time:,
// //       //   defect_note: 'man1',
// //       // },
// //       // {
// //       //   defect_type:'New', 
// //       //   defect_note: 'man1',
// //       // }
       
      
      
// //     ]
// //   };
  

// //   toggleAddModal = () => {
// //     this.setState(prevState => ({
// //       addModal: !prevState.addModal,
// //     }));
// //   }

// //   add = (event, {index_time,target,actual,prob_desc,offender,delay}) => {
// //     this.setState(prevState => {
// //       // you shouldn't mutate, this is just an example.
      
// //       var temp={};
// //       temp['id']=prevState.data.length;
// //       temp['index_time']=index_time;
// //       temp['target']=target;
// //       temp['actual']=actual;
// //       temp['prob_desc']=prob_desc;
// //       temp['offender']=offender;
// //       temp['delay']=delay;
// //       prevState.data.push(temp)
// //     //   prevState.data[id]['defect_type']=defect_type;
// //     //   prevState.data[id]['defect_note']=defect_note;
// //       console.log(this.state)
// //       return {...prevState, addModal: false};
// //     });
// //   }

// //   edit = (id, index_time,target,actual,prob_desc,offender,delay) => {
// //     this.setState(prevState => {
// //       // you shouldn't mutate, this is just an example.
     
// //       prevState.data[id]={}
// //       prevState.data[id]['index_time']=index_time;
// //       prevState.data[id]['target']=target;
// //       prevState.data[id]['actual']=actual;
// //       prevState.data[id]['prob_desc']=prob_desc;
// //       prevState.data[id]['offender']=offender;
// //       prevState.data[id]['delay']=delay;

// //       return prevState;
// //     });
// //   }

// //   remove = (id) => {
// //     this.setState(prevState => {
// //       // you shouldn't mutate, this is just an example.
// //       delete prevState.data[id];
// //       return prevState;
// //     })
// //   }

// //   checkId = (value) => {
// //     return !this.state.data[value] || 'That Manufacturer ID already exists, please edit the existing row or pick another one.'
// //   }

 

// //   render() {

// //     return (
// //       <div style={{marginLeft:"40px", marginTop:'30px',  alignItems: "center" ,justifyContent: "center"}}>
// //         <Row>
// //           <Col>
// //             <Button className="float-right" variant="dark"  color="dark" onClick={this.toggleAddModal}><span aria-hidden><b>&#43;</b></span></Button>
// //           </Col>
// //         </Row>
// //         <br/>
        
// //         <Row>
       
// //           <Table striped bordered hover size="sm">
// //             <thead>
// //               <tr>
// //                 <th>Index</th>
// //                 <th>Index Time</th>
// //                 <th>Target (mins)</th>
// //                 <th>Actual (mins)</th>
// //                 <th>Problem Description</th>
// //                 <th>Offender</th>
// //                 <th>Delay (mins)</th>
// //               </tr>
// //             </thead>
           
// //             <tbody>
// //               {/* {Object.keys(this.state.data).map(function() {
// //                 const row = this.state.data[key];
// //                 return <TableRow key={key} id={key} {...row} edit={this.edit} remove={this.remove} />
// //               })} */}
// //                {this.state.data.map((data, index) => {
// //                 const row = data;
// //                 return <TableRow key={index} id={index} {...row} edit={this.edit} remove={this.remove} />
// //               })}
// //             </tbody>
// //             {/* <tbody>
// //               { const=Object.keys(this.state.data).["defect_type"] ;
// //               {
// //                 const row = this.state.data[key];
// //                 return <TableRow key={key} id={key} {...row} edit={this.edit} remove={this.remove} />
// //               })}
// //             </tbody> */}
// //           </Table>
        
// //         </Row>
// //         <Modal show={this.state.addModal} onHide={this.toggleAddModal}>
// //           <AvForm  onValidSubmit={this.add}>
// //           <Modal.Header toggle={this.toggleAddModal}>
// //             Index Performance
// //           </Modal.Header>
// //           <Modal.Body>
          
// //           <AvField
// //             label='Index Time'
// //             type="time"
// //             name="index_time"
// //             id="index_time"
            
// //             required
// //           />
  
      
// //             <AvField label="Target (mins)" name="target" required />
// //             <AvField label="Actual (mins)" name="actual" required />
// //             <AvField label="Problem Description" name="prob_desc" required />
// //             <AvField label="Offender" name="offender" required />
// //             <AvField label="Delay (mins)" name="delay" required />
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button type="submit"onClick={this.toggleAddModal}>Save</Button>
          
// //           </Modal.Footer>
// //           </AvForm>
// //         </Modal>
// //       </div>
// //     )
// //   }
// // }
// // // function Table_Row(props) { console.log(props)
// // //   const def_type=props.data.defect_type;
// // //   const def_note=props.data.defect_note;
// // //   var ret="";
// // //   for(var i=0;i<def_type.length;i++)
// // //   {
// // //    ret+=JSON.stringify(<TableRow defect_type={def_type[i]} defect_note={def_note[i]}  edit={props.edit} remove={props.remove} />)
// // //    console.log(ret)
// // //   }
 
// // //  return ret;
// // //  //  document.getElementById('tbody').innerHTML=ret;
// // //  }

// // export default Form1;
import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

import { BootstrapTable, TableHeaderColumn,DeleteButton } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import * as Form2Actions from '../../../actions/oht/velocity_forms_actions/form2'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_add_box } from "react-icons-kit/md/ic_add_box";
import { ic_delete } from "react-icons-kit/md/ic_delete";
import { parse } from 'querystring';

var i = 0;
const IconCnt = styled.div`
   color: #FFF;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;
const IconCnt_ = styled.div`
color: #FFF;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;
const selectRowProp = {
  mode: 'checkbox'
};

var stopTimeType = {"Offline":"Offline","Online":"Online"}
var stopTimeTypeArr = ["Offline","Online"]

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}


class Form2 extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
      
    }
    this.Lala = this.Lala.bind(this);
    this.onAfterDeleteRow = this.onAfterDeleteRow.bind(this);
    this.onAfterInsertRow = this.onAfterInsertRow.bind(this);
    this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
    
  }
  // componentDidMount() {
  //   // this.setState({ this.props.table.tableData })
  // }

  Lala() {
    // console.log(this.state)
    console.log(this.props);
    console.log(this.refs.table.getTableDataIgnorePaging());
  }
   
  options = {
    afterInsertRow: this.onAfterInsertRow, // A hook for after insert rows
    onDeleteRow: this.onAfterDeleteRow,
    props:this.props,
    
  } 
  cellEditProp ={
  // a hook for after saving cell
    props:this.props
  }
  handleDeleteButtonClick = (onClick) => {
  
    onClick();
  }



  createCustomInsertButton = (openModal) => {
    return (
      <Button className="float-right" outline style={{backgroundColor:"black",color:"white",fontWeight: "20",marginBottom:"20px",
      fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",borderColor:"grey",borderWidth:"2px"}} onClick={ openModal }> <IconCnt>
                       <Icon icon={ic_add_box} />
                    </IconCnt></Button>
    );
  }
  createCustomDeleteButton = (onBtnClick) => {
    return (
     
        // <Button type='button'className="float-righlot" outline style={{backgroundColor:"black",color:"white",fontWeight: "20",marginBottom:"20px",marginLeft:"1100px",
        // fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",borderColor:"grey",borderWidth:"2px"}} onClick={e => 
        //   this.handleDeleteButtonClick(onBtnClick)}> <IconCnt_>
        //                  <Icon icon={ic_delete} />
        //               </IconCnt_></Button>
                       <DeleteButton outline style={{backgroundColor:"black",color:"white",fontWeight: "20",marginBottom:"20px",
                       fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",borderColor:"grey",borderWidth:"2px"}}><IconCnt_>
                                        <Icon icon={ic_delete} />
                                    </IconCnt_></DeleteButton>
        // <button style={ { color: 'red' } } onClick={ onBtnClick }>Delete it!!!</button>
    );
    // If you want have more power to custom the child of DeleteButton,
    // you can do it like following
    // return (
    //   <DeleteButton
    //     btnContextual='btn-warning'
    //     className='my-custom-class'
    //     onClick={ () => this.handleDeleteButtonClick(onClick) }>
    //     { ... }
    //   </DeleteButton>
    // );
  }
 onAfterDeleteRow(rowKeys) {
  console.log(this)
  this.props.actions.deleteRow(rowKeys);
  
}


onAfterSaveCell(row, cellName, cellValue) {
  console.log(this)
  this.props.actions.editRow(row);
  

}

 onAfterInsertRow(row){
   console.log(this)
  this.props.actions.addRow(row);
  

}
formatTime(cell,row){
  console.log(cell.slice(3,5));
  var hour= parseInt(cell.slice(0,2));
  var mins=hour*60;
  mins=mins+parseInt(cell,3,5);
  return mins;
}
formatFloat(cell, row) {
  return parseFloat(cell);
}
  customNameField = (column, attr, editorClass, ignoreEditable) => {

    return (
    


        <input className={`${editorClass}`} {...attr} hidden type='text' name='id' value={i++} />


    );
  }

  render() {
    return (<div className="Another">
     
      <div style={{overflowX:"auto",borderRadius:"2" ,marginTop:"70px",marginLeft:"10px"}}>
      <BootstrapTable striped
        hover
        condensed 
        responsive 
        ref="table"
        data={this.props.table.tableData}
        deleteRow={true} 
        cellEdit={{mode: 'click',
        blurToSave: true,
        afterSaveCell: this.onAfterSaveCell
      }} 
      tableStyle={{
        boxShadow: "4",
       
        fontSize: "0.5cm",
      fontWeight: "20",
      fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
      }}
      headerStyle={ { fontSize: "0.5cm",
      borderRadius:"4px",
      border:"1px black",
      fontWeight: "20",
      fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"} }
        selectRow={selectRowProp} 
        options={{
          afterInsertRow: this.onAfterInsertRow, // A hook for after insert rows
          onDeleteRow: this.onAfterDeleteRow,
          insertBtn: this.createCustomInsertButton,
          deleteBtn:this.createCustomDeleteButton
        }} 
        insertRow={true} >
        <TableHeaderColumn  dataSort={true} customInsertEditor={{ getElement: this.customNameField }} hidden dataField='id' isKey='true' ></TableHeaderColumn>
        {/* <div style={{backgroundColor:"yellow",color:"white"}}> */}
        
        <TableHeaderColumn  dataSort={true} dataField='stop_time_type' editable={{ type: 'select', options: { values: stopTimeTypeArr } }} dataFormat={enumFormatter} filterFormatted={true} formatExtraData={stopTimeType}
          filter={{ type: 'SelectFilter', options: stopTimeType }}>Stop Time Type</TableHeaderColumn>
        <TableHeaderColumn filter={{ type: 'NumberFilter' ,numberComparators: [ '=', '>', '<','<=','>=','!=' ] }} dataFormat={ this.formatFloat } dataSort={true} dataField='stop_time'>Stop Time (mins)</TableHeaderColumn>
        
        <TableHeaderColumn filter={{ type: 'TextFilter' }} dataSort={true} dataField='stop_time_desc'>Stop Time Description</TableHeaderColumn>
        
       
      </BootstrapTable>
      </div>
      <Button style={{marginTop:"30px",marginLeft:"10px"}}onClick={this.Lala}>click me</Button>

    </div>
    );
  }
}
Form2.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
};
function mapStateToProps(state) {
  return {
    table: state.form2Reducer	
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Form2Actions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form2)
