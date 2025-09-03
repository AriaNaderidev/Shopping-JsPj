// ?  ----- variables
// * search feature data
let searchBtn = document.querySelector("#search_btn");
let searchBtnChecking;
let searchInp = document.querySelector("#search_inp");
let searchContainer = document.querySelector("#search_container");
let hamberIcon = document.querySelector("#hamber_menu");
let tarMenu = document.querySelector("#tra_menu");
let crossIcon = document.querySelector("#cross");
let body = document.querySelector("body");
let logInBtn = document.querySelectorAll(".logIn");

// * show products
let productsView = document.querySelector("#products_view");
let products = JSON.parse(localStorage.getItem("products")) || [];
let logedInUsers = localStorage.getItem("logedInUsers") || [];
let likedProduct = JSON.parse(localStorage.getItem("likedProducts")) || {};

// ?  ----- functions
// * search button transition animation handler
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

// * using inner (cleanup function) for toggling.
const toggleTra = () => {
  if (tarMenu.style.left !== 0 + "px") {
    tarMenu.style.left = 0;
    body.style.overflow = "hidden";
  } else {
    tarMenu.style.left = -100 + "%";
    body.style.overflow = "auto";
  }
};

// * end of elements animation

const likeProduct = (productId, el) => {
  // check if a user is logged in
  if (logedInUsers) {
    // check if the logged in user has previusly liked products
    if (likedProduct[logedInUsers]) {
      el.classList.remove("fa-solid");
      el.classList.add("fa-regular");
      // check if user has liked the product. so, we remove the product from their liked products.
      if (likedProduct[logedInUsers]?.includes(productId)) {
        let newLikedProducts = likedProduct[logedInUsers];
        if (el.classList.contains("fa-solid")) {
          el.classList.remove("fa-solid");
          el.classList.add("fa-regular");
        }
        newLikedProducts = newLikedProducts.filter((id) => id !== productId);
        likedProduct[logedInUsers] = newLikedProducts;
        localStorage.setItem("likedProducts", JSON.stringify(likedProduct));
      } else {
        // else: user hasn't liked the product yet
        el.classList.remove("fa-regular");
        el.classList.add("fa-solid");
        likedProduct[logedInUsers].push(productId);
        localStorage.setItem("likedProducts", JSON.stringify(likedProduct));
      }
    } else {
      // else: user doesn't exist in the likedProducts object, so we add them. and add the productId as their first liked product.
      el.classList.remove("fa-regular");
      el.classList.add("fa-solid");
      likedProduct[logedInUsers] = [productId];
      localStorage.setItem("likedProducts", JSON.stringify(likedProduct));
    }
  }
};

// * insert products into page view
const insertProducts = () => {
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
         <span id="like_btn"><span class="${
           likedProduct[logedInUsers]?.includes(product.id)
             ? "fa-solid"
             : "fa-regular"
         } fa-heart heart" id="heart" onClick="likeProduct(${
        product.id
      }, this)" ></span></span>
        <img src="/homePage/products-pics/wristwatch2.jpg" alt="product" />
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

// * event listeners
hamberIcon.addEventListener("click", toggleTra);
crossIcon.addEventListener("click", toggleTra);
searchBtn.addEventListener("click", searchBtnEffect);
document.addEventListener("DOMContentLoaded", insertProducts);

logInBtn.forEach((btn) => {
  btn.addEventListener("click", () => (location.href = "/loginPage.html"));
});
