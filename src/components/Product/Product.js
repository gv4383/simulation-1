import React from 'react';

const Product = (props) => {
  const { productKey, productName, productPrice, productImage } = props;

  // template for each product being displayed
  return (
    <div key={ productKey }>
      <h3>{ productName }</h3>
      <p>{ productPrice }</p>
      <p>{ productImage }</p>
      <button>Edit</button>
      <button>Delete</button>
      <br />
      <br />
    </div>
  );
}

export default Product;