let homeBtn = document.querySelectorAll("#home");
let tarMenu = document.querySelector("#tra_menu");
let crossIcon = document.querySelector("#cross");
let body = document.querySelector("body");
let hamberIcon = document.querySelector("#hamber_menu");

const redirectTOHomePage = () => {
  location.href = "/homePage/index.html";
};

homeBtn.forEach((btn) => {
  btn.addEventListener("click", redirectTOHomePage);
});

const openTraMenu = () => {
  hamberIcon.style.display = "none";
  tarMenu.style.left = 0;
  body.style.overflow = "hidden";
};

const closeTraMenu = () => {
  tarMenu.style.left = -100 + "%";
  body.style.overflow = "auto";
  hamberIcon.style.display = "block";
};

hamberIcon.addEventListener("click", openTraMenu);
crossIcon.addEventListener("click", closeTraMenu);
// end of css transition javaScript code ---------------------------------------------------------

let addBtn = document.querySelector("#add_btn");
let addBtn2 = document.querySelector("#add_btn2");
let addUserBtn = document.querySelector("#add_user_btn");
let addUserBtn2 = document.querySelector("#add_user_btn2");
let table = document.querySelector("#table");
let tableTwo = document.querySelector(".tableTwo");
let products = JSON.parse(localStorage.getItem("products")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];

if (products.length || users.length) {
  users.forEach((user) => {
    tableTwo.innerHTML += `<tr>
  <td>${user.id}</td>
  <td>${user.userName}</td>
  <td>${user.fullName}</td>
  <td>${user.email}</td>
  <td>${user.sex}</td>
  </tr>`;
  });

  products.forEach((product) => {
    table.innerHTML += `<tr>
    <td>${product.id}</td>
    <td>${product.title}</td>
    <td>${product.price}$</td>
    <td>${product.discount}%</td>
    <td>${product.category}</td>
    <td>${product.exist ? "Exist" : "Not exist"}</td>
    <td>${product.desc}</td>
    </tr>`;
  });
}

const addNewProductTOTable = () => {
  location.href = "/AdminPanel/add-product-form/index.html";
};

const addNewUserTOTable = () => {
  location.href = "/AdminPanel/add-user-form/index.html";
};

addBtn.addEventListener("click", addNewProductTOTable);
addBtn2.addEventListener("click", addNewProductTOTable);
addUserBtn.addEventListener("click", addNewUserTOTable);
addUserBtn2.addEventListener("click", addNewUserTOTable);
//-----------------------------------------------------------end of showing products
let boxProductBtn = document.querySelector("#boxP");
let boxUserBtn = document.querySelector("#boxU");
let traUserBtn = document.querySelector("#traU");
let traProBtn = document.querySelector("#traP");
let alertt = document.querySelector("#alert");

const showProductsTable = () => {
  addUserBtn.style.display = "none";
  addUserBtn2.style.display = "none";
  addBtn.style.display = "block";
  table.style.display = " inline-table";
  tableTwo.style.display = "none";
  alertt.style.display = "none";
  addBtn2.style.display = "block";
  closeTraMenu();
};

const showUsersTable = () => {
  addUserBtn.style.display = "block";
  addBtn.style.display = "none";
  table.style.display = "none";
  tableTwo.style.display = " inline-table";
  alertt.style.display = "none";
  addUserBtn2.style.display = "block";
  addBtn2.style.display = "none";
  closeTraMenu();
};

const showProductsTable2 = () => {
  tableTwo.style.display = "none";
  table.style.display = " inline-table";
  addBtn2.style.display = "block";
  addUserBtn2.style.display = "none";
  alertt.style.display = "none";
  addBtn.style.display = "block";
  addUserBtn.style.display = "none";
};

const showUsersTable2 = () => {
  tableTwo.style.display = " inline-table";
  table.style.display = "none";
  addBtn2.style.display = "none";
  addUserBtn2.style.display = "block";
  alertt.style.display = "none";
  addUserBtn.style.display = "block";
};

boxProductBtn.addEventListener("click", showProductsTable2);
boxUserBtn.addEventListener("click", showUsersTable2);

traProBtn.addEventListener("click", showProductsTable);
traUserBtn.addEventListener("click", showUsersTable);
