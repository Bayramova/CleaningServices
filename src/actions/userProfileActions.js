import { updateUserInfo, getUserInfo } from "../utils/fetch";

export const EDIT_INFO = "EDIT_INFO";
export const GET_USER_DATA = "GET_USER_DATA";

function editInfo(userData) {
  return {
    type: EDIT_INFO,
    userData
  };
}

function getUserData(userData) {
  return {
    type: GET_USER_DATA,
    userData
  };
}

export const updateUser = (id, updates, history) => dispatch => {
  updateUserInfo(id, updates)
    .then(res => {
      dispatch(editInfo(updates));
    })
    .then(res => history.push(`/user/profile/${id}`));
};

export const getUser = id => dispatch => {
  getUserInfo(id).then(res => {
    const { client } = res;
    dispatch(getUserData(client));
  });
};
