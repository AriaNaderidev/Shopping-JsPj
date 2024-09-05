//username,full name,  email , password , gender ;
let form = document.querySelector("#form");
let errorMessage = document.querySelector(".errorMessage");
let errorBox = document.querySelector(".errorBox");

const addProduct = (e) => {
  e.preventDefault();

  const { userName, password, fullName, email, sex } = e.target.elements;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const newUsers = {
    id: users.length > 0 ? users.at(-1).id + 1 : 1,
    userName: userName.value.trim(),
    password: password.value.trim(),
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    sex: sex.value,
  };

  //validating form ========>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  if (
    userName.value.trim() === "" ||
    password.value.trim() === "" ||
    fullName.value.trim() === "" ||
    email.value.trim() === ""
  ) {
    errorMessage.textContent = "You should fill information fields!";
    errorBox.style.display = "flex";
  } else if (password.value.length < 8) {
    errorBox.style.display = "flex";
    errorMessage.textContent = "Password must be at least 8 characters!";
  } else {
    errorBox.style.display = "none";
    errorMessage.textContent = "";
    users.push(newUsers);

    localStorage.setItem("users", JSON.stringify(users));

    userName.value = "";
    password.value = "";
    fullName.value = "";
    email.value = "";
    sex.value = "";
    location.href = "/AdminPanel/index.html";
  }
};

form.addEventListener("submit", addProduct);
//-------------------------------------------------------end of adding new product
