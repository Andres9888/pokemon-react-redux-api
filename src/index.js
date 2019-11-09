import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import PokeApp from "./App";

import { Provider } from "react-redux";
import {store} from './store';




ReactDOM.render(
  <Provider store={store}>
    <PokeApp />
  </Provider>,
  document.getElementById("root")
);


