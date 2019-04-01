import { EDIT_INFO } from "../actions/userProfileActions";

const initialState = {
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_INFO:
      return {
        ...state,
        ...action.userData
      };
    default:
      return state;
  }
}
