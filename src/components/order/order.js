import React from 'react';

import './order.style.css';

const Order = ({ dispatch, order }) => {
  const { title, price, images } = order.product;

  return (
    <div className="order">
      <img className="order__img" alt={title} src={images[0]}></img>
      <div className="order__info">
        <h3 className="order__title">{title}</h3>
        <p className="order__price">{`$${price} х ${order.count}`}</p>
      </div>
      <button
        className="order__btn-remove"
        onClick={() =>
          dispatch({
            type: 'REMOVE_PRODUCT_IN_CART',
            payload: order.product,
          })
        }
      >
        &#215;
      </button>
    </div>
  );
};

export default Order;
