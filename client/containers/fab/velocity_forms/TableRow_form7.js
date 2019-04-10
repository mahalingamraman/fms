import React, { Component } from 'react';
import { Button,Table } from 'react-bootstrap';
import { AvForm, AvInput,AvField } from 'availity-reactstrap-validation';

class TableRow_form7 extends Component {
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
    this.props.edit(this.props.id, value.usn,value.sol, value.fol);
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
          
           
               <AvField type="select" id="usn"  name="usn" label="USN" defaultValue={this.props.usn} required  >
               <option>Select</option>
          <option>usn</option>
          
        
          
        </AvField>
        {/* </AvForm> */}
        
       
           
            
        </td>
        <td>
          
             <AvField type="datetime-local" label="SOL" id="sol" name="sol" defaultValue={this.props.sol} required />
             
             
           
        </td>
        <td>
          
          <AvField type="datetime-local" label="FOL" id="fol" name="fol" defaultValue={this.props.fol} required />
          
          
        
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
      
        {this.props.usn}
        </td>
        <td>
          {this.props.sol}
        </td>
        <td>
          {this.props.fol}
        </td>
        <td>
        <Button color="info" onClick={this.edit}> Edit</Button></td>
        <td><Button color="danger" onClick={this.remove}>Delete  </Button></td>
      </tr>}
      </>
     
    )
  }
}

export default TableRow_form7;
