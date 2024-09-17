let form = document.querySelector("#form");
let errorMessage = document.querySelector(".errorMessage");
let errorBox = document.querySelector(".errorBox");
const users = JSON.parse(localStorage.getItem("users")) || [];

const selectFunction = () => {
  if (form.elements.userName.value == "")
    form.addEventListener("submit", addUsers);
  else form.addEventListener("submit", updateUserHanlder);
};

document.addEventListener("DOMContentLoaded", selectFunction);

const addUsers = (e) => {
  e.preventDefault();

  const { userName, password, fullName, email, sex } = e.target.elements;

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

//-------------------------------------------------------end of adding new product
const findSelectedUser = () => {
  const { userName, password, fullName, email, sex } = form.elements;
  const params = new URLSearchParams(window.location.search);
  let userId = params.get("updateUser");

  if (userId) {
    let selectedUser = users.find((user) => user.id == userId);
    //--------------------------------------------------put selected user in form inputs =>
    userName.value = selectedUser.userName;
    password.value = selectedUser.password;
    fullName.value = selectedUser.fullName;
    email.value = selectedUser.email;
    sex.value = selectedUser.sex;
  }
};

const updateUserHanlder = (e) => {
  e.preventDefault();
  const { userName, password, fullName, email, sex } = e.target.elements;
  const params = new URLSearchParams(window.location.search);
  let userId = params.get("updateUser");
  // find the index, based on ID
  let userIndex = users.findIndex((user) => user.id == userId);

  users[userIndex] = {
    ...users[userIndex],
    userName: userName.value,
    password: password.value,
    fullName: fullName.value,
    email: email.value,
    sex: sex.value,
  };

  localStorage.setItem("users", JSON.stringify(users));
  location.href = "/AdminPanel/index.html";
};

findSelectedUser();
