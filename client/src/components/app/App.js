import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { history } from "../../utils";

import store from "../../store/index";
import Home from "../home/Home";
import Login from "../login/Login";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
