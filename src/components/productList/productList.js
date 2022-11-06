import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { StateContext } from './../../App';
import Product from '../product/product';

import './productList.style.css';

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useContext(StateContext);

  const fetchProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    setProducts(response.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default ProductList;
