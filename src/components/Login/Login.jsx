import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3 className="page-heading">Log in</h3>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          id="email"
          placeholder="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          id="password"
          placeholder="Password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
