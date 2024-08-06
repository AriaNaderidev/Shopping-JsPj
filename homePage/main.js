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
