import React from 'react';
import '../styles/Header.css';
import logo from '../images/Capital-One-Logo.png';
import Navigation from '../pages/Navbar'

function Header() {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo"/>
      <Navigation></Navigation>
    </header>

  );
}

export default Header;
