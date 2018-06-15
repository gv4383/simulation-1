import React from 'react';

const Product = (props) => {
  const { productKey, productName, productPrice, productImage } = props;

  return (
    <div key={ productKey }>
      <h3>{ productName }</h3>
      <p>{ productPrice }</p>
      <p>{ productImage }</p>
    </div>
  );
}

export default Product;