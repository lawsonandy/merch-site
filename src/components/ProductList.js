import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

function ProductList(props){
  return (
    <>
      <hr />
      {Object.values(props.productList).map((product) =>
        <Product
          whenProductClicked = { props.onProductSelection }
          name={product.name}
          price={product.price}
          description={product.description}
          quantity={product.quantity}
          id={product.id}
          key={product.id}/>
      )}
    </>
  );
}

ProductList.propTypes = {
  productList: PropTypes.object,
  onProductSelection: PropTypes.func
};

export default ProductList;
