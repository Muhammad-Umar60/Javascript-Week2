export function saveSearch(value) {

  localStorage.setItem("lastSearch", value);

}

export function getSearch() {

  return localStorage.getItem("lastSearch");

}