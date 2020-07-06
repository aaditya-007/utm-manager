import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Links from "./routes/Links";
import Templates from "./routes/LinkTemplates";
import Users from "./routes/Users";
import { hot } from "react-hot-loader/root";
import "antd/dist/antd.css";
import "./base.css";
import Main from "./layouts/Main";
import store from "./store/index";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <Router>
      <Main>
        <Switch>
          <Route exact path="/links" component={Links} />
          <Route path="/templates" component={Templates} />
          <Route path="/users" component={Users} />
        </Switch>
      </Main>
    </Router>
  </Provider>
);

export default hot(App);
