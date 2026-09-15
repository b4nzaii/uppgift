const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");

  const menuOpen = hamburger.classList.contains("active");

  hamburger.setAttribute("aria-expanded", menuOpen);
  hamburger.setAttribute("aria-label", menuOpen ? "Stäng meny" : "Öppna meny");
});
// källa: https://dev.to/webdeasy/10-awesome-css-hamburger-menus-1iho
