import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  addProduct = (event) => {
    const { name, price, url, getInventory } = this.props;

    // sends request to server to add a new product to the list
    // after the request is made, the new product is added
    axios
      .post('/api/inventory', {
        name: name,
        price: price,
        image_url: url
    }).then(() => getInventory());
  }

  render() {
    const { addProduct } = this;
    const { children } = this.props;

    // component renders as a button that adds a new product to the inventory list in the database
    return (
      <div>
        <button onClick={ addProduct }>{ children }</button>
      </div>
    );
  }
}

export default Form;