import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/signup/signupSlice";
import { useNavigate } from "react-router";
import "./Login.css";
const LoginForm = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((store) => store.signup);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    loggedIn || authToken ? navigate("/") : navigate("/login");
  }, [loggedIn]);

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
    dispatch(signupUser(requestOptions));
  };

  return (
    <div class="login-container">
      <form onSubmit={handleLogin} class="login-form">
        <h1>Welcome Back!</h1>
        <label for="email">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
        <label for="password">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
