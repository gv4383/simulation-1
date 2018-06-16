import React, { Component } from 'react';
import axios from 'axios';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventoryList: [],
      productName: '',
      productPrice: '',
      productImageUrl: ''
    };
  }

  componentDidMount = () => {
    axios.get('/api/inventory').then(response => {
      // console.log(`response.data: ${ response.data }`);
      this.setState({
        inventoryList: response.data,
        productName: '',
        productPrice: '',
        productImageUrl: ''
      });
    });
  }

  onChangeHandler1 = (event) => {
    // console.log(event.target.value);
    this.setState({
      productName: event.target.value
    });
  }

  onChangeHandler2 = (event) => {
    // console.log(event.target.value);
    this.setState({
      productPrice: event.target.value
    });
  }

  onChangeHandler3 = (event) => {
    // console.log(event.target.value);
    this.setState({
      productImageUrl: event.target.value
    });
  }
  
  testClick = () => {
    alert("Working!");
  }

  cancelHandler = () => {
    // clears the input fields
    this.setState({
      productName: '',
      productPrice: '',
      productImageUrl: ''
    });
  }

  deleteHandler = (id) => {
    axios.delete(`/api/inventory/${ id }`).then(response => {
      this.componentDidMount();
    });
  }
  
  render() {
    const {
      onChangeHandler1,
      onChangeHandler2,
      onChangeHandler3,
      testClick,
      cancelHandler,
      componentDidMount,
      deleteHandler
    } = this;

    const {
      inventoryList,
      productName,
      productPrice,
      productImageUrl
    } = this.state;

    return (
      <div className="App">
        <input
          placeholder="Product Name"
          value={ productName }
          onChange={ onChangeHandler1 } />
        <input
          placeholder="Product Price"
          value={ productPrice }
          onChange={ onChangeHandler2 } />
        <input
          placeholder="Product URL"
          value={ productImageUrl }
          onChange={ onChangeHandler3 } />

          {/* Form component acts as an 'add' button */}
          <Form 
            getInventory={ componentDidMount }
            name={ productName }
            price={ productPrice }
            url={ productImageUrl }>Add</Form>
        <button onClick={ cancelHandler }>Cancel</button>

        {/* displays all products */}
        <Dashboard
          list={ inventoryList }
          deleteProducts={ deleteHandler } />
      </div>
    );
  }
}

export default App;
