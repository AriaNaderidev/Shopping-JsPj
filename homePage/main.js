let searchBtn = document.querySelector("#search_btn");
let searchBtnChecking;
let searchInp = document.querySelector("#search_inp");
let searchContainer = document.querySelector("#search_container");

const searchBtnEffect = () => {
  searchBtn.style.scale = 1.2;
  searchBtnChecking = !searchBtnChecking;

  if (searchBtnChecking) {
    searchBtn.style.scale = 1;
    searchInp.style.transform = "translateX(-60px)";
    searchInp.style.opacity = 1;
  } else {
    searchInp.style.transform = "translateX(-200px)";
    searchInp.style.opacity = 0;
    searchInp.value = "";
  }
};

searchBtn.addEventListener("click", searchBtnEffect);
