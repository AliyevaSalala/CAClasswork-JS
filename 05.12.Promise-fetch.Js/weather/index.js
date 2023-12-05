let form = document.querySelector("form");
let cont = document.querySelector(".container");
let inputs = document.querySelectorAll("input");
let dataWather = document.querySelector(".data");
let search = document.querySelector("#search");
let searchBtn = document.querySelector(".search-btn");
let curCity = "baku";

function getWeather() {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`
  )
    .then((res) => res.json())
    .then(
      (data) =>
        (dataWather.innerHTML = `
            <p>${data.location?.name}, ${data.location.country}</p>
            <img src="${data.current.condition.icon}" alt="">
            <p>${data.current.condition.text}</p>
            <p>${data.current.temp_c}</p>
            <p>${data.current.temp_f}</p>
            <p>${data.location.localtime_epoch}</p>
      `)
    );
}
getWeather();

searchBtn.addEventListener("click", () => {
  
  // getWeather(search.value);
  console.log(search.value);
});
