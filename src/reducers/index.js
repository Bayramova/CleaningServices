import { combineReducers } from "redux";

import servicesData from "./services";
import companiesData from "./companies";
import companyInfo from "./company";
import searchCompaniesResult from "./searchCompany";
import orderFormFields from "./orderFormFields";
import auth from "./authReducer";
import socket from "./socket";

export default combineReducers({
  servicesData,
  companiesData,
  companyInfo,
  searchCompaniesResult,
  orderFormFields,
  auth,
  socket
});
