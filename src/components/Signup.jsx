import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/signup/signupSlice";
import { Link, useNavigate } from "react-router-dom";
import { setAuth } from "../redux/authSlice";

const SignupForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.signup.isLoading);
  const error = useSelector((state) => state.signup.error);
  const successMessage = useSelector((state) => state.signup.successMessage);
  const navigate = useNavigate()
  const { isAuth } = useSelector((store) => store.auth);
  const { loggedIn } = useSelector((store) => store.signup);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  useEffect(() => {
    dispatch(setAuth());
    if (isAuth === true) {
      navigate("/");
    }
  }, [isAuth, loggedIn]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };
    const requestOptions = {
      sign_in: true,
      endPoints: "users",
      method: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userData }),
      },
    };
    dispatch(signupUser(requestOptions));
  };

  return (
    <div>
      <h1>Signup</h1>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {error && <div className="error-message">{error}</div>}
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Signup"}
          </button>
        </form>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default SignupForm;
