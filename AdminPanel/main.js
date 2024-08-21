let homeBtn = document.querySelectorAll("#home");
let tarMenu = document.querySelector("#tra_menu");
let crossIcon = document.querySelector("#cross");
let body = document.querySelector("body");
let hamberIcon = document.querySelector("#hamber_menu");
let productsView = document.querySelector("#main");

const redirectTOHomePage = () => {
  location.href = "/homePage/index.html";
};

homeBtn.forEach((btn) => {
  btn.addEventListener("click", redirectTOHomePage);
});

const openTraMenu = () => {
  tarMenu.style.left = 0;
  body.style.overflow = "hidden";
};

const closeTraMenu = () => {
  tarMenu.style.left = -100 + "%";
  body.style.overflow = "auto";
};

hamberIcon.addEventListener("click", openTraMenu);
crossIcon.addEventListener("click", closeTraMenu);
// end of css transition javaScript code ---------------------------------------------------------

let addBtn = document.querySelector("#add_btn");
let addBtn2 = document.querySelector("#add_btn2");
let table = document.querySelector("#table");
let products = JSON.parse(localStorage.getItem("products")) || [];

if (products.length)
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

const addNewProductTOTable = () => {
  location.href = "/AdminPanel/add-product-form/index.html";
};

addBtn.addEventListener("click", addNewProductTOTable);
addBtn2.addEventListener("click", addNewProductTOTable);
//-----------------------------------------------------------end of showing products
let productsBtns = document.querySelectorAll(".products");
let usersBtns = document.querySelectorAll(".users");

const showProductsTable = () => {
  productsView.style.display = "flex";
  addBtn.style.display = "block";
};

const showUsersTable = () => {
  productsView.style.display = "none";
  addBtn.style.display = "none";
};

productsBtns.forEach((btn) => {
  btn.addEventListener("click", showProductsTable);
});

usersBtns.forEach((btn) => {
  btn.addEventListener("click", showUsersTable);
});
