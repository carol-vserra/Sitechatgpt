const button = document.getElementById("toggle-mode");
const body = document.body;

button.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});