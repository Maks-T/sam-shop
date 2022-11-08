import React from 'react';
import ReducerProvider from './components/reducerProvider/reducerProvider';
import ProductList from './components/productList/productList';
import Header from './components/header/header';
import Cart from './components/cart/cart';

import './App.css';

function App() {
  return (
    <ReducerProvider>
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
    </ReducerProvider>
  );
}

export default App;
