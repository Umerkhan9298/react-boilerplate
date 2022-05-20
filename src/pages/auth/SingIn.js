import React, { useEffect, useState } from "react";
import SignInForm from "../../components/forms/SignInForm";
import { useHistory } from "react-router-dom";

//apis
import endpoints from "../../config/endpoints";

const SingIn = () => {
  const history = useHistory();

  const initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);
  const [tokenState, setTokenState] = useState();

  const inputHandler = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const loginUser = await endpoints.loginUser(state);
      localStorage.setItem("email", loginUser?.data?.email);
      localStorage.setItem("token", loginUser?.data?.token);
      localStorage.setItem("first_name", loginUser?.data?.first_name);
      localStorage.setItem("last_name", loginUser?.data?.last_name);
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
      <h2>Sign In</h2>
      <SignInForm inputHandler={inputHandler} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SingIn;
