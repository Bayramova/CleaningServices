export const SORT_COMPANIES = "CHANGE_FIELDS";

function sortCompanies(sortBy) {
  return {
    type: SORT_COMPANIES,
    sortBy
  };
}

export function handleSortValueChange(sortBy) {
  return dispatch => {
    dispatch(sortCompanies(sortBy));
  };
}
