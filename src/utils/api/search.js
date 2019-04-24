import { fetchData } from "./fetch";

function search(query, page, limit) {
  return fetchData(`search_companies/${page}/${limit}/?q=${query}`);
}

export { search };
