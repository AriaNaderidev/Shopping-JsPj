let form = document.querySelector("#form");
let errorMessage = document.querySelector(".errorMessage");
let errorBox = document.querySelector(".errorBox");
let isValide = true;

const addProduct = (e) => {
  e.preventDefault();

  const { title, price, discount, exist, category, desc } = e.target.elements;

  const products = JSON.parse(localStorage.getItem("products")) || [];

  const newProduct = {
    id: products.length > 0 ? products.at(-1).id + 1 : 1,
    title: title.value.trim(),
    price: +price.value.trim(),
    discount: +discount.value.trim(),
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
    errorBox.style.display = "flex";
    isValide = false;
  } else {
    errorBox.style.display = "none";
    products.push(newProduct);

    localStorage.setItem("products", JSON.stringify(products));

    title.value = "";
    price.value = "";
    discount.value = "";
    category.value = "";
    desc.value = "";
    location.href = "/AdminPanel/index.html";
  }
};

form.addEventListener("submit", addProduct);
//-------------------------------------------------------end of adding new product
