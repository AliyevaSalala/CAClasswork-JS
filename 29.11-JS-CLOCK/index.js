let deg = 6;
let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let setClock = () => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
};

//----FIRST
setClock();

setInterval(setClock, 1000);

let switchBtn = document.querySelector(".switch-btn");
localStorage.getItem("dark-mode") === "true" &&
  document.body.classList.add("dark-mode");

switchBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  // switchBtn.innerText = "BLACK";
  localStorage.getItem("dark-mode") === "true"
    ? localStorage.setItem("dark-mode", false)
    : localStorage.setItem("dark-mode", true);
});
