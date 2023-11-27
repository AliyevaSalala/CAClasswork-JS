let tBody = document.querySelector("tbody");
let data = JSON.parse(localStorage.getItem("user"));
function drawTable(data) {
  data.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML = `
      <td>${element.id}</td>
      <td>${element.firstName}</td>
      <td>${element.lastName}</td>
      <td>${element.address}</td>
      `;
    tBody.append(trElem);
  });
}
drawTable(data);