import React, { useState } from "react";

const SignUpForm = ({ inputHandler, handleSubmit }) => {
  return (
    <>
      <label name="Password">Email</label>
      <input
        name="email"
        className="form-control"
        placeholder="abc@gmail.com"
        onChange={inputHandler}
      />
      <label name="Password">Password</label>
      <input
        name="password"
        type="password"
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
