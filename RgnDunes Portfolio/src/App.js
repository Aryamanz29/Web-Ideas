import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.css";
import Navbar from "./pages/LandingPage/Banner/Navbar/Navbar";
import Hobbies from "./pages/Hobbies/Hobbies";
import Projects from "./pages/Projects/Projects";
import Reach from "./pages/Reach/Reach";
import Admin from "./Admin/Admin";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/hobbies">
            <Navbar />
            <Hobbies />
          </Route>
          <Route path="/projects">
            <Navbar />
            <Projects />
          </Route>
          <Route path="/reach">
            <Navbar />
            <Reach />
          </Route>
          <Route path="/admin">
            <Navbar />
            <Admin />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
