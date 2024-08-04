let searchBtn = document.querySelector("#search_btn");
let searchBtnChecking;
let searchInp = document.querySelector("#search_inp");
let searchContainer = document.querySelector("#search_container");
let hamberIcon = document.querySelector("#hamber_menu");
let tarMenu = document.querySelector("#tra_menu");
let crossIcon = document.querySelector("#cross");

const searchBtnEffect = () => {
  searchBtn.style.scale = 1.2;
  searchBtnChecking = !searchBtnChecking;

  if (searchBtnChecking) {
    searchBtn.style.scale = 1;
    searchInp.style.transform = "translateX(-10px)";
    searchInp.style.opacity = 1;
    searchInp.style.pointerEvents = "auto";
  } else {
    searchInp.style.transform = "translateX(250px)";
    searchInp.style.opacity = 0;
    searchInp.style.pointerEvents = "none";
    searchInp.value = "";
  }
};

searchBtn.addEventListener("click", searchBtnEffect);

const openTraMenu = () => {
  tarMenu.style.left = 0;
};

const closeTraMenu = () => {
  tarMenu.style.left = -100 + "%";
};

hamberIcon.addEventListener("click", openTraMenu);
crossIcon.addEventListener("click", closeTraMenu);
