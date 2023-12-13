let section = document.querySelector(".section");
let form = document.querySelector("form");
let inputsAll = document.querySelectorAll("input");
let button = document.createElement("button");

button.innerText = "Go Back";
button.className = "btn btn-primary my-4";

section.prepend(button);
button.addEventListener("click", function () {
  window.history.back();
});

let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:8080";

async function getAllData() {
  const res = await axios(`${BASE_URL}/users/${id}`);
  //   console.log(res.data);

  (inputsAll[0].value = res.data.name),
    (inputsAll[1].value = res.data.surname),
    (inputsAll[2].value = res.data.email);
}
if (id) {
  getAllData();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let newForm = {
    name: inputsAll[0].value,
    surname: inputsAll[1].value,
    email: inputsAll[2].value,
  };

  console.log(newForm);

  if (!id) {
    if (
      inputsAll[0].value != "" &&
      inputsAll[1].value != "" &&
      inputsAll[2].value != ""
    ) {
      //   console.log("Add");
      axios.post(`${BASE_URL}/users`, newForm);
    }
  } else {
    // console.log("asdasd");
    axios.patch(`${BASE_URL}/users/${id}`, newForm);
  }
  inputsAll.forEach((item) => (item.value = ""));
  window.location = "index.html";
});
