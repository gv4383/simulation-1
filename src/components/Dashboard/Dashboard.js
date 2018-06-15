import React, { Component } from 'react';

import Product from './../Product/Product';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list } = this.props;
    let displayItems = list.map((item, i) => {
      return (
        <Product
          productKey={ i }
          productName={ item.name }
          productPrice={ item.price }
          productImage={ item.image } />
      );
    });

    return (
      <div>
        { displayItems }
      </div>
    );
  }
}

export default Dashboard;