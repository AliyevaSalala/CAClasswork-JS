let keys = document.querySelectorAll(".key");
let listAll = document.querySelectorAll(".list");
let word = document.querySelector(".words");
document.addEventListener("keydown", function (event) {
  keys.forEach((key) => {
    if (key.innerText == event.key) {
      key.style.backgroundColor = "blue";
      key.style.transform = "scale(1.2)";
    }
  });
  word.innerText += event.key;
});

document.addEventListener("keyup", function (event) {
  keys.forEach((key) => {
    if (key.innerText == event.key) {
      key.style.backgroundColor = "darkcyan";
      key.style.transform = "none";
    }
  });
});
