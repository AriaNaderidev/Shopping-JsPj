// let users = document.querySelector("#users");
// let discount = document.querySelector("#discount");
// let product = document.querySelector("#product");

// users.addEventListener("click", "showUserTable()");

// const showUserTable = () => {
//   console.log("hi");
// };

let homeBtn = document.querySelector("#home");

const redirectTOHomePage = () => {
  location.href = "/homePage/index.html";
};

homeBtn.addEventListener("click", redirectTOHomePage);
