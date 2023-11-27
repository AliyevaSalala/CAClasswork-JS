let form = document.querySelector("form");
let inputs = document.querySelectorAll(".input");

let user = JSON.parse(localStorage.getItem("user")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let bool = user.some(
    (item) =>
      item.firstName === inputs[0].value || item.lastName === inputs[1].value
  );

  if (!bool) {
    let userObj = {
      firstName: inputs[0].value,
      lastName: inputs[1].value,
      address: inputs[2].value,
      id: Date.now(),
    };

    user.push(userObj);
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    window.alert("username or email already used");
  }
  inputs.forEach((item) => {
    item.value = "";
  });
});
