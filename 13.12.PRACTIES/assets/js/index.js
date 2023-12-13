const BASE_URL = "http://localhost:8080";

const tBody = document.querySelector("tbody");

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

function addBtn(){

}
