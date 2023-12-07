const BASE_URL = "http://localhost:8000";
const cards = document.querySelector(".cards");

async function getAllData() {
  const res = await axios(`${BASE_URL}/blogs`);
  drawCards(res.data);
  console.log(res.data);
}

getAllData();
function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
        <h2>${element.title}</h2>
        <p>${element.body.slice(0, 100)}... <a href="">Read More</a></p>
        <span>${element.author}</span>
        <div class="button">
          <button class="btn delete-btn"  onclick=deleteData(${
            element.id
          },this)>Delete</button>
          <button class="edit-btn"><a href="newBlog.html?id=${element.id}">Edit</a></button>
        </div>
      </div>
        `;
  });
}

async function deleteData(id, btn) {
  if (confirm("are u sure to delete?")) {
    await axios.delete(`${BASE_URL}/blogs/${id}`);
    btn.closest("card").remove();
  }
}
