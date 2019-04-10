import React, { Component } from 'react';
import { Button ,Container} from 'react-bootstrap'
import NavBar from "../../components/oht/NavBar";
import { BootstrapTable, TableHeaderColumn ,DeleteButton} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import * as QualityActions from '../../actions/oht/quality'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_add_box } from "react-icons-kit/md/ic_add_box";
import { ic_delete } from "react-icons-kit/md/ic_delete";
import * as LoginActions from '../../actions/oht/login'
var i = 0;
const IconCnt = styled.div`
   color: #6a56a5;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;
const IconCnt_ = styled.div`
color: #6a56a5;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;
const selectRowProp = {
  mode: 'checkbox'
};

var defectType = {"Missed":"Missed","Found":"Found","New":"New","Inline":"Inline","Override":"Override"}
var defectTypeArr = ["Missed","Found","New","Inline","Override"]

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}


class Quality extends Component {
  constructor(props) {
    
    super(props);
    // this.props.unhide_action.unhideAll();
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
  // // createCustomDeleteButton = (onClick) => {
  // //   return (
     
  // //       <Button className="float-right" outline style={{backgroundColor:"black",color:"white",fontWeight: "20",marginBottom:"20px",marginLeft:"1100px",
  // //       fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",borderColor:"grey",borderWidth:"2px"}} onClick={ e => this.handleDeleteButtonClick(onClick) }> <IconCnt_>
  // //                        <Icon icon={ic_delete} />
  // //                     </IconCnt_></Button>
  // //   );
  //   // If you want have more power to custom the child of DeleteButton,
  //   // you can do it like following
  //   // return (
  //   //   <DeleteButton
  //   //     btnContextual='btn-warning'
  //   //     className='my-custom-class'
  //   //     onClick={ () => this.handleDeleteButtonClick(onClick) }>
  //   //     { ... }
  //   //   </DeleteButton>
  //   // );
  // }
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

  customNameField = (column, attr, editorClass, ignoreEditable) => {

    return (
      


        <input className={`${editorClass}`} {...attr} hidden type='text' name='id' value={i++} />

     
    );
  }

  render() {
    return (<div className="Quality">
      <NavBar />

      <div style={{overflowX:"auto"}}>
      <Container responsive>
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
        borderRadius:"4px",
        border:"1px black",
        fontSize: "0.5cm",
      fontWeight: "20",
      fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
      }}
      headerStyle={ { backgroundColor:"#FAB914",color:"black" ,fontSize: "0.5cm",
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
        
        <TableHeaderColumn  dataSort={true} dataField='price' editable={{ type: 'select', options: { values: defectTypeArr } }} dataFormat={enumFormatter} filterFormatted={true} formatExtraData={defectType}
          filter={{ type: 'SelectFilter', options: defectType }}>DEFECT TYPE</TableHeaderColumn>
        <TableHeaderColumn filter={{ type: 'TextFilter' }} dataSort={true} dataField='name'>DEFECT NOTE</TableHeaderColumn>
        {/* </div> */}
      </BootstrapTable>
      </Container>
      </div>
      {/* <Button style={{marginTop:"30px",marginLeft:"10px"}}onClick={this.Lala}>click me</Button> */}

    </div>
    );
  }
}
Quality.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
};
function mapStateToProps(state) {
  return {
    table: state.qualityReducer	
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(QualityActions, dispatch),
    unhide_action: bindActionCreators(LoginActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quality)
