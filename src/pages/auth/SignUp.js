import React, { useState } from "react";
import SignUpForm from "../../components/forms/SignUpForm";

const SignIn = () => {
  const initialState = {
    first_name: "",
    last_name: "",
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
      <h1>Sign Up</h1>
      <SignUpForm inputHandler={inputHandler} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignIn;
