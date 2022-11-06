import React, { useContext } from 'react';
import Order from '../order/order';
import { StateContext } from './../../App';
import './cart.style.css';

const Cart = (props) => {
  const { state, dispatch } = useContext(StateContext);
  console.log('cart  , ', state);
  return (
    <div className="cart">
      <div>
        <header className="cart__header">
          <h2 className="cart__title">CART</h2>
        </header>
        <div className="cart__orders">
          {state.orders.map((order) => (
            <Order order={order} dispatch={dispatch} key={order.product.id} />
          ))}
        </div>
      </div>
      <div className="cart__checkout-panel">
        <p className="cart__total">{`Total: ${state.total}`}</p>
        <button
          className="cart__btn-checkout"
          onClick={() => dispatch({ type: 'CHECKOUT' })}
        >
          checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
