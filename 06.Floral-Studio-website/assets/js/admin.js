const BASE_URL = "http://localhost:8080/products";

const admin = document.querySelector(".admin");
const allInputs = document.querySelectorAll("input");
const tBody = document.querySelector("tbody");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");

let editStatus = false;
let editId = null;

async function adminGetAllData() {
  const res = await axios(`${BASE_URL}`);
  //   console.log(res.data);
  drawTable(res.data);
}

adminGetAllData();

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trEelement = document.createElement("tr");
    trEelement.innerHTML = `
    <td>${element.id}</td>
    <td><img src="${element.image}"></td>
    <td>${element.title}</td>
    <td>${element.price}</td>
    <td>${element.description}</td>
 
    <td> <div class="icons"><i class="fa-solid fa-trash fa-beat-fade" onclick=deleteBtn("${element.id}",this)></i>
    <i data-bs-toggle="modal" data-bs-target="#exampleModal" class="fa-solid fa-pen-to-square fa-beat-fade" onclick=editBtn("${element.id}",this)></i></div></td>
    `;
    tBody.append(trEelement);
  });
}

async function deleteBtn(id, btn) {
  if (confirm("silmek istediginden eminmisin?")) {
    let res = await axios.delete(`${BASE_URL}/${id}`);
    btn.closest("tr").remove();

    // Toastify({
    //   text: "Deleted Successfully!",
    //   duration: 3000,
    //   destination: "https://github.com/apvarun/toastify-js",
    //   // newWindow: true,
    //   close: true,
    //   // gravity: "top",
    //   // position: "left",
    //   // stopOnFocus: true,
    //   style: {
    //     background: "linear-gradient(to right, #00b09b, #96c93d)",
    //   },
    //   onClick: function () {},
    // }).showToast();
  }
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    image: `./assets/image/${allInputs[0].value.split("\\")[2]}`,
    title: allInputs[1].value,
    price: allInputs[2].value,
    description: allInputs[3].value,
  };

  if (!editStatus) {
    if (
      allInputs[0].value != "" &&
      allInputs[1].value != "" &&
      allInputs[2].value != ""
    ) {
      await axios.post(`${BASE_URL}`, obj);
    } else {
      alert("bos buraxila bilmez!!!");
    }
  } else {
    submitBtn.innerText = "Submit";
    await axios.patch(`${BASE_URL}/${editId}`, obj);
  }

  // allInputs.forEach((element) => (element.value = ""));
});

async function editBtn(id, btn) {
  editStatus = true;
  editId = id;
  submitBtn.innerText = "Edit";
  let res = await axios(`${BASE_URL}/${id}`);

  // allInputs[1].value = "";
  // allInputs[2].value = "";
  // allInputs[3].value = "";
  let data = res.data;

  // console.log(allInputs[2]);
  // console.log(id);

  allInputs[1].value = data.title;
  allInputs[2].value = data.price;
  allInputs[3].value = data.description;
}
