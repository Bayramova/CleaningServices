import { combineReducers } from "redux";

import data from "./data";
import orderFormFields from "./orderFormFields";
import loginFormFields from "./loginFormFields";
import signupFormFields from "./signupFormFields";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  data,
  orderFormFields,
  loginFormFields,
  signupFormFields,
  authReducer,
  errorReducer
});
