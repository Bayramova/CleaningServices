import { CHANGE_FIELDS } from "../actions/updateFieldsState";

const initialState = {
  address: "",
  serviceType: "",
  bigRooms: "",
  smallRooms: "",
  bathrooms: "",
  daysOfCleaning: [],
  startTimeOfCleaning: "",
  cleaningFrequency: "",
  phone: "",
  prefix: ""
};

export default function orderFormFields(state = initialState, action) {
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
