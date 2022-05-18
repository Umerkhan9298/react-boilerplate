import React, { useState } from "react";

const SignUpForm = ({ inputHandler, handleSubmit }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <label name="first_name">First Name</label>
          <input
            name="first_name"
            className="form-control"
            placeholder="John"
            onChange={inputHandler}
          />
        </div>
        <div className="col-md-6">
          <label name="last_name">Last Name</label>
          <input
            name="last_name"
            className="form-control"
            placeholder="Doe"
            onChange={inputHandler}
          />
        </div>
      </div>
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
