import { updateUserInfo } from "utils/fetch";

export const EDIT_INFO = "EDIT_INFO";
export const FETCH_USER_DATA = "FETCH_USER_DATA";

function editInfo(userData) {
  return {
    type: EDIT_INFO,
    userData
  };
}

function fetchUserData(userData) {
  return {
    type: FETCH_USER_DATA,
    userData
  };
}

export const updateUser = (updates, history) => dispatch => {
  updateUserInfo(updates)
    .then(res => {
      dispatch(editInfo(updates));
    })
    .then(res => history.push("/user/profile"));
};

export const fetchUser = id => dispatch => {
  fetch("http://localhost:5000/api/user/profile", {
    method: "Get",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(id)
  })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });
};
