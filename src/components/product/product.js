import React from 'react';

import './product.style.css';

const Product = ({ product, dispatch }) => {
  const { title, images, description, price } = product;

  return (
    <div className="product">
      <img className="product__img" alt={title} src={images[0]}></img>
      <h2 className="product__title">{title}</h2>
      <p className="product__desc">{description}</p>
      <p className="product__price">{`$${price}`}</p>
      <button
        className="product__btn-buy"
        onClick={() =>
          dispatch({ type: 'ADD_PRODUCT_TO_CART', payload: product })
        }
      ></button>
    </div>
  );
};

export default Product;
