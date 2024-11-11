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
      { text: "Two Minute Drill", href: "/pages/Practice/football.html" },
      { text: "Buzzer Beater", href: "/pages/Practice/basketball.html" },
      { text: "Bottom of The Ninth", href: "/pages/Practice/baseball.html" },
      { text: "Penalty Shot", href: "/pages/Practice/soccer.html" },
    ],
  },
];

// Reference to the top and submenu elements
const topMenu = document.getElementById("top-menu");
const subMenu = document.getElementById("sub-menu");

// Create main menu links
menuLinks.forEach((link) => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenu.append(a);
});

// Event listener for top menu clicks
// Event listener for top menu clicks
topMenu.addEventListener("click", (evt) => {
  if (evt.target.tagName !== "A") return;

  const clickedLink = menuLinks.find(
    (link) => link.text === evt.target.textContent
  );

  // Check if the clicked link has sublinks
  if (clickedLink && clickedLink.subLinks) {
    evt.preventDefault(); // Prevent default only if submenu is needed

    // Check if the submenu is already open for the same menu item
    if (
      subMenu.classList.contains("show") &&
      subMenu.innerHTML.includes(clickedLink.text)
    ) {
      // If submenu is visible and the same menu item is clicked again, hide it
      subMenu.classList.remove("show");
    } else {
      // Otherwise, build the submenu and show it
      buildSubMenu(clickedLink.subLinks);
      subMenu.classList.add("show");
    }
  } else {
    // Hide submenu if the link doesn't have sublinks
    subMenu.classList.remove("show");
  }
});


// Function to build submenu items
function buildSubMenu(subLinks) {
  subMenu.innerHTML = ""; // Clear existing subMenu content
  subLinks.forEach((subLink) => {
    const subMenuLink = document.createElement("a");
    subMenuLink.href = subLink.href;
    subMenuLink.textContent = subLink.text;
    subMenuLink.setAttribute("target", "_blank");
    subMenu.appendChild(subMenuLink);
  });
}

// Event listener to hide submenu when clicking on submenu items
subMenu.addEventListener("click", (evt) => {
  if (evt.target.tagName !== "A") return;

  subMenu.classList.remove("show"); // Hide submenu after clicking a link
});
