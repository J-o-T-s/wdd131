const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => { navLinks.classList.toggle("show"); });

// DARK MODE
const toggleBtn = document.getElementById("theme-toggle");
const prefersDark = localStorage.getItem("theme") === "dark";
if (prefersDark) document.body.classList.add("dark");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
});

// YEAR + LAST MODIFIED
const yearSpan = document.getElementById("year");
const modSpan = document.getElementById("lastModified");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (modSpan) modSpan.textContent = document.lastModified;

// TUTORIALS DATA
const tutorials = [
  { title: "Beginner Digital Art", desc: "Start your journey with basic shapes and shading." },
  { title: "Color Theory Essentials", desc: "Understand hue, saturation, contrast, harmony." },
  { title: "2D Animation Basics", desc: "Learn keyframing, motion arcs, squash & stretch." }
];

const list = document.getElementById("tutorial-list");
if (list) {
  tutorials.forEach(item => {
    const card = document.createElement("div");
    card.className = "tutorial-card";
    card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
    list.appendChild(card);
  });
}

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formMessage.textContent = "Message sent successfully!";
  });
}