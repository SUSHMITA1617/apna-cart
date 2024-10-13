import React from 'react';
import Product from './Product';

function ProductList({ productList, incrementQuantity }) {
  return (
    <div>
      {productList.map((product, index) => (
        <Product
          key={index}
          product={product}
          incrementQuantity={incrementQuantity}
          index={index} // Pass index here
        />
      ))}
    </div>
  );
}

export default ProductList;
