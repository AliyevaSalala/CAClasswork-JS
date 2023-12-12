let form = document.querySelector("form");
let inputsALL = document.querySelectorAll(".form-control");
// let icon = document.querySelector(".fa-eye");
// let noIcon = document.querySelector(".fa-eye-slash");
let hide1 = document.querySelector("#hide1");
let hide2 = document.querySelector("#hide2");

let arr = JSON.parse(localStorage.getItem("arr")) || [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let bool = arr.some((item) => {
    return (
      item.userName === inputsALL[0].value || item.email === inputsALL[1].value
    );
  });
  if (!bool) {
    let userObj = {
      userName: inputsALL[0].value,
      email: inputsALL[1].value,
      password: inputsALL[2].value,
      id: Date.now(),
    };
    arr.push(userObj);
    localStorage.setItem("arr", JSON.stringify(arr));
    window.location = "login.html";
  } else {
    window.alert("username or email already used");
  }
  inputsALL.forEach((item) => {
    item.value = "";
  });

  //   console.log(bool);
});

// icon.addEventListener("click", function () {
//   noIcon.classList.toggle("show");
//   icon.classList.contains("fa-eye")
//     ? (icon.classList = "fa-solid fa-eye-slash")
//     : (icon.classList = "fa-solid fa-eye");
// });

hide1.addEventListener("click", function () {
  if (inputsALL[2].type === "password") {
    inputsALL[2].type = "text";
    hide1.style.display = "block";
    hide2.style.display = "none";
  } else {
    inputsALL[2].type = "password";
    hide1.style.display = "none";
    hide2.style.display = "block";
  }
});
