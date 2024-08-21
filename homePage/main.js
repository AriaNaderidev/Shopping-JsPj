let searchBtn = document.querySelector("#search_btn");
let searchBtnChecking;
let searchInp = document.querySelector("#search_inp");
let searchContainer = document.querySelector("#search_container");
let hamberIcon = document.querySelector("#hamber_menu");
let tarMenu = document.querySelector("#tra_menu");
let crossIcon = document.querySelector("#cross");
let body = document.querySelector("body");

const searchBtnEffect = () => {
  searchBtn.style.scale = 1.2;
  searchBtnChecking = !searchBtnChecking;

  if (searchBtnChecking) {
    searchBtn.style.scale = 1;
    searchInp.style.opacity = 1;
    searchInp.style.pointerEvents = "auto";
  } else {
    searchInp.style.opacity = 0;
    searchInp.style.pointerEvents = "none";
    searchInp.value = "";
  }
};

searchBtn.addEventListener("click", searchBtnEffect);

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
//-------------------------------------------------------------end of elements animation
let productsView = document.querySelector("#products_view");
let adminPanelBtn = document.querySelector("#adminPanel");

const insertProductsToPageView = () => {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  if (products.length)
    products.forEach((product) => {
      let priceClassName = product.discount ? "discounted-price" : "";
      let discountedPriceClassName =
        product.discount <= 0 || !product.discount
          ? "hideDiscount"
          : "showDiscount";
      let discountNumber = (product.price * product.discount) / 100;
      let newPrice = product.price - discountNumber;

      productsView.innerHTML += `
      <section class="products">
        <img src="products-pics/wristwatch2.jpg" alt="product" />
        <div class="info">
        <h1 id="title">${product.title}</h1>
        <h3 class="${priceClassName}">${product.price}$</h3>
        <h3 class="${discountedPriceClassName}">${newPrice}$</h3>
        <h3>${product.category}</h3>
        </div>
      </section>
      `;
    });
};

const redirectToAdminPanel = () => {
  location.href = "../AdminPanel/index.html";
};

adminPanelBtn.addEventListener("click", redirectToAdminPanel);
document.addEventListener("DOMContentLoaded", insertProductsToPageView);
