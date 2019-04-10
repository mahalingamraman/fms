import React, { Component } from 'react';
import './Fms.css'
import NavBar from "../../components/fab/NavBar";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button, Row, Col,  Card } from 'react-bootstrap'

const qualityType = [ {
    value: 'Missed',
    text: 'Missed'
  }, {
    value: 'Found',
    text: 'Found'
  }, {
    value: 'Inline',
    text: 'Inline'
  }, {
    value: 'New',
    text: 'New'
  } ];
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
    
      }
    routeChange() {
        let path = '/framepdi';
        this.props.history.push(path);
      }
    render() {
      const selectRow = {
        mode: 'checkbox',
        bgColor: 'goldenrod'
      };
  
      const cellEdit = {
        mode: 'click',
        blurToSave: true
      };
      const insertRow={
        bgColor: 'goldenrod'
      };
      
var products = [{
    id: '',
    name: "",
    price: ''

}];

  
      return (
       <div class="content">
          <div className="TableBody">
           <Card >
                    <Card.Header className='TableCardHead' ><b>Quality Informations</b></Card.Header>
                    <Card.Body >
       <BootstrapTable 
          selectRow={ selectRow }
          cellEdit={ cellEdit }
          insertRow={insertRow} deleteRow >
          <TableHeaderColumn  row='0' dataField='id' isKey>ID</TableHeaderColumn>
          <TableHeaderColumn  editable={ { type: 'select', options: { values: qualityType } } } dataField='DefectType' filter={ { type: 'TextFilter', delay: 1000 }} dataSort>Defect Type</TableHeaderColumn>

           <TableHeaderColumn dataField='Defect Notes' filter={ { type: 'TextFilter', delay: 1000 }} dataSort>Defect Notes</TableHeaderColumn>
          
        </BootstrapTable>
        </Card.Body>
        
        
        </Card>
        <Button color="primary" style={buttonStyle} onClick={this.routeChange}>
                                    Next >>
    
                            </Button>
      </div>
      </div>
      );
    }
  }
  const buttonStyle = {
    margin: "10px 10px 10px 10px",
    color: "white",
    border: 0,
    float:'right',
    marginLeft:'20px',
    marginRight:'20px',
    backgroundColor: 'goldenrod'
};

  export default Table;