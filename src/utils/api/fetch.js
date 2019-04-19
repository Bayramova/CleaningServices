async function fetchData(resource, method, data) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/${resource}`,
    {
      method: method || "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );
  if (!response.ok) {
    throw response;
  }
  return response.json();
}

async function fetchProtectedData(resource, method, data) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/${resource}`,
    {
      method: method || "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.token
      },
      body: JSON.stringify(data)
    }
  );
  if (!response.ok) {
    throw response;
  }
  return response.json();
}

export { fetchData, fetchProtectedData };
