let form = document.querySelector("#form");

const addProduct = (e) => {
  e.preventDefault();

  const { title, price, discount, exist, category, desc } = e.target.elements;

  const products = JSON.parse(localStorage.getItem("products")) || [];

  const newProduct = {
    id: products.length > 0 ? products.at(-1).id + 1 : 1,
    title: title.value,
    price: price.value,
    discount: discount.value,
    exist: exist.checked,
    category: category.value,
    desc: desc.value,
  };

  products.push(newProduct);

  localStorage.setItem("products", JSON.stringify(products));

  location.href = "/AdminPanel/index.html";

  title.value = "";
  price.value = "";
  discount.value = "";
  category.value = "";
  desc.value = "";
};

form.addEventListener("submit", addProduct);
//-------------------------------------------------------end of adding new product
