import React, { useState } from 'react';
import { auth } from './firebase'; // Import Firebase authentication
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Register.css'; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null); 

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered successfully:', user);
      alert('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
      setError(error.message); 
    }
  };

  return (
    <div className="register-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="register-button">Create Account</button>
      </form>
    </div>
  );
};

export default Register;
