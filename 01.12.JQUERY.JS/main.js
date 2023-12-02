// let arr = JSON.parse(localStorage.getItem("key")) ?? [];

// $("button").on("click", function (e) {
//   //   e.preventDefault();
//   let text = document.createElement("p");
//   text.innerText = $("input").val();
//   document.body.append(text);
//   $("p").css({
//     backgroundColor: "teal",
//     padding: "6px",
//     borderRadius: "5px",
//     margin: "10px",
//     width: "150px",
//   });
//   $("input").val("");
//   text.addEventListener("click", function () {
//     this.remove();
//   });
//   arr.push(text.innerText);
//   localStorage.setItem("key", JSON.stringify(arr));
// });

// function inputARR(element) {
//   element.forEach((item) => {
//     let word = document.createElement("p");
//     word.innerText = item;
//     document.body.append(word);
//     $("p").css({
//         backgroundColor: "teal",
//         padding: "6px",
//         borderRadius: "5px",
//         margin: "10px",
//         width: "150px",
//       });
//       word.addEventListener("click", function () {
//         this.remove();
//       });

//   });
// }
// inputARR(arr);


let allFilms = JSON.parse(localStorage.getItem("films")) || [];
let films = document.querySelector(".films");
function drawFilms(arr) {
  $(".films").html("");
  arr.forEach((element) => {
    let spanElem = document.createElement("span");
    $(".films").append(spanElem);
    spanElem.textContent = element;
    $(".films span").css({
      backgroundColor: "teal",
      color: "white",
      margin: "10px",
      padding: "5px 10px",
      border: "1px solid red",
      borderRadius: "10px",
      cursor: "pointer",
    });

    spanElem.addEventListener("click", function () {
      this.remove();
      allFilms = allFilms.filter((item) => item != element);
      localStorage.setItem("films", JSON.stringify(allFilms));
    });
  });
}

$(".add").on("click", function () {
  allFilms.push($(".film-input").val());
  // console.log(allFilms);
  localStorage.setItem("films", JSON.stringify(allFilms));
  drawFilms(allFilms);
  $(".film-input").val("");
});

drawFilms(allFilms);


