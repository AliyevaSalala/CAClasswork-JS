const BASE_URL = "https://dog.ceo/api/breeds/image";
let cont = document.querySelector(".container");

let image = document.createElement("img");
image.src = "https://images.dog.ceo/breeds/setter-gordon/n02101006_1059.jpg";
cont.append(image);

setInterval(() => {
  fetch(`${BASE_URL}/random`)
    .then((res) => res.json())
    .then((data) => (image.src = data?.message));
}, 2000);

cont.style.display = "flex";
cont.style.justifyContent = "center";
cont.style.alignItems = "center";
cont.style.height = "100%";

image.style.width = "400px";
image.style.height = "400px";
image.style.borderRadius = "20px";


