let homeBtn = document.querySelector("#home");
let tarMenu = document.querySelector("#tra_menu");
let crossIcon = document.querySelector("#cross");
let body = document.querySelector("body");
let hamberIcon = document.querySelector("#hamber_menu");

const redirectTOHomePage = () => {
  location.href = "/homePage/index.html";
};

homeBtn.addEventListener("click", redirectTOHomePage);

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

let id = document.querySelectorAll('td[data-label="id"]');
let title = document.querySelectorAll('td[data-label="title"]');
let price = document.querySelectorAll('td[data-label="price"]');
let category = document.querySelectorAll('td[data-label="category"]');
let desc = document.querySelectorAll('td[data-label="desc"]');
let addBtn = document.querySelector("#add_btn");
let NewRow = document.createElement("tr");
let NewTd = document.createElement("td");

const products = [
  {
    id: 1,
    title: "Rolex",
    price: "1000$",
    discount: "0$",
    category: "Accessory",
    desc: "cscscsc",
  },
  {
    id: 2,
    title: "Civa",
    price: "800$",
    discount: "0$",
    category: "Accessory",
    desc: "dscsadccd",
  },
];

products.forEach((prodcut, index) => {
  if (products.length) {
    id[index].textContent = prodcut.id;
    title[index].textContent = prodcut.title;
    price[index].textContent = prodcut.price;
    category[index].textContent = prodcut.category;
    desc[index].textContent = prodcut.desc;
  }
});

const addNewProductTOTable = () => {
  location.href = "/AdminPanel/add-product-form/index.html";
};

addBtn.addEventListener("click", addNewProductTOTable());
