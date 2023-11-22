let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let result = document.querySelector(".result");

startBtn.style.background = "green";
startBtn.style.color = "white";
startBtn.style.border = "none";
startBtn.style.padding = "10px 20px";
stopBtn.style.background = "red";
stopBtn.style.color = "white";
stopBtn.style.padding = "10px 20px";
stopBtn.style.border = "none";

let count = 0;
let countInterval;
startBtn.addEventListener("click", function () {
  this.setAttribute("disabled", "true");
  stopBtn.removeAttribute("disabled");
  countInterval = setInterval(() => {
    result.innerText = ++count;
  }, 100);
});

stopBtn.addEventListener("click", function () {
  startBtn.removeAttribute("disabled");
  this.setAttribute("disabled", null);
  clearInterval(countInterval);
});

let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");

incrementBtn.style.background = "teal";
incrementBtn.style.color = "white";
incrementBtn.style.padding = "10px";
incrementBtn.style.border = "none";
decrementBtn.style.background = "teal";
decrementBtn.style.color = "white";
decrementBtn.style.padding = "10px";
decrementBtn.style.border = "none";

incrementBtn.addEventListener("click", function () {
  result.innerText = count++;
});
decrementBtn.addEventListener("click", function () {
  result.innerText = count--;
});

let reset = document.querySelector(".reset");
reset.style.background = "red";
reset.style.color = "black";
reset.style.padding = "10px 15px";
reset.style.border = "none";

reset.addEventListener("click", function () {
  count = 0;
  result.innerText = 0;
  clearInterval(countInterval);

  startBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
});

let inputOne = document.querySelector("#input-one");
let inputTwo = document.querySelector("#input-two");
let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");



inputOne.style.border="2px solid red"
inputOne.style.padding="3px 15px"
inputTwo.style.border="2px solid red"
inputTwo.style.padding="3px 15px"

buttonOne.style.background="orange"
buttonOne.style.padding="5px 15px"
buttonOne.style.border="none"
buttonTwo.style.background="orange"
buttonTwo.style.padding="5px 15px"
buttonTwo.style.border="none"

buttonOne.addEventListener("click", function(){
    count+= +inputOne.value
    result.innerText=count
})
buttonTwo.addEventListener("click", function(){
    count-= +inputTwo.value
    result.innerText=count
})