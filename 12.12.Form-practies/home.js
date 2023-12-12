const logOutBtn = document.querySelector(".logOutBtn");

window.addEventListener("load", function () {
  localStorage.getItem("arr") ? null : (window.location = "login.html");
});

logOutBtn.addEventListener("click", function () {
  confirm("are you sure log out?") && localStorage.clear();
  window.location.reload();
});


