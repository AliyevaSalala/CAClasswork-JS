let toggleBtn = document.querySelector(".toggle-btn");

localStorage.getItem("dark-mode") === "true" &&
  document.body.classList.add("dark-mode");
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  localStorage.getItem("dark=mode") === "true"
    ? localStorage.setItem("dark-mode", false)
    : localStorage.setItem("dark-mode", true);
});
