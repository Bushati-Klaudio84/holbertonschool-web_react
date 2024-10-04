import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import React from 'react';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
    </div>
  );
}

export default Header;
