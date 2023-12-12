let form = document.querySelector("form");
let inputsALL = document.querySelectorAll(".form-control");
let icon = document.querySelector(".fa-eye");

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

icon.addEventListener("click", function () {
  if (this.className === "fa-eye") {
    inputsALL[2].type = "text";
    this.className = "fa-eye-slash";
  } else {
    inputsALL[2].type = "password";
    this.className = "fa-eye";
  }
});

