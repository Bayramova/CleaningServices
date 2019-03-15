// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import { Provider } from "./context";
// import App from "./components/App";

// ReactDOM.render(
//   <Provider>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

export default store;
