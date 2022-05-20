import React, { useState } from "react";
import SignInForm from "../../components/forms/SignInForm";

const SingIn = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);

  const inputHandler = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("state", state);
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <SignInForm inputHandler={inputHandler} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SingIn;
