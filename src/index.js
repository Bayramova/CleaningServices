import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore } from "redux";
import middleware from "./middleware";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

export default store;
