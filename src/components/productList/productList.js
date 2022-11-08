import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { StateContext } from './../reducerProvider/reducerProvider';
import Product from '../product/product';

import './productList.style.css';
import Spinner from '../spinner/spinner';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(StateContext);

  const fetchProducts = async () => {
    setIsLoading(true);
    const response = await axios.get('https://dummyjson.com/products');
    setProducts(response.data.products);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {isLoading && (
        <Spinner styles={{ position: 'fixed', top: '40vh', left: '35vw' }} />
      )}
      {products.map((product) => (
        <Product key={product.id} product={product} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default ProductList;
