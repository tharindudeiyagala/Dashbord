import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded credentials
    if (username === 'admin' && password === 'admin@123') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      {/* Dashboard Header */}
      <div className="dashboard-container1">
        <header>
          <img src="logo.svg" alt="Cinesync Logo" className="logo" />
          <h1>Cinesync-Cloudwatch-Dashboard</h1>
        </header>
      </div>

      {/* Login Form */}
      <div className="login-container">
        <h1>Login to Cinesync Dashboard</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
