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
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

const menuIcon = document.querySelector("#menu");
const nav = document.querySelector(".nav");
const products = document.querySelector(".products");

const BASE_URL = "http://localhost:8080/products";

async function getAllData() {
  const res = await axios(`${BASE_URL}`);
  console.log(res.data);
}

getAllData()

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});
