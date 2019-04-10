import React, { Component } from 'react';
import { Button,Table } from 'react-bootstrap';
import { AvForm, AvInput,AvField } from 'availity-reactstrap-validation';

class TableRow_form9 extends Component {
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
    this.props.edit(this.props.id, value.rts,value.rts_timestamp);
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
          
           
               <AvField type="select" id="rts"  name="rts" label="RTS" defaultValue={this.props.rts} required  >
               <option>Select</option>
          <option>rts</option>
          
        
          
        </AvField>
        {/* </AvForm> */}
        
       
           
            
        </td>
        <td>
          
             <AvField type="datetime-local" label="RTS Time stamp" id="rts_timestamp" name="rts_timestamp" defaultValue={this.props.rts_timestamp} required />
             
             
           
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
      
        {this.props.rts}
        </td>
        <td>
          {this.props.rts_timestamp}
        </td>
        
        <td>
        <Button color="info" onClick={this.edit}> Edit</Button></td>
        <td><Button color="danger" onClick={this.remove}>Delete  </Button></td>
      </tr>}
      </>
     
    )
  }
}

export default TableRow_form9;
