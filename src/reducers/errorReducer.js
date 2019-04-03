import { GET_ERRORS, DELETE_ERRORS } from "../actions/authActions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.error;
    case DELETE_ERRORS:
      return {};
    default:
      return state;
  }
}
