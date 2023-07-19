import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/signup/signupSlice";

const SignupForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.signup.isLoading);
  const error = useSelector((state) => state.signup.error);
  const successMessage = useSelector((state) => state.signup.successMessage);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user: userData})
    }};
    dispatch(signupUser(requestOptions));
  };

  return (
    <div>
      <h2>Signup</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default SignupForm;
