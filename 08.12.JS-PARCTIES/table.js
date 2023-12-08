const BASE_URL = "http://universities.hipolabs.com/search";
const search = document.querySelector("#search");
const tBody = document.querySelector("tbody");
const loader=document.querySelector(".loader")

async function getAllData() {
    loader.classList.add("show")
  const res = await axios(`${BASE_URL}?country=Turkey`);
  loader.classList.remove("show")
  console.log(res.data);
  drawTable(res.data);
}
getAllData();

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");

    trElem.innerHTML = `
    <td>${element.name}</td>
    <td>${element.country}</td>
    <td>${element.domains}</td>
    <td><a href="${element.web_pages[0]}" target="_blank">${element.web_pages[0]}</a></td>
    `;
    tBody.append(trElem);
  });
}

search.addEventListener("input", async function (e) {
    loader.classList.add("show")
  const res = await axios(`${BASE_URL}?country=Turkey&name=${e.target.value}`);
  loader.classList.remove("show")
  drawTable(res.data);
//   console.log(res.data);
});


