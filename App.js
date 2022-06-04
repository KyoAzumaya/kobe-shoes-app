import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import ShoesList from "./components/ShoesList";
import Nav from "./components/Nav";
import YourOrder from "./components/YourOrder";
import Home from "./components/Home";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/order">
              <YourOrder />
            </Route>
            <Route path="/shoes">
              <ShoesList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
