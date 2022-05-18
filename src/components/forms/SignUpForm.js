import React, { useState } from "react";

const SignUpForm = () => {
  const initialState = {
    first_name: "",
    last_name: "",
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
      <div className="row">
        <div className="col-md-6">
          <label name="first_name">First Name</label>
          <input
            name="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={inputHandler}
          />
        </div>
        <div className="col-md-6">
          <label name="last_name">Last Name</label>
          <input
            name="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={inputHandler}
          />
        </div>
      </div>
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
