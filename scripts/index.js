console.log("Script is Linked");

const backgrounds = [
  // "/images/American-Football-Field-on-Grass-526806895_741x476.jpeg",
  "/images/footballField2.jpeg",
  "/images/basketballCourt4.jpeg",
  "/images/baseballStadium.jpeg",
  "/images/soccerStadium.jpeg",
  //   "/images/basketballCourt.webp",
  //   "/images/baseballField.webp",
  //   "/images/soccerField.webp",
];
let i = 0;
function changeBackground() {
  document.body.style.backgroundImage = `url(${backgrounds[i]})`;
  i = (i + 1) % backgrounds.length;
}
setInterval(changeBackground, 3500);

const signUpButton = document.getElementById("signup");
signUpButton.addEventListener("click", function () {
  window.location.href = "/pages/signup.html";
});
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function () {
  window.location.href = "/pages/login.html";
});
