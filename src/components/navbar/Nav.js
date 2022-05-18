import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Nav = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <div className="container">
      <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/books" activeStyle={activeStyle}>
          Books
        </NavLink>
        {" | "}
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
        {" | "}
        <NavLink to="/sign-in" activeStyle={activeStyle}>
          Sign In
        </NavLink>
        {" | "}
        <NavLink to="/sign-up" activeStyle={activeStyle}>
          Sign Up
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
