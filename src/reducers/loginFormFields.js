import { CHANGE_FIELDS } from "../actions/updateFieldsState";

const initialState = {
  email: {
    value: ""
  },
  password: {
    value: ""
  }
};

export default function loginFormFields(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIELDS:
      return {
        ...state,
        ...action.changedFields
      };
    default:
      return state;
  }
}
