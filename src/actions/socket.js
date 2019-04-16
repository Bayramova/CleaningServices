export const GET_REQUEST_COMPANIES = "GET_REQUEST_COMPANIES";
export const GET_SUCCESS_COMPANIES = "GET_SUCCESS_COMPANIES";
export const GET_FAILURE_COMPANIES = "GET_FAILURE_COMPANIES";

export const getRequestCompanies = () => ({
  type: GET_REQUEST_COMPANIES
});

export const getSuccessCompanies = data => {
  return {
    type: GET_SUCCESS_COMPANIES,
    data
  };
};

export const getFailureCompanies = err => ({
  type: GET_FAILURE_COMPANIES,
  err
});

export const getCompanies = options => async dispatch => {
  dispatch(getRequestCompanies());
  const { socket } = options;
  delete options.socket;
  try {
    socket.emit(GET_REQUEST_COMPANIES, options);
  } catch (err) {
    dispatch(getFailureCompanies(err));
  }
};
