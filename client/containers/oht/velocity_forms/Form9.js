import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn,DeleteButton } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import * as Form9Actions from '../../../actions/oht/velocity_forms_actions/form9'
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

var rtsType = {"Select":"Select","usn":"usn"}
var rtsTypeArr = ["Select","usn"]

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}


class Form9 extends Component {
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
     
        
                       <DeleteButton outline style={{backgroundColor:"black",color:"white",fontWeight: "20",marginBottom:"20px",
                       fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",borderColor:"grey",borderWidth:"2px"}}><IconCnt_>
                                        <Icon icon={ic_delete} />
                                    </IconCnt_></DeleteButton>
  
    );

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
       
        
        <TableHeaderColumn  dataSort={true} dataField='rts' editable={{ type: 'select', options: { values: rtsTypeArr } }} dataFormat={enumFormatter} filterFormatted={true} formatExtraData={rtsType}
          filter={{ type: 'SelectFilter', options: rtsType }}>RTS</TableHeaderColumn>
        
        <TableHeaderColumn filter={{ type: 'DateFilter' }} editable={{ type: 'datetime-local'}} dataSort={true} dataField='rts_timestamp'>RTS Time stamp</TableHeaderColumn>
        
      
       
      </BootstrapTable>
      </div>
      <Button style={{marginTop:"30px",marginLeft:"10px"}}onClick={this.Lala}>click me</Button>

    </div>
    );
  }
}
Form9.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
};
function mapStateToProps(state) {
  return {
    table: state.form9Reducer	
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Form9Actions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form9)
