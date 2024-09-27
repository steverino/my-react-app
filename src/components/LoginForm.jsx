import React, { useState } from 'react';

const Login = () => {
  // State variables for email, password, and error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Basic form validation
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    // You would typically send a login request to an API here
    console.log('Email:', email, 'Password:', password);
    // Reset the error message
    setError('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
