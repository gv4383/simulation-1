import React, { Component } from 'react';

import Product from './../Product/Product';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      list,
      deleteProducts
    } = this.props;
    
    // mapps over inventory list and displays however many products are in the list
    let displayItems = list.map((item, i) => {
      return (
        <Product
          productKey={ i }
          productId={ item.id }
          productName={ item.name }
          productPrice={ item.price }
          productImage={ item.image_url }
          deleteProduct={ deleteProducts } />
      );
    });

    // displays the total amount of products
    return (
      <div>
        { displayItems }
      </div>
    );
  }
}

export default Dashboard;