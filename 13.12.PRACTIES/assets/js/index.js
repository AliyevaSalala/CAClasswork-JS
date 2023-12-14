const BASE_URL = "http://localhost:8080";

const tBody = document.querySelector("tbody");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector("#menu");

let fav = JSON.parse(localStorage.getItem("fav")) ?? [];

async function getAllData() {
  const res = await axios(`${BASE_URL}/users`);
  drawTable(res.data);
  console.log(res.data);
}
getAllData();

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
        <td>${element.id}</td>
        <td><img src="${element.userphoto}"/></td>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.email}</td>
        <td>${element.date}</td>
        <td>
      <a href="form.html?id=${element.id}" class="edit-btn">Edit</a>
        <a href=""  class="delete-btn" onclick=deleteBtn(${element.id},this)> Delete</a>
         <button class="add-btn" onclick=addBtn(${element.id})>Add Fav</button>
        </td>
        `;
    tBody.append(trElem);
  });
}

async function deleteBtn(id, btn) {
  if (confirm("are you sure to delete?")) {
    btn.closest("tr").remove();
    await axios.delete(`${BASE_URL}/users/${id}`);
  }
}

async function addBtn(id) {
  console.log(id);
  const res = await axios(`${BASE_URL}/users/${id}`);
  console.log(res.data);
  let obj = fav.find((item) => item.id === id);
  if (!obj) {
    fav.push(res.data);
    localStorage.setItem("fav", JSON.stringify(fav));
  } else {
    alert("birden artik elave ede bilmersen!!!!");
  }
}

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");

  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});
