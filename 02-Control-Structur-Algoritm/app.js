let weather = 22;
let name = "shalala";
if (weather >= 22) {
  console.log(`${name} Nazik geyin`);
} else if (weather >= 15) {
  console.log(`${name} Pencek geyin`);
} else {
  console.log(`${name} Qalin geyin`);
}

//TASK-2
let letter = "i";
// switch (letter) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("Sait herfdir");
//     break;
//   case "b":
//   case "c":
//   case "d":
//   case "f":
//     console.log("samit herfdir");
//     break;
//   default:
//     console.log("herf degil")
//     break;
// }
if (letter === "a" || letter === "e" || letter === "i" || letter === "u") {
  console.log("sait");
} else {
  console.log("samit");
}

//TASK-3
let a = 25;
let b = 52;
let c = 88;
if (a > b && a > c) {
  console.log(` ${a} is a greates`);
} else if (b > c && b > a) {
  console.log(` ${b} is a greatest`);
} else {
  console.log(`${c} is a greatest`);
}

//Task-4
let exam = 95;
if (exam >90) {
  console.log("A");
} else if (exam >= 80) {
  console.log("B");
} else if (exam >= 70) {
  console.log("C");
} else if (exam >= 60) {
  console.log("D");
} else if(exam>=50){
    console.log("F")
}else{
    console.log("Feild")
}
  //TASK-5

  let firstName="sharifa";
  if (firstName.length<5) {
    console.log(`${firstName}qisa adiniz var`)
  }else if (firstName.length=10) {
    console.log(`${firstName} orta uzunluqlu adiniz var`)
  }else if(firstName.length>10){
    console.log(`${firstName} adiniz cox uzundur`)
  }