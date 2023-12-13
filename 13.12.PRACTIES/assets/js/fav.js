let id = new URLSearchParams(window.location.search).get("id");
console.log(id);
const details = document.querySelector(".details");
let section = document.querySelector(".section");

let button = document.createElement("button");

const BASE_URL = "http://localhost:8080";
// let favorite = JSON.parse(localStorage.getItem("favorite")) ?? [];

button.innerText = "Go Back";
section.append(button);
button.addEventListener("click", function () {
  window.history.back();
});

// async function dataCard() {
//   try {
//     const res = await axios(`${BASE_URL}/users/${id}`);
//     // console.log(res.data.userphoto);
//     let date = new Date();
//     details.innerHTML += `
//         <div class="card">
//                 <img src="${res.data.userphoto}" alt="" />
//                 <h3>${res.data.name} ${res.data.surname}</h3>
//                 <hr />
//                 <p>${res.data.email}</p>
//                 <p>${date.getDay()}/${date.getMonth()}/${date.getFullYear()}
//                 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</p>

//                 <button><a href="" onclick=removeBtn(${
//                   res.data.id
//                 },this)>Remove Fav</a></button>
//               </div>`;

//     // localStorage.setItem("favorite", JSON.stringify(favorite));
//   } catch (error) {
//     console.log(error);
//   }
// }

// dataCard();



async function removeBtn(id, btn) {
    if (confirm("are you sure to delete?")) {
      btn.closest("card").remove();
      await axios.delete(`${BASE_URL}/users/${id}`);
    }
  }
