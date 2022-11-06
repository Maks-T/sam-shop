import React, { useReducer } from 'react';
import ProductList from './components/productList/productList';
import Header from './components/header/header';
import Cart from './components/cart/cart';
import './App.css';

export const StateContext = React.createContext();

const initialState = {
  orders: [],
  total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      const findAddOrder = state.orders.find(
        (order) => order.product.id === action.payload.id
      );
      if (findAddOrder) {
        findAddOrder.count += 1;
      } else {
        state.orders = [...state.orders, { product: action.payload, count: 1 }];
      }

      state.total = state.orders.reduce(
        (total, order) => total + order.count * order.product.price,
        0
      );

      return { ...state };

    case 'REMOVE_PRODUCT_IN_CART':
      state.orders = state.orders.filter(
        (order) => order.product.id !== action.payload.id
      );

      state.total = state.orders.reduce(
        (total, order) => total + order.count * order.product.price,
        0
      );

      return { ...state };
    case 'CHECKOUT':
      console.log(initialState);
      return {
        orders: [],
        total: 0,
      };
    default:
      return { ...state };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App__wrapper">
        <div className="App">
          <Header />
          <main className="main">
            <div className="left-side">
              <ProductList></ProductList>
            </div>
            <div className="right-side">
              <Cart />
            </div>
          </main>
        </div>
      </div>
    </StateContext.Provider>
  );
}

export default App;
