import React from 'react';
import './login.css';

const LogIn = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Your password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LogIn;
