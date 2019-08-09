import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { history } from "../utils";

import store from "../store/index";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
