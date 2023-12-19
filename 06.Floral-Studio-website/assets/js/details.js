let id = new URLSearchParams(window.location.search).get("id");

const details = document.querySelector(".details");
const BASE_URL = "http://localhost:8080/products";

async function detailsData() {
  const res = await axios(`${BASE_URL}/${id}`);

  console.log(res.data);
  details.innerHTML = `
  <div class="details-left">
  <img src="${res.data.image}" alt="" />
</div>
<div class="details-right">
  <h1>${res.data.title}</h1>
  <p> $ ${res.data.price}.00</p>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
    voluptas ducimus corrupti facilis sit! Non fugit doloribus nemo
    magnam eum quam, nostrum eos libero aliquam consequatur ex
    cupiditate fuga omnis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
    voluptas ducimus corrupti facilis sit! Non fugit doloribus nemo
    magnam eum quam, nostrum eos libero aliquam consequatur ex
    cupiditate fuga omnis? corrupti facilis sit! Non fugit doloribus nemo
    magnam eum quam, nostrum eos libero aliquam consequatur ex
    cupiditate fuga omnis? nostrum eos libero aliquam consequatur ex
    cupiditate fuga omnis? nostrum eos libero aliquam consequatur ex
    cupiditate fuga omnis? nostrum eos libero aliquam consequatur ex
    cupiditate fuga omnis? nostrum eos libero aliquam consequatur ex
    cupiditate fuga omnis?
  </p>
  <a href="#" onclick=goBack()>Go Back</a>
</div>

  `;
}

detailsData();

function goBack() {
  window.history.back();
}
