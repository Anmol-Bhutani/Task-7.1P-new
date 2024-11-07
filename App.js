import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LogIn from './Login';         
import Register from './Register';    
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to DEV@Deakin</h1>} /> {/* Home page */}
          <Route path="/login" element={<LogIn />} />                   {/* Login page */}
          <Route path="/register" element={<Register />} />             {/* Sign-up page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
