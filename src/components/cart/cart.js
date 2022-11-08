import React, { useContext, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Message from '../message/message';
import Order from '../order/order';
import { StateContext } from './../reducerProvider/reducerProvider';
import './cart.style.css';

const Cart = () => {
  const { state, dispatch } = useContext(StateContext);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    setIsCheckout(false);
  }, [isCheckout]);

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
          {
            <CSSTransition
              in={isCheckout}
              timeout={4000}
              classNames="message"
              mountOnEnter
              unmountOnExit
            >
              <Message>Thank you for the purchase!</Message>
            </CSSTransition>
          }
        </div>
      </div>
      {!!state.orders.length && (
        <div className="cart__checkout-panel">
          <p className="cart__total">{`Total: ${state.total}`}</p>

          <button
            className="cart__btn-checkout"
            onClick={() => {
              dispatch({ type: 'CHECKOUT' });
              setIsCheckout(true);
            }}
          >
            checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
