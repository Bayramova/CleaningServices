import { fetchData } from "./fetch";

function search(query, page, limit) {
  return fetchData(`search/${page}/${limit}/?q=${query}`);
}

export { search };
