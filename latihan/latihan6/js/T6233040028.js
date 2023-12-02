const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav");
const navBar = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  navBar.classList.toggle("slide");
});
