const menuLinks = [
  { text: "Home", href: "/index.html" },
  {
    text: "LTG",
    href: "#",
    subLinks: [
      { text: "Football", href: "/pages/LTG/football.html" },
      { text: "Basketball", href: "/pages/LTG/basketball.html" },
      { text: "Baseball", href: "/pages/LTG/baseball.html" },
      { text: "Soccer", href: "/pages/LTG/soccer.html" },
    ],
  },
  {
    text: "Practice",
    href: "#",
    subLinks: [
      { text: "Two Minute Drill", href: "/pages/Drills/football.html" },
      { text: "Buzzer Beater", href: "/pages/Drills/basketball.html" },
      { text: "Bottom of The Ninth", href: "/pages/Drills/baseball.html" },
      { text: "Penalty Shot", href: "/pages/Drills/soccer.html" },
    ],
  },
];

// Reference to the top and submenu elements
const topMenu = document.querySelector("#top-menu");
const subMenu = document.querySelector("#sub-menu");

// Create main menu links
menuLinks.forEach((link) => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenu.append(a);
});

// Event listener for top menu clicks
topMenu.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.tagName !== "A") return;

  const clickedLink = menuLinks.find(
    (link) => link.text === evt.target.textContent
  );

  if (clickedLink && clickedLink.subLinks) {
    buildSubMenu(clickedLink.subLinks);
    subMenu.classList.add("show"); // Show submenu
  } else {
    subMenu.classList.remove("show"); // Hide submenu if no sublinks
  }
});

// Function to build submenu items
function buildSubMenu(subLinks) {
  subMenu.innerHTML = ""; // Clear existing subMenu content
  subLinks.forEach((subLink) => {
    const subMenuLink = document.createElement("a");
    subMenuLink.href = subLink.href;
    subMenuLink.textContent = subLink.text;
    subMenu.appendChild(subMenuLink);
  });
}

// Event listener to hide submenu when clicking on submenu items
subMenu.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.tagName !== "A") return;

  subMenu.classList.remove("show"); // Hide submenu after clicking a link
});
