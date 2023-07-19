import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/signup/signupSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    const requestOptions = {
      sign_in: true,
      endPoints: "users/sign_in",
      method: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user: userData})
    }};
    dispatch(signupUser(requestOptions));
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
