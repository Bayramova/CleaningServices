import { SET_CURRENT_USER, UNSET_CURRENT_USER } from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  user: {
    id: "",
    role: "",
    email: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log(action.user);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      };
    case UNSET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {
          id: "",
          role: "",
          email: ""
        }
      };
    default:
      return state;
  }
}
