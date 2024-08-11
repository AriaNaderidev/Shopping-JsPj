let hamberIcon = document.querySelector("#hamber_menu");
let tarMenu = document.querySelector("#tra_menu");
let crossIcon = document.querySelector("#cross");
let body = document.querySelector("body");
let heartIcon = document.querySelectorAll(".heart");

const openTraMenu = () => {
  tarMenu.style.left = 0;
  hamberIcon.style.opacity = 0;
};

const closeTraMenu = () => {
  tarMenu.style.left = -100 + "%";
  hamberIcon.style.opacity = 1;
};

const changeHeartClass = ({ target: { classList } }) => {
  if (classList.contains("fa-regular")) {
    classList.remove("fa-regular");
    classList.add("fa-solid");
    return;
  }
  classList.remove("fa-solid");
  classList.add("fa-regular");
};

heartIcon.forEach((item) => {
  console.log(item);
  item.addEventListener("click", changeHeartClass);
});

// heartIcon.addEventListener("click", changeHeartClass);
hamberIcon.addEventListener("click", openTraMenu);
crossIcon.addEventListener("click", closeTraMenu);
