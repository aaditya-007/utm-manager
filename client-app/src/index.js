import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import store from "./store/index";
import { Provider } from "react-redux";
var mountNode = document.getElementById("app");
ReactDOM.render(  <Provider store={store}><App  /></Provider>, mountNode);