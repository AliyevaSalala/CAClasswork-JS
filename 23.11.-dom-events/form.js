let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let form = document.querySelector(".form");
let checkBox = document.getElementById("exampleCheck1");

form.addEventListener("submit", function (event) {
  console.log(checkBox);
  event.preventDefault();

  if (email.value !== "" && password.value !== "") {
    let user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
  } else {
    alert("input fields can not be empty");
  }
});
