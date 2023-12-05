const BASE_URL = "http://localhost:3000";

fetch(`${BASE_URL}/posts`)
  .then((res) => res.json())
  .then((data) => console.log(data));

// function getNewData(endpoint, obj) {
//   fetch(`${BASE_URL}/${endpoint}`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });
// }

// let obj = {
//   firstName: "Shabnam",
//   lastName: "Ibrahimova",
//   age: "22",
//   city: "Ganja",
// };

// getNewData("posts", obj);



