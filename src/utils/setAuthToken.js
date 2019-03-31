import fetchDefaults from "fetch-defaults";

const setAuthToken = token => {
  const headers = new Headers();
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
    fetchDefaults(fetch, {
      headers
    });
  } else {
    headers.delete("Authorization");
  }
};

export default setAuthToken;
