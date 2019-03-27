const setAuthToken = token => {
  const headers = new Headers();
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
    fetch("http://localhost:5000/api/signin", {
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
  } else {
    headers.delete("Authorization");
  }
};

export default setAuthToken;
