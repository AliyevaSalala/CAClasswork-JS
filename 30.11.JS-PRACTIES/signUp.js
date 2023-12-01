let formDiv = document.querySelector(".formDiv");

let form = document.createElement("form");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";

let inputElem = document.createElement("input");
inputElem.type = "text";
inputElem.name = "username";
inputElem.placeholder = "Email Address";
inputElem.style.margin = "10px 0";
inputElem.style.padding = "8px 20px";
inputElem.style.width = "100%";
inputElem.style.borderRadius = "5px";
// inputElem.required = true;

let inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.placeholder = "password";
inputPassword.style.width = "100%";
inputPassword.style.padding = "8px 20px";
inputPassword.style.borderRadius = "5px";
// inputPassword.required = true;

let inputSubmit = document.createElement("input");
inputSubmit.type = "submit";
inputSubmit.value = "Login";
inputSubmit.style.width = "100%";
inputSubmit.style.margin = "10px 0";
inputSubmit.style.padding = "8px 20px";
inputSubmit.style.borderRadius = "5px";
inputSubmit.style.backgroundColor = "blue";
inputSubmit.style.color = "white";

let divElemPasswordTwo = document.createElement("div");
divElemPasswordTwo.classList = "box";
let inputPasswordTwo = document.createElement("input");
inputPasswordTwo.type = "password";
inputPasswordTwo.placeholder = "Confirm password";
inputPasswordTwo.style.width = "100%";
inputPasswordTwo.style.padding = "8px 20px";
inputPasswordTwo.style.borderRadius = "5px";
inputPasswordTwo.style.margin = "10px 0";
// inputPasswordTwo.required = true;

let divElemEmail = document.createElement("div");
divElemEmail.classList = "box emailDiv";

let divElemPassword = document.createElement("div");
divElemPassword.classList = "box password";
let aElem = document.createElement("a");
aElem.innerText = "Forgot Password ?";
aElem.style.margin = "10px 0";
aElem.style.color = "blue";
aElem.href = "https://www.w3schools.com/js/js_datatypes.asp";
let divElemSubmit = document.createElement("div");
divElemSubmit.classList = "submit";

divElemEmail.append(inputElem);
divElemPassword.append(inputPassword);
divElemSubmit.append(inputSubmit);
divElemPasswordTwo.append(inputPasswordTwo);

form.append(divElemEmail, divElemPassword, divElemPasswordTwo, divElemSubmit);
formDiv.append(form);

let userData = JSON.parse(localStorage.getItem("user")) ?? [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let user = {
    email: inputElem.value,
    password: inputPassword.value,
    confirim: inputPasswordTwo.value,
  };
  // console.log(window.location.href);
  if (inputElem.value.length > 1 && inputPassword.value.length >= 4) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href =
      "http://127.0.0.1:5500/30.11.JS-PRACTIES/form.html?username=naterek";
  } else {
    window.alert("AY USAQ FORMU DOLDUR !!!");
  }
  inputElem.value = "";
  inputPassword.value = "";
  inputPasswordTwo.value = "";
  localStorage.setItem("user", JSON.stringify(userData))
});
