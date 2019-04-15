import { search } from "utils/api";
import {
  fetchCompaniesRequest,
  fetchCompaniesSuccess,
  fetchDataFailure
} from "./receiveData";

export const searchCompanies = query => dispatch => {
  dispatch(fetchCompaniesRequest());

  search(query)
    .then(companies => {
      dispatch(fetchCompaniesSuccess(companies));
    })
    .catch(error => {
      dispatch(fetchDataFailure(error));
    });
};
