let form = document.querySelector("form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let address = document.querySelector("#address");

let data = JSON.parse(localStorage.getItem("personObj")) || [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    id: Date.now(),
  };
  data.push(obj);
  localStorage.setItem("personObj", JSON.stringify(data));

  firstName.value = "";
  lastName.value = "";
  address.value = "";
});
