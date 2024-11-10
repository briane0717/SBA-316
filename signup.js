const registration = document.querySelector("#registration");
const userName = registration.elements["username"];
const email = registration.elements["email"];
const password = registration.elements["password"];
const passwordCheck = registration.elements["password-confirm"];
registration.addEventListener("submit", validateRegitration);
function validateRegistration(evt) {
  evt.preventDefault();
}
