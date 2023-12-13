const cards = document.querySelector(".cards");
let section = document.querySelector(".section");

let button = document.createElement("button");

let fav = JSON.parse(localStorage.getItem("fav"));

button.innerText = "Go Back";
section.append(button);
button.addEventListener("click", function () {
  window.history.back();
});

async function dataCard() {
  fav.forEach((element) => {
    cards.innerHTML += `
    <div class="card">
    <img src="${element.userphoto}" />
    <h3>${element.name} ${element.surname}</h3>
    <hr />
    <p>${element.email}</p>
    <p>${element.date}</p>

    <button onclick="removeBtn(${element.id},this)">Remove Fav</button>
  </div>
    `;
  });
}

dataCard();

function removeBtn(id, btn) {
  // console.log(id);

  if (confirm("are you sure to delete?")) {
    let favorite = fav.filter((item) => item.id != id);
    btn.closest(".card").remove();
    // console.log(favorite);
    localStorage.setItem("fav", JSON.stringify(favorite));
  }
}
