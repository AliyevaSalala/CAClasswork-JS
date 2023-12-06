const BASE_URL = "https://fakestoreapi.com/products";
const electroncBtn = document.querySelector(".electronc-btn");
const jeweleryBtn = document.querySelector(".jewelery-btn");
const menBtn = document.querySelector(".men-btn");
const womenBtn = document.querySelector(".women-btn");

const products = document.querySelector(".products");

async function getALLData(endpoint) {
  const res = await axios(`${BASE_URL}/${endpoint}`);
  console.log(res.data);
  drawCards(res.data);
}

getALLData("");

function drawCards(arr) {
  products.innerHTML = "";
  arr.forEach((element) => {
    products.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4 product mb-3">
     <a href="details.html?id=${element.id}">
     <div class="card" style="width: 15rem">
     <img src="${element.image}" class="card-img-top"/>
     <div class="card-body">
       <p class="card-title">${element.title}</p>
       <p class="card-text">
      ${element.price}
       </p>
    
     </div>
     </a>
      </div>
</div>
       
        `;
  });
}

electroncBtn.addEventListener("click", () => {
  getALLData("/category/electronics");
});
jeweleryBtn.addEventListener("click", () => {
  getALLData("/category/jewelery");
});
menBtn.addEventListener("click", () => {
  getALLData("/category/men's%20clothing");
});
womenBtn.addEventListener("click", () => {
  getALLData("/category/women's%20clothing");
});
