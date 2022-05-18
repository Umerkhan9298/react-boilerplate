import React, { useState } from "react";

const SignUpForm = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);

  console.log("state", state);

  const inputHandler = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = () => {};

  return (
    <>
      <label name="Password">Email</label>
      <input
        name="email"
        className="form-control"
        placeholder="Enter Email"
        onChange={inputHandler}
      />
      <label name="Password">Password</label>
      <input
        name="password"
        className="form-control"
        placeholder="Enter Password"
        onChange={inputHandler}
      />
      <br />
      <button onClick={handleSubmit} className="btn btn-success">
        Submit
      </button>
    </>
  );
};

export default SignUpForm;
