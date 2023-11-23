let inputOne = document.querySelector("#inputOne");
let addBtn = document.querySelector(".addBtn");
let listElem = document.querySelector(".list");

addBtn.addEventListener("click", function () {
  let liElem = document.createElement("li");
  let spanElem = document.createElement("span");
  let buttonElem = document.createElement("button");
  buttonElem.style.padding = "10px";
  buttonElem.innerText = "Delete";
  liElem.append(spanElem, buttonElem);
  spanElem.innerText = inputOne.value; 
   inputOne.value = "";
  spanElem.style.color = "red";
  liElem.style.background = "pink";
  buttonElem.style.background = "red";
  buttonElem.style.border = "none";
  buttonElem.style.color = "white";

  
    liElem.style.display="flex"
    liElem.style.alignItems="center"
    liElem.style.justifyContent="space-between"
  liElem.style.padding = "5px";
  liElem.style.width = "300px";
  liElem.style.marginBottom = "5px";
  listElem.append(liElem);
  buttonElem.addEventListener("click", function () {
    this.parentElement.remove();
  });

});
