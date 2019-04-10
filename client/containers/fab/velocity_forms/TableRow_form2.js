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
    this.props.edit(this.props.id, value.stop_time_type,value.stop_time, value.stop_time_desc);
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
          
           
               <AvField type="select" id="stop_time_type"  name="stop_time_type" label="Stop Time Type" defaultValue={this.props.stop_time_type} required  >
          <option>Online</option>
          
          <option>Offline</option>
        
          
        </AvField>
        {/* </AvForm> */}
        
       
           
            
        </td>
        <td>
          
             <AvField label="Stop Time (mins)" id="stop_time" name="stop_time" defaultValue={this.props.stop_time} required />
             
             
           
        </td>
        <td>
          
          <AvField label="Stop Time Description" id="stop_time_desc" name="stop_time_desc" defaultValue={this.props.stop_time_desc} required />
          
          
        
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
      
        {this.props.stop_time_type}
        </td>
        <td>
          {this.props.stop_time}
        </td>
        <td>
          {this.props.stop_time_desc}
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
