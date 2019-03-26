const setAuthToken = token => {
  const headers = new Headers();
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  } else {
    headers.delete("Authorization");
  }
  fetch("/api/signin", {
    method: "GET",
    headers: headers
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export default setAuthToken;
