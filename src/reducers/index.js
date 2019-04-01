import { combineReducers } from "redux";

import data from "./data";
import orderFormFields from "./orderFormFields";
import signInFormFields from "./signInFormFields";
import signUpFormFields from "./signupFormFields";
import auth from "./authReducer";
import errors from "./errorReducer";
import userData from "./userData";

export default combineReducers({
  data,
  orderFormFields,
  signInFormFields,
  signUpFormFields,
  auth,
  errors,
  userData
});
