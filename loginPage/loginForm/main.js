let signUpLink = document.querySelector("#signUpLink");
let formLogIn = document.querySelector("#formLogIn");
let users = JSON.parse(localStorage.getItem("users")) || [];
let tBody = document.querySelector("#tBody_users");
let errorMessage = document.querySelector(".errorMessage");
let errorBox = document.querySelector(".errorBox");
let table = document.querySelector("#userTable");
let userWishList = document.querySelector("#user_wishlist");
let wishListAlertContainer = document.querySelector("#wish_alert_container");
let header = document.querySelector("header");
let homePageBtn = document.querySelector("#home_page_btn");
let main = document.querySelector("main");
let logInBtn = document.querySelector("#log_in_btn");
let logedInUsers = JSON.parse(localStorage.getItem("logedInUsers")) || "";

const redirectToHomePage = () => {
  location.href = "";
  location.href = "/homePage/index.html";
};

homePageBtn.addEventListener("click", redirectToHomePage);

const logOutHandler = () => {
  localStorage.removeItem("logedInUsers");
  formLogIn.style.display = "flex";

  main.style.bottom = 0;
  main.style.height = 100 + "%";

  table.style.display = "none";

  header.style.display = "none";
  userWishList.style.display = "none";
  wishListAlertContainer.style.display = "none";
};

const redirectTOLogIngPage = () => {
  logOutHandler();
};

logInBtn.addEventListener("click", redirectTOLogIngPage);

const signUpLinkRedirect = () => {
  location.href = "../index.html";
};

signUpLink.addEventListener("click", signUpLinkRedirect);

const checkLoggedInUser = () => {
  // debugger;
  if (logedInUsers) {
    showUserInfo();
  } else {
    logOutHandler();
  }
};

document.addEventListener("DOMContentLoaded", checkLoggedInUser);

const showUserInfo = () => {
  // debugger;
  const likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || {};
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const user = users.find((user) => user.id === logedInUsers);
  console.log(user);

  if (user)
    tBody.innerHTML = `
    <tr>
    <td>${user.userName}</td>
    <td>${user.password}</td>
    <td>${user.fullName}</td>
    <td>${user.email}</td>
    <td>${user.bio ? user.bio : "_"}</td>
    <td>${user.sex}</td>
    <td>${user.role}</td>
    </tr>
    `;

  formLogIn.style.display = "none";

  main.style.bottom = -7 + "%";
  main.style.height = 93 + "%";

  table.style.display = "block";
  header.style.display = "flex";
  userWishList.style.display = "none";
  wishListAlertContainer.style.display = "none";

  if (logedInUsers in likedProducts) {
    wishListAlertContainer.style.display = "none";
    userWishList.style.display = "flex";

    products.forEach((pro) => {
      if (likedProducts[logedInUsers].includes(pro.id)) {
        userWishList.innerHTML += `
        <section class="fav_product">
        <h1>${pro.title}</h1>
        <h3>${pro.price}$</h3>
        <img src="/loginPage/pics/wristwatch2.jpg" alt="" />
        </section>
        `;
      }
    });
  } else {
    userWishList.style.display = "none";
    wishListAlertContainer.style.display = "block";
  }
  logInBtn.textContent = "";
  logInBtn.textContent = "Log out";
  logInBtn.addEventListener("click", logOutHandler);
};

const logIn = (e) => {
  // debugger;
  e.preventDefault();
  const { userName, password } = e.target.elements;

  let userNameInput = userName.value.trim();
  let passWordInput = password.value.trim();

  if (userNameInput === "" || passWordInput === "") {
    errorMessage.textContent = "You should fill information fields!";
    errorBox.style.display = "flex";
    return;
  }

  let user = users.find(
    (user) => user.userName === userNameInput && user.password === passWordInput
  );

  if (!user) {
    errorMessage.textContent = "You don't have an account , go for sign up!";
    errorBox.style.display = "flex";
  } else {
    errorMessage.textContent = "";
    errorBox.style.display = "none";
    localStorage.removeItem("logedInUsers");
    localStorage.setItem("logedInUsers", JSON.stringify(user.id));

    userName.value = "";
    password.value = "";
    tBody.innerHTML = "";
    userWishList.innerHTML = "";
    location.reload();
  }
};

formLogIn.addEventListener("submit", logIn);
