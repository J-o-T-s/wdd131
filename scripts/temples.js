// Footer dynamic content
document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger menu
const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  // toggle icon
  menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
});
