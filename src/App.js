import React from "react";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import HomePage from "./pages/home/HomePage";
import BookPage from "./pages/book/BookPage";
import AuthorsPage from "./pages/author/AuthorsPage";
import SingIn from "./pages/auth/SingIn";
import SignUp from "./pages/auth/SignUp";

// Components
import NavBar from "./components/navbar/Nav";

const App = () => {
  console.log("env", process.env.REACT_APP_URL);
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/books" component={BookPage} />
        <Route path="/authors" component={AuthorsPage} />
        <Route path="/sign-in" component={SingIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
