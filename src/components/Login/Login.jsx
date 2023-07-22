import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/signup/signupSlice";
import { useNavigate } from "react-router";
import "./Login.css";
import { Link } from "react-router-dom";
import { loginUser, verifyLoginStatus } from "../../redux/login/LoginSlice";
const LoginForm = () => {
  const dispatch = useDispatch();
  const { success, failure, message } = useSelector((store) => store.login);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(verifyLoginStatus());
    try {
      if (message.status.code === 200) {
        navigate("/");
      }
    } catch (error) {
    }
  }, [message]);

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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userData }),
      },
    };
    dispatch(loginUser(requestOptions));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Welcome Back!</h1>
        <label htmlFor="email">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
        <button type="submit">Log In</button>
      </form>
      <Link to={"/signup"}>Signup</Link>
    </div>
  );
};

export default LoginForm;
