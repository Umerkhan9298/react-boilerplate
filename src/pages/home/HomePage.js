import React, { useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Button } from "antd";

const HomePage = () => {
  const [color, setColor] = useState("white");
  const toggle = (e) => {
    e.preventDefault();
    if (color === "white") setColor("#3632a8");
    else {
      setColor("white");
    }
  };

  return (
    <div className="jumbotron container">
      <h1>{"{MOCK JSON}"} HackerRank</h1>
      <br />
      <h3 style={{ fontWeight: "lighter" }}>
        Free fake API for testing and prototyping.
      </h3>
      <h3 style={{ fontWeight: "lighter" }}>
        Powered by<span>&nbsp;</span>
        <Link to="/">JSON Server</Link> + <Link to="/">Low DB</Link>
      </h3>
      <br />
      <Link to="/patient" className="btn btn-primary btn-lg">
        Show Books Records
      </Link>
      <br />
    </div>
  );
};

export default HomePage;
