import React, { Component } from 'react';
import { Button,Table } from 'react-bootstrap';
import { AvForm, AvInput,AvField } from 'availity-reactstrap-validation';

class TableRow_form1 extends Component {
  state = {};
  edit = () => {
    this.setState(prevState => ({
      editing: !prevState.editing,
    }));
  }

  save = (event, value) => {
    this.setState(prevState => ({
      editing: !prevState.editing,
    }));
    console.log(value)
    this.props.edit(this.props.id, value.index_time,value.target,value.actual,value.prob_desc,value.offender,value.delay);
  }

  remove = () => {
    this.props.remove(this.props.id);
  }
  render() {
    return (<>
      {this.state.editing
        ?
       
      <tr>
        <td colSpan="7">
          <AvForm onValidSubmit={this.save}>
            <Table striped bordered hover size="sm">
            
              <tr>
          <td></td>  
         
            
        
        <td>
        <AvField
            label='Index Time'
            type="time"
            name="index_time"
            id="index_time"
            defaultValue={this.props.index_time}
            required
          /></td>
  
      
  <td>  <AvField label="Target (mins)" name="target" defaultValue={this.props.target} required /></td>
  <td> <AvField label="Actual (mins)" name="actual" defaultValue={this.props.actual} required /></td> 
  <td> <AvField label="Problem Description" name="prob_desc" defaultValue={this.props.prob_desc} required /></td>
  <td> <AvField label="Offender" name="offender" defaultValue={this.props.offender} required /></td>
  <td> <AvField label="Delay (mins)" name="delay" defaultValue={this.props.delay} required /></td>
          
          
        
        
        
        <td><Button color="success" type='submit' >Save</Button></td>
        
        <td>
        <Button color="info" onClick={this.edit}> Cancel</Button></td>
        </tr>
       
        </Table>
        </AvForm>
        </td>
      </tr>
      
       
       :
      <tr>
      <td ></td> 
      <td>
      
        {this.props.index_time}
        </td>
        <td>
          {this.props.target}
        </td>
        <td>
          {this.props.actual}
        </td>
        <td>
          {this.props.prob_desc}
        </td>
        <td>
          {this.props.offender}
        </td>
        <td>
          {this.props.delay}
        </td>
        <td>
        <Button color="info" onClick={this.edit}> Edit</Button></td>
        <td><Button color="danger" onClick={this.remove}>Delete  </Button></td>
      </tr>}
      </>
     
    )
  }
}

export default TableRow_form1;
