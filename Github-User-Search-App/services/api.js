export async function fetchUsers(query) {

  const url = `https://api.github.com/search/users?q=${query}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("API Error");
  }

  const data = await response.json();

  return data.items.slice(0, 5);
}