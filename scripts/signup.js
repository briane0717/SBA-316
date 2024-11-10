console.log("script is running");
const registration = document.querySelector("#registration");
const userName = registration.elements["username"];
const email = registration.elements["email"];
const password = registration.elements["password"];
const passwordCheck = registration.elements["passwordCheck"];

registration.addEventListener("submit", validateRegistration);

// Registration validation
function validateRegistration(evt) {
  evt.preventDefault();

  const nameVal = validateName();
  if (!nameVal) return false;

  const emailVal = validateEmail();
  if (!emailVal) return false;

  const passwordVal = validatePassword(nameVal);
  if (!passwordVal) return false;

  if (localStorage.getItem(nameVal.toLowerCase())) {
    alert("Username is already taken.");
    userName.focus();
    return false;
  }

  storeUserData(nameVal, emailVal, passwordVal);
  clearFormFields();
}

// Validation helper functions
function validateName() {
  let nameVal = userName.value.trim().toLowerCase();
  if (!nameVal || nameVal.length < 4) {
    alert("Username must be at least four characters long.");
    userName.focus();
    return false;
  }

  if (!/^[a-zA-Z0-9]+$/.test(nameVal)) {
    alert("Username cannot contain special characters or whitespace.");
    userName.focus();
    return false;
  }

  if (new Set(nameVal).size < 2) {
    alert("Username must contain at least two unique characters.");
    userName.focus();
    return false;
  }

  return nameVal;
}

function validateEmail() {
  let emailVal = email.value.trim().toLowerCase();
  const excludedDomains = ["example.com"];
  const domain = emailVal.split("@")[1];

  if (excludedDomains.includes(domain)) {
    alert("Email cannot be from example.com.");
    email.focus();
    return false;
  }

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");
  if (atpos < 1 || dotpos - atpos < 2) {
    alert("Please provide a valid email address.");
    email.focus();
    return false;
  }

  return emailVal;
}

function validatePassword(nameVal) {
  let passwordVal = password.value;
  const hasUpperCase = /[A-Z]/.test(passwordVal);
  const hasLowerCase = /[a-z]/.test(passwordVal);
  const hasNumber = /[0-9]/.test(passwordVal);
  const hasSpecialCharacter = /[^a-zA-Z0-9]/.test(passwordVal);

  if (
    passwordVal.length < 8 ||
    !hasUpperCase ||
    !hasLowerCase ||
    !hasNumber ||
    !hasSpecialCharacter
  ) {
    alert(
      "Password must be at least 8 characters long, containing uppercase, lowercase, a number, and a special character."
    );
    password.focus();
    return false;
  }

  if (/password/i.test(passwordVal)) {
    alert("Password cannot contain the word 'password'.");
    password.focus();
    return false;
  }

  if (passwordVal === nameVal || passwordVal !== passwordCheck.value) {
    alert(
      "Password must be different from the username and match the confirmation."
    );
    passwordCheck.focus();
    return false;
  }

  return passwordVal;
}

function storeUserData(nameVal, emailVal, passwordVal) {
  localStorage.setItem(nameVal.toLowerCase(), passwordVal);
  localStorage.setItem(`${nameVal}_email`, emailVal);
}

function clearFormFields() {
  userName.value = "";
  email.value = "";
  password.value = "";
  passwordCheck.value = "";
}
