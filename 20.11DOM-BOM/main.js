//------------------------------------------ TASK 1 ---------------------------------------------------------

//Bir dəyişən təyin edin və dəyəri 1 olsun. 1 saniyədən bir consol-da yaratdığınız dəyişənin dəyərini +1 artırın. 4 saniyə  sonra intervalı sonlandırın.

// let count = 1;
// let countInterval = setInterval(() => {
//   console.log(count++);

//   if (count === 4) {
//     clearInterval(countInterval);
//   }
// }, 1000);

// let count=1;
// let countInterval= setInterval(()=>{
//     console.log(count++);
// },1000)

// setTimeout(()=>{
//     clearTimeout(countInterval)
// },4000)

//---------------------------------- TASK 2 ---------------------------------------------------------

//--HTML-də button və text üçün tag yazın. button-a click ettikdə text-içindəki yazı dəyişsin.

let textBtn = document.querySelector(".text-btn");
let heading = document.querySelector(".heading");

console.log(textBtn);
console.log(heading);

textBtn.addEventListener("click", function () {
  heading.style.color = "red";
  heading.style.fontSize = "50px";
  console.log((heading.innerHTML = "I am Vscode !!!"));
});

//---------------------------------------- TASK 3 ---------------------------------------------------------

//--HTML-də birdən çox eyni adda class sahib element yaradın. Hər bir elementi loop ilə tək-tək console-a çıxardın.

let text = document.querySelectorAll(".text");
// console.log(text[2].innerHTML);
// console.log(text[2]);
console.log(text);

text.forEach((item) => {
  console.log(item.innerHTML);
});

//----------TASK-4-------

//----Verilmiş string-in hər bir hərfini 1 saniyədən bir böyük hərf edin.
let str = "developer";
// Developer
// DEveloper
// DEVEloper
// DEVELOper
// DEVELOPer
// DEVELOPEr
// DEVELOPER

// let i = 1;
// let interval =setInterval(() => {
//   if (i <= str.length) {
//     str = str.slice(0, i).toLocaleUpperCase() + str.slice(i);
//     console.log(str);
//     i++;
//   } else {
//     clearInterval(interval);
//   }
// }, 1000);

//------------------------------- TASK 5 ---------------------------------------------------------

//----HTML-də button yaradın və ona click ettikdə body-nin background color-u dəyişsin.

let color = ["blue", "red", "green", " black", "dodgerblue", "blueviolet"];
let colorBtn = document.querySelector(".colors-btn");
// console.log(colorBtn);
colorBtn.addEventListener("click", function () {
  document.body.style.backgroundColor =
    color[Math.floor(Math.random() * color.length)];
});




