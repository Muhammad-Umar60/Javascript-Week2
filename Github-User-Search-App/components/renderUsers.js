export function renderUsers(users, container) {

  if (!users.length) {
    container.innerHTML = "<p>No users found</p>";
    return;
  }

  container.innerHTML = users
    .map(
      (user) => `
      <div class="user">
        <img src="${user.avatar_url}" width="50"/>
        <a href="${user.html_url}" target="_blank">${user.login}</a>
      </div>
    `
    )
    .join("");

}