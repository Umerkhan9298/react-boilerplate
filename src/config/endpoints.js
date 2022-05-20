import axios from "axios";

const registerUser = async (obj) => {
  return await axios.post(`${process.env.REACT_APP_URL}/signup`, { obj });
};

const loginUser = async (obj) => {
  return await axios.post(`${process.env.REACT_APP_URL}/login`, { obj });
};

export default {
  registerUser,
  loginUser,
};
