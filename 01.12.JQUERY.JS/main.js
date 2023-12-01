let arr = JSON.parse(localStorage.getItem("key")) ?? [];

$("button").on("click", function (e) {
  //   e.preventDefault();
  let text = document.createElement("p");
  text.innerText = $("input").val();
  document.body.append(text);
  $("p").css({
    backgroundColor: "teal",
    padding: "6px",
    borderRadius: "5px",
    margin: "10px",
    width: "150px",
  });
  $("input").val("");
  text.addEventListener("click", function () {
    this.remove();
  });
  arr.push(text.innerText);
  localStorage.setItem("key", JSON.stringify(arr));
});

function inputARR(element) {
  element.forEach((item) => {
    let word = document.createElement("p");
    word.innerText = item;
    document.body.append(word);
    $("p").css({
        backgroundColor: "teal",
        padding: "6px",
        borderRadius: "5px",
        margin: "10px",
        width: "150px",
      });
      word.addEventListener("click", function () {
        this.remove();
      });

  });
}
inputARR(arr);