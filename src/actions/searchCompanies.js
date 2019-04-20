import { search } from "utils/api/search";
import { fetchCompaniesRequest, fetchDataFailure } from "./receiveData";

export const CLEAR_COMPANIES = "CLEAR_COMPANIES";
export const SEARCH_COMPANIES_SUCCESS = "SEARCH_COMPANIES_SUCCESS";

const searchCompaniesSuccess = (companies, hasMore, page) => {
  return {
    type: SEARCH_COMPANIES_SUCCESS,
    companies,
    hasMore,
    // имеет смысл сразу присылать числом в json
    page: parseInt(page)
  };
};

const clearCompaniesList = () => {
  return {
    type: CLEAR_COMPANIES
  };
};

export const clearCompanies = () => dispatch => {
  dispatch(clearCompaniesList());
};

export const searchCompanies = (query, page, limit) => dispatch => {
  dispatch(fetchCompaniesRequest());

  search(query, page, limit)
    .then(res => {
      dispatch(
        // res.currentPage вроде с бекенда не приходит
        searchCompaniesSuccess(res.companies, res.hasMore, res.currentPage)
      );
    })
    .catch(error => {
      dispatch(fetchDataFailure(error));
    });
};
