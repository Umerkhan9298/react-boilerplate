import React, { useState, useEffect } from "react";
import SignUpForm from "../../components/forms/SignUpForm";
import { useHistory } from "react-router-dom";

//apis
import endpoints from "../../config/endpoints";

const SignIn = () => {
  const history = useHistory();

  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);

  const [tokenState, setTokenState] = useState();

  const inputHandler = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const registerUser = await endpoints.registerUser(state);
      localStorage.setItem("email", registerUser?.data?.email);
      localStorage.setItem("token", registerUser?.data?.token);
      localStorage.setItem("first_name", registerUser?.data?.first_name);
      localStorage.setItem("last_name", registerUser?.data?.last_name);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  const gettoken = (token) => setTokenState(token);

  useEffect(() => {
    const token = localStorage.getItem("token");
    gettoken(token);

    if (tokenState) {
      history.push("/");
    }
  }, [tokenState]);

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <SignUpForm inputHandler={inputHandler} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignIn;
