const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";
const card = document.querySelector(".card");
const form = document.querySelector("form");
const divElem = document.createElement("div");
const input = document.querySelector("#search");

divElem.classList = "definition";

async function getAllData(word) {
  const res = await axios(`${BASE_URL}/${word}`);
  console.log(res.data);
  //   divElem.innerHTML += `
  //  <div class="heading-icon">
  //  <h4>${res.data[0].word}</h4>
  //  <i class="fa-solid fa-volume-high" onclick=icon()></i>
  // </div>
  // <div class="text">
  //  <p>Definition:<span>( ${res.data[0].meanings[0].partOfSpeech})</span></p>
  //  <p>${res.data[0].meanings[0].definitions[0].definition}</p>
  // </div>
  //  `;
  //   form.after(divElem);
  drawCard(res.data);
}

function drawCard(arr) {
  arr.forEach((element) => {
    divElem.innerHTML += `
 <div class="heading-icon">
 <h4>${element.word} , ${element?.phonetics[0].text}</h4>

 <i class="fa-solid fa-volume-high" onclick=playAudio(this)>
    <audio src="${element.phonetics[0].audio}"></audio>
 </i>
</div>
<div class="text">
 <p>Definition:<span>( ${element.meanings[0].partOfSpeech})</span></p>
 <p>${element.meanings[0].definitions[0].definition}</p>
</div>
 `;
    form.after(divElem);
  });
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  getAllData(input.value);
});

function playAudio(icon) {
  // console.log(icon.querySelector("audio"));
  icon.querySelector("audio").play();
}
