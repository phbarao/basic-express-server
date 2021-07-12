import users from "../data/users.js";

const logButton = document.querySelector(".log-button");

logButton.addEventListener("click", () => {
  console.log(users);
});
