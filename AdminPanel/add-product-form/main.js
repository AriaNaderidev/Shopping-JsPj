let form = document.querySelector("#form");
let errorMessage = document.querySelector(".errorMessage");
let errorBox = document.querySelector(".errorBox");
const products = JSON.parse(localStorage.getItem("products")) || [];

const selectFunction = () => {
  if (form.elements.title.value == "")
    form.addEventListener("submit", addProduct);
  else form.addEventListener("submit", updateProductHanlder);
};

document.addEventListener("DOMContentLoaded", selectFunction);

const addProduct = (e) => {
  e.preventDefault();

  const { title, price, discount, exist, category, desc } = e.target.elements;

  const newProduct = {
    id: products.length > 0 ? products.at(-1).id + 1 : 1,
    title: title.value.trim(),
    price: +price.value,
    discount: +discount.value,
    exist: exist.checked,
    category: category.value,
    desc: (desc.value.trim().length === 0 ? "_" : desc.value).trim(),
  };

  //validating form ========>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  if (
    title.value.trim() === "" ||
    price.value.trim() === "" ||
    discount.value.trim() === ""
  ) {
    errorMessage.textContent = "You should fill information fields!";
    errorBox.style.display = "flex";
  } else if (0 > discount.value || discount.value > 100) {
    errorMessage.textContent =
      "Discount field value should be between 0 - 100!";
    errorBox.style.display = "flex";
  } else {
    errorBox.style.display = "none";
    products.push(newProduct);

    localStorage.setItem("products", JSON.stringify(products));

    title.value = "";
    price.value = "";
    discount.value = "";
    category.value = "";
    desc.value = "";
    location.href = "/adminPanel.html";
  }
};

//------------------------------end of adding new product-------------------------

const findSelectedproduct = () => {
  const { title, price, discount, exist, category, desc } = form.elements;
  const params = new URLSearchParams(window.location.search);
  let productId = params.get("updateProduct");

  if (productId) {
    let selectedproduct = products.find((product) => product.id == productId);
    //--------------------------------------------------put selected product in form inputs =>
    title.value = selectedproduct.title;
    price.value = selectedproduct.price;
    discount.value = selectedproduct.discount;
    exist.value = selectedproduct.exist;
    category.value = selectedproduct.category;
    desc.value = selectedproduct.desc;
  }
};

const updateProductHanlder = (e) => {
  e.preventDefault();
  const { title, price, discount, exist, category, desc } = e.target.elements;
  const params = new URLSearchParams(window.location.search);
  let productId = params.get("updateProduct");
  // find the index, based on ID
  let productIndex = products.findIndex((product) => product.id == productId);

  products[productIndex] = {
    ...products[productIndex],
    title: title.value,
    price: price.value,
    discount: discount.value,
    exist: exist.value,
    category: category.value,
    desc: desc.value,
  };

  localStorage.setItem("products", JSON.stringify(products));
  location.href = "/adminPanel.html";
};

findSelectedproduct();
