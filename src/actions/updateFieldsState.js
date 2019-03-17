export const CHANGE_FIELDS = "CHANGE_FIELDS";

function updateFieldsState(changedFields) {
  return {
    type: CHANGE_FIELDS,
    changedFields
  };
}

export function handleFormChange(changedFields) {
  return dispatch => {
    dispatch(updateFieldsState(changedFields));
  };
}
