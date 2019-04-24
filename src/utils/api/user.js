import { fetchProtectedData } from "./fetch";

function updateUser(id, updates) {
  return fetchProtectedData(`user/${id}/edit`, "PUT", updates);
}

function getUser(id) {
  return fetchProtectedData(`user/${id}`);
}

export { updateUser, getUser };
