
/*this contains the quality page with form control which get dfect  */
import HeaderTAB from './header';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router';
import "../css/Quality.css";

import PropTypes from 'prop-types';
import * as QualityActions from '../actions/quality';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from 'react-bootstrap/Form';

class Quality extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {};
    this.state.filterText = "" ;
    this.state.products = [
      {
        id:'',
        defect_type:'',
        defect_note:'' ,
       
      }
    ];

  }
 
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
    this.props.actions.deleteRow(index);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      defect_type:'',
      defect_note:'',
    }
    this.state.products.push(product);
    
    this.setState(this.state.products);
    this.props.actions.addRow(product);

  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
  var products = this.state.products.slice();
  var newProducts = products.map(function(product) {

    for (var key in product) {
      if (key === item.name && product.id === item.id) {
        product[key] = item.value;

      }
    }
    return product;
  });
    this.setState({products:newProducts});
  //  console.log(this.state.products);
  };
  handleClick = e => {
    this.props.history.push("/velocity");
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/velocity"/>;
    }
    
    return (
      <div>
     
      <HeaderTAB/>
      <div className="includeHeader">
      <h4>QUALITY LIST</h4>
       <Card className="qualitypage">
       
       
       <Card.Body>
       <>
     
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
     </></Card.Body>
     <Card.Footer>
     <Row>
                <Col>
                <Button  id="proceedToVel" type="submit" className="pull-right"
                                                onClick={this.handleClick} >Next</Button>
                     
                </Col></Row></Card.Footer></Card></div>
      </div>
    );

  }

}
class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>

        <input className="searchfield" type="text" placeholder="Search " value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>

      </div>

    );
  }

}

class ProductTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function(product) {
      if (product.defect_type.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
    });
    return (
      <div>


      <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Defect Type</th>
              <th>Defect Note</th>
           
            </tr>
          </thead>

          <tbody>
            {product}

          </tbody>

        </table>
      </div>
    );

  }

}

class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "defect_type",
          value: this.props.product.defect_type,
          id: this.props.product.id
        }}/>
        <EditableCellOne onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "defect_note",
          value: this.props.product.defect_note,
          id: this.props.product.id
        }}/>
      
        <td className="del-cell">
          <input type="button" className="removeRow" onClick={this.onDelEvent.bind(this)} value="&times;" className="del-btn"/>
        </td>
      </tr>
    );

  }

}
class EditableCell extends React.Component {
 
  render() {

    return (
      <td>
       <Form.Group>
        <Form.Control as="select" type="dropdown-button"  name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}>
                                                <option >Select Defect Type</option>
                                                <option>MISSED</option>
                                                <option>FOUND</option>
                                                <option>NEW</option>
                                                <option>INLINE</option>
                                              </Form.Control></Form.Group>
        
          
      </td>
    );

  }

}
class EditableCellOne extends React.Component {

  render() {
    return (
      <td>
          <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
       
      </td>
    );

  }

}



Quality.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
  };
  function mapStateToProps(state) {
    return {
      qualitycomp: state.qualityReducer	
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(QualityActions, dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Quality)


