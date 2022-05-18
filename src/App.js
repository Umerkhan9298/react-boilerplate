import React from "react";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import HomePage from "./pages/home/HomePage";
import BookPage from "./pages/book/BookPage";
import AboutPage from "./pages/about/AboutPage";
import SingIn from "./pages/auth/SingIn";
import SignUp from "./pages/auth/SignUp";

// Components
import Nav from "./components/navbar";
import NavBar from "./components/navbar/Nav";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/books" component={BookPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/sign-in" component={SingIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
