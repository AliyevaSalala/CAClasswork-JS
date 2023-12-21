const BASE_URL = "http://localhost:8080/products";
const products = document.querySelector(".products");

let favorites = getFavoritesFromLocaleStorages();
drawCards(favorites)

function drawCards(data) {
  products.innerHTML = "";
  data.forEach((element) => {
    const divElement = document.createElement("div");
    divElement.className = "products-card";

    const aEelemet = document.createElement("a");
    aEelemet.href = `details.html?id=${element.id}`;
    aEelemet.textContent = "Read More";
    const iconElement = document.createElement("i");

    iconElement.className = "fa-solid fa-heart";

    const imgEelement = document.createElement("img");
    imgEelement.src = element.image;
    const productsTitleEelement = document.createElement("h3");
    productsTitleEelement.textContent = element.title;
    const productsPriceElement = document.createElement("p");
    productsPriceElement.textContent = ` $ ${element.price}.00`;

    iconElement.addEventListener("click", function () {
      favorites = favorites.filter((item) => item.id !== element.id);
      setProductToLocaleStorage(favorites);
      divElement.remove();

      let favoriteProducts = getFavoritesFromLocaleStorages();

      setProductToLocaleStorage(favoriteProducts);
    });

    // divElement.append(imgEelement, productsTitleEelement, productsPriceElement);
    // aEelemet.append(divElement);
    // products.append(aEelemet);
    divElement.append(
      imgEelement,
      productsTitleEelement,
      productsPriceElement,
      aEelemet,
      iconElement
    );
    products.append(divElement);
  });
}

function setProductToLocaleStorage(products) {
  localStorage.setItem("favs", JSON.stringify(products));
}

function getFavoritesFromLocaleStorages() {
  return JSON.parse(localStorage.getItem("favs")) ?? [];
}
