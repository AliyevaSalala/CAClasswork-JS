const search = document.querySelector("#search");
const cards = document.querySelector(".cards");
const select = document.querySelector("select");
const button = document.querySelector(".btn");

const BASE_URL = "https://restcountries.com/v2";

async function getAllData(endpoint) {
  const res = await axios(`${BASE_URL}/${endpoint}`);
  //   console.log(res.data);
  let data = res.data;
  drawCards(data);
}
getAllData("all");

function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
       <a href="details.html?name=${element.name}"> <img src="${element.flags.svg}" alt="">
       <h3>${element.name}</h3>
       <p><b>Population:${element.population}</b>20909</p>
       <p><b>Region:${element.region}</b>20909</p>
       <p><b>Capital:${element.capital}</b>20909</p></a>
    </div>
        `;
  });
}

search.addEventListener("input", async function (e) {
  const res = await axios(`${BASE_URL}/all`);
  let filtered = res.data.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawCards(filtered);
});

// select.addEventListener("change", async function () {
//   const res = await axios(`${BASE_URL}`);
//   let selected = res.data.filter((item) => {
//     return item.region === select.value;
//   });
//   drawCards(selected);
// });

select.addEventListener("change", async function (e) {
  if (e.target.value != "all") {
    getAllData(`region/${e.target.value}`);
  } else {
    getAllData(`${e.target.value}`);
  }
});




if (localStorage.getItem("darkMode") == "true") {
  document.body.classList.add("dark-mode");
}

button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (localStorage.getItem("darkMode") === "true") {
    localStorage.setItem("darkMode", false);
  } else {
    localStorage.setItem("darkMode", true);
  }
});
