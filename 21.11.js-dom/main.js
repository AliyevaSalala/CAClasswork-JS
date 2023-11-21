//-------------TASK-1----/
//BUTTON YARADIN, CLICK ETDIKDE parent elementine style verin, width, height and bg color.

let button = document.querySelector(".addBgColor");

button.addEventListener("click", function (params) {
  let parentElement = button.parentElement;
  parentElement.style.height = "200px";
  parentElement.style.width = "300px";
  parentElement.style.background = "blue";
  parentElement.style.position = "relative";
  this.style.position = "absolute";
  this.style.right = "20px";
  this.style.bottom = "20px";

  console.log(button.parentElement);
});

//----task-2
//--ul yaradin. Daxiline li elemneti elave edin. her bir li elementin click etdikde, li elementi silinsin.
let cities = document.querySelector(".cities");
let ulElem = document.createElement("ul");
const liArr = ["Ganja", "Baku", "Yevlakh", "Goranboy", "Shamkir"];
liArr.forEach((item) => {
  let liElem = document.createElement("li");
  liElem.innerText = item;

  //   document.querySelector(".list").append(liElem);
  ulElem.append(liElem);

  liElem.addEventListener("click", function () {
    this.remove();
  });

});

cities.append(ulElem);

// document.querySelectorAll("li").forEach((item) => {
//   item.addEventListener("click", function () {
//     this.remove();
//   });
// });


//---------task-3

let header= document.querySelector(".header")
header.style.display="flex";
header.style.justifyContent="space-between"
header.style.background="black"
header.style.color="white"


//-----task-4------------//
let toggle= document.querySelector(".light")
toggle.addEventListener("click", function () {
   document.body.classList.toggle("bg-green");

  });