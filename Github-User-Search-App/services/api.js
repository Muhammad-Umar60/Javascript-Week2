export async function fetchUsers(query) {

  const url = `https://api.github.com/search/users?q=${query}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("API Error");
  }
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const data = await response.json();

// //  1
//   return await new Promise((res,rej) => {
//     setTimeout(() => {
//       res(data.items.slice(0,5))
//     }, 5000);
//   })
  // 2
  return data.items.slice(0, 5);

}