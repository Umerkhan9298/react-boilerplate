import React, { useEffect, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const Nav = () => {
  const history = useHistory();
  const activeStyle = { color: "#F15B2A" };
  const [tokenState, setTokenState] = useState();
  const [logoutClick, setLogoutClick] = useState(false);

  const gettoken = (token) => setTokenState(token);

  useEffect(() => {
    const token = localStorage.getItem("token");
    gettoken(token);
    if (logoutClick) {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.removeItem("first_name");
      localStorage.removeItem("last_name");
    }
    if (token) {
      history.push("/");
    }
  }, [tokenState, logoutClick]);

  const handleLogout = () => {
    setLogoutClick(true);
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
  };

  return (
    <div className="container">
      <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {tokenState ? (
          <>
            {" | "}
            <NavLink to="/books" activeStyle={activeStyle}>
              Books
            </NavLink>
            {" | "}
            <NavLink to="/authors" activeStyle={activeStyle}>
              Authors
            </NavLink>
            {" | "}
            <Link onClick={handleLogout}>Logout</Link>
          </>
        ) : (
          <>
            {" | "}
            <NavLink to="/sign-in" activeStyle={activeStyle}>
              Sign In
            </NavLink>
            {" | "}
            <NavLink to="/sign-up" activeStyle={activeStyle}>
              Sign Up
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Nav;
