const BASE_URL = "https://api.escuelajs.co/api/v1";

let form = document.querySelector("form");
const productsDiv = document.querySelector(".products-div");

fetch(`${BASE_URL}/products`)
  .then((res) => res.json())
  .then((data) => {
    drawCards(data);
  });

function drawCards(arr) {
  productsDiv.innerHTML = "";
  arr.forEach((element) => {
    productsDiv.innerHTML += `
    <div class="product">
    <div class="product-image">
      <img src="${element.images}" style="width: 100%" alt=""  />
    </div>
    <div class="product-heading">
      <p class="title">${element.title}</p>
      <p class="description">${element.description}</p>
      <span>${element.price}</span>
      <div><button class="deleteBtn">Delete</button></div>
    </div>
  </div>

    `;
  });
}

// function newData(endpoint, obj) {
//   fetch(`${BASE_URL}/${endpoint}`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });
// }

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    title: inputs[0].value,
    price: inputs[1].value,
    description: inputs[2].value,
    categoryId: 1,
    images: [inputs[3].value],
  };
});
