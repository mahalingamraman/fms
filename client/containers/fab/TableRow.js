import React, { Component } from 'react';
import { Button,Table } from 'react-bootstrap';
import { AvForm, AvInput,AvField } from 'availity-reactstrap-validation';

class TableRow extends Component {
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
    this.props.edit(this.props.id, value.defect_type,value.defect_note);
  }

  remove = () => {
    this.props.remove(this.props.id);
  }
  render() {
    return (<>
      {this.state.editing
        ?
       
      <tr>
        <td colSpan="2">
          <AvForm onValidSubmit={this.save}>
            <Table striped bordered hover size="sm">
            
              <tr>
         {/* <td hidden>{this.props.id}</td>  */}
         
            
        <td>
          
           
               <AvField type="select" id="defect_type"  name="defect_type" label="Defect Type" defaultValue={this.props.defect_type} required  >
          <option>Missed</option>
          <option>Found</option>
          <option>New</option>
          <option>Inline</option>
          <option>Override</option>
          
        </AvField>
        {/* </AvForm> */}
        
       
           
            
        </td>
        <td>
          
             <AvField label="Defect Note" id="defect_note" name="defect_note" defaultValue={this.props.defect_note} required />
             
             
           
        </td>
        
        
          
          
        
        
        
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
      <td hidden>{this.props.id}</td> 
      <td>
      
        {this.props.defect_type}
        </td>
        <td>
          {this.props.defect_note}
        </td>
        <td>
        <Button color="info" onClick={this.edit}> Edit</Button></td>
        <td><Button color="danger" onClick={this.remove}>Delete  </Button></td>
      </tr>}
      </>
     
    )
  }
}

export default TableRow;
