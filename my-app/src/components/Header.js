import React from 'react';
import '../styles/Header.css';
import logo from '../images/Capital-One-Logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo"/>
    </header>
  );
}

export default Header;
