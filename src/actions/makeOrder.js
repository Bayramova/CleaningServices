export const SELECT_COMPANY = "SELECT_COMPANY";

function updateFieldState(companyId) {
  return {
    type: SELECT_COMPANY,
    companyId
  };
}

export function selectCompany(companyId) {
  return dispatch => {
    dispatch(updateFieldState(companyId));
  };
}
