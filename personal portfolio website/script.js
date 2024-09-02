// Dark Mode Toggle
const toggleButton = document.getElementById("darkmode");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("darkmode");
});
