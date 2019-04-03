import { combineReducers } from "redux";

import data from "./data";
import orderFormFields from "./orderFormFields";
import signInFormFields from "./signInFormFields";
import signUpFormFields from "./signUpFormFields";
import auth from "./authReducer";

export default combineReducers({
  data,
  orderFormFields,
  signInFormFields,
  signUpFormFields,
  auth
});
