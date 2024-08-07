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
