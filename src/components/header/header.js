import React from 'react';
import './header.style.css';
import logo from './../../assets/logo.png';

const Header = (props) => (
  <header className="header">
    <div className="logo">
      <img className="logo__img" src={logo} alt="Logo SamShop"></img>
      <h1 className="logo__name">SamShop</h1>
    </div>
  </header>
);

export default Header;
