let formSignUp = document.querySelector("#formSignUp");
let errorMessage = document.querySelector(".errorMessage");
let errorBox = document.querySelector(".errorBox");
const users = JSON.parse(localStorage.getItem("users")) || [];
let logInLink = document.querySelector("#logInLink");

const logInLinkRedirect = () => {
  location.href = "/loginForm.html";
};

logInLink.addEventListener("click", logInLinkRedirect);

const signUp = (e) => {
  e.preventDefault();
  const { userName, password, fullName, email, bio, sex } = e.target.elements;
  const newUser = {
    id: users.length > 0 ? users.at(-1).id + 1 : 1,
    userName: userName.value.trim(),
    password: password.value.trim(),
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    bio: bio.value.trim(),
    sex: sex.value,
    role: "user",
  };

  //validating=>
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
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    location.href = "/loginForm.html";
  }
};

formSignUp.addEventListener("submit", signUp);
