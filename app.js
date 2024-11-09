console.log("Script is Linked");

const backgrounds = [
  //   "/images/footballField.webp",
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
  backgrounds[i];
  i = (i + 1) % backgrounds.length;
}
setInterval(changeBackground, 3500);
