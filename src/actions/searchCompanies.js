import { search } from "utils/api";
import { fetchCompaniesRequest, fetchDataFailure } from "./receiveData";

export const SEARCH_COMPANIES_SUCCESS = "SEARCH_COMPANIES_SUCCESS";

const searchCompaniesSuccess = (companies, hasMore, page) => {
  return {
    type: SEARCH_COMPANIES_SUCCESS,
    companies,
    hasMore,
    page: parseInt(page)
  };
};

export const searchCompanies = (query, page, limit) => dispatch => {
  dispatch(fetchCompaniesRequest());

  search(query, page, limit)
    .then(res => {
      dispatch(
        searchCompaniesSuccess(res.companies, res.hasMore, res.currentPage)
      );
    })
    .catch(error => {
      dispatch(fetchDataFailure(error));
    });
};
