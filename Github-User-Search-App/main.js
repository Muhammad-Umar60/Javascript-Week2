import { fetchUsers } from "./services/api.js";
import { debounce } from "./utils/debounce.js";
import { saveSearch, getSearch } from "./utils/storage.js";
import { createSearchCounter } from "./utils/counterClosure.js";
import { renderUsers } from "./components/renderUsers.js";

const input = document.getElementById("searchInput");
const results = document.getElementById("results");
const status = document.getElementById("status");
const counterEl = document.getElementById("counter");

const searchCounter = createSearchCounter();

const lastSearch = getSearch();
if (lastSearch) {
  input.value = lastSearch;
  handleSearch(lastSearch);
}

async function handleSearch(query) {

  if (!query) {
    results.innerHTML = "";
    return;
  }

  saveSearch(query);

  status.textContent = "Loading...";

  try {

    const users = await fetchUsers(query);

    status.textContent = "";

    renderUsers(users, results);

    const count = searchCounter();
    counterEl.textContent = `Search count: ${count}`;

  } catch (error) {

    status.textContent = "Error fetching users";

  }

}

input.addEventListener(
  "input",
  debounce((e) => handleSearch(e.target.value), 3000)
);