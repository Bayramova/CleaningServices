const setAuthToken = token => {
  const headers = new Headers({
    Authorization: token
  });
  const request = new Request("/api/signin", {
    headers: headers
  });
  if (token) {
    fetch(request);
  } else {
    headers.delete("Authorization");
  }
};

export default setAuthToken;
