let form = document.querySelector("form");
let inputsALL = document.querySelectorAll(".form-control");
let icon = document.querySelector(".fa-eye");
let icon2 = document.querySelector(".fa-eye-slash");
let arr = JSON.parse(localStorage.getItem("arr")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let user = arr.find(
    (item) =>
      item.email === inputsALL[0].value && item.password === inputsALL[1].value
  );

  if (user) {
    localStorage.setItem("userName", user.userName);
    window.location = "home.html";
  } else {
    window.alert("username or password is not correct!!");
  }
  inputsALL.forEach((item) => {
    item.value = "";
  });
});

icon.addEventListener("click", function () {
  inputsALL[1].type = "text";
  this.style.display = "none";
  icon2.style.display = "block";
});
icon2.addEventListener("click", function () {
  inputsALL[1].type = "password";
  this.style.display = "none";
  icon.style.display = "block";
});


