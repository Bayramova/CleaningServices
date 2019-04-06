import { CHANGE_FIELDS } from "actions/updateFieldsState";

const initialState = {
  email: {
    value: ""
  },
  password: {
    value: ""
  },
  confirm: {
    value: ""
  }
};

export default function signUpFormFields(state = initialState, action) {
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
