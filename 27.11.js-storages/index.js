let fullName = "";
let age = "";
let skills = ["sleep", "eat"];
console.log(window.localStorage);

localStorage.setItem("fullName", "Sharifa");

localStorage.setItem("age", 22);
localStorage.setItem("skills", JSON.stringify(skills));

localStorage.removeItem("fullName");
localStorage.clear();
