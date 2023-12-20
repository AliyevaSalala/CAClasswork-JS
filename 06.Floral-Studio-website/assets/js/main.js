$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

const menuIcon = document.querySelector("#menu");
const nav = document.querySelector(".nav");
const products = document.querySelector(".products");
const search = document.querySelector("#search");
const sortBtn = document.querySelector(".sort-btn");
const loadMore = document.querySelector(".load-more");

const BASE_URL = "http://localhost:8080/products";
let limit = 3;

let arr = [];
let productCopy = [];

async function getAllData() {
  const res = await axios(`${BASE_URL}`);
  // console.log(res.data);
  arr = res.data;
  productCopy = structuredClone(arr);
  // drawCards(res.data);
  drawCards(res.data.slice(0, limit));
}

getAllData();

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});

function drawCards(data) {
  products.innerHTML = "";
  data.forEach((element) => {
    const divElement = document.createElement("div");
    divElement.className = "products-card";

    const aEelemet = document.createElement("a");
    aEelemet.href = `details.html?id=${element.id}`;

    const imgEelement = document.createElement("img");
    imgEelement.src = element.image;
    const productsTitleEelement = document.createElement("h3");
    productsTitleEelement.textContent = element.title;
    const productsPriceElement = document.createElement("p");
    productsPriceElement.textContent = ` $ ${element.price}.00`;

    divElement.append(imgEelement, productsTitleEelement, productsPriceElement);
    aEelemet.append(divElement);
    products.append(aEelemet);
  });
}

search.addEventListener("input", async function (e) {
  const res = await axios(`${BASE_URL}`);
  let filtered = res.data.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawCards(filtered);
});

sortBtn.addEventListener("click", function () {
  let sorted;
  if (sortBtn.innerText === "Ascending") {
    sortBtn.innerText = "Descending";
    sorted = productCopy.sort((a, b) => a.price - b.price);
  } else if (sortBtn.innerText === "Descending") {
    sortBtn.innerText = "Deafult";
    sorted = productCopy.sort((a, b) => b.price - a.price);
  } else {
    sortBtn.innerText = "Ascending";
    sorted = arr;
  }
  drawCards(sorted);
});

loadMore.addEventListener("click", function () {
  limit += 3;
  drawCards(productCopy.slice(0, limit));
  if (limit >= productCopy.length) {
    this.remove();
  }
});
