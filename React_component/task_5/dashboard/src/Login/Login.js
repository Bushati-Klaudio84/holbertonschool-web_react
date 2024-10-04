import logo from '../assets/holberton-logo.jpg';
import { getFooterCopy, getFullYear } from '../utils/util';
import './Login.css';
import React from 'react';

function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email"/>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password"/>
        <button type="button">OK</button>
      </div>
    </React.Fragment>
  );
}

export default Login;
