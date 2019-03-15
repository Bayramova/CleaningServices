import { combineReducers } from "redux";

import loadingData from "./loadingData";
import orderFormReducer from "./orderFormReducer";

export default combineReducers({
  loadingData,
  orderFormReducer
});
