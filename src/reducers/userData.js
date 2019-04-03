import { GET_USER_DATA, EDIT_INFO } from "../actions/userProfileActions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DATA:
      return action.userData;
    case EDIT_INFO:
      return action.userData;
    default:
      return state;
  }
}
