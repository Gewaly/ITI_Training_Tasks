const Container = document.getElementById("container");
const postContainer = document.getElementById("post-container");

Container.addEventListener("click", handleTabClick);
// Fetch the users and create a tab for each one
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    for (const user of users) {
      const tab = createTab(user);
      Container.appendChild(tab);
    }
  })
  .catch((error) => console.error(error));

//create a tab element for a user
function createTab(user) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.dataset.userId = user.id;
  tab.textContent = user.username;
  return tab;
}

// handle a tab click event
async function handleTabClick(event) {
  // Get the clicked tab element and its user ID
  const tab = event.target.closest(".tab");
  const userId = tab.dataset.userId;

  // Remove the "active" class from all tabs
  const tabs = Container.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active"));
  tab.classList.add("active");

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = await response.json();
    let postHtml = "";
    for (const post of posts) {
      postHtml += `<div class="post">${post.title}</div>`;
    }
    postContainer.innerHTML = postHtml;
  } catch (error) {
    console.error(error);
  }
}
