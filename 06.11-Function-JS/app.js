// function printFullName(firtsname = "Lorem", lastname = "Ipsum") {
//   //   console.log(firtsname, lastname);
//   //   console.log(`I am ${firtsname} ${lastname}`);
// //   return `I am ${firtsname} ${lastname}`;
// }
// console.log(printFullName("Shalala", "Aliyeva"));
// printFullName();
// printFullName("Shalala" ,"Aliyeva")

//----------------Task-2

// 4 funksiya yazin. her biri 2 parametr qebul etsin ve riyazi emelleri yerine yetirsin

// function sum(num1, num2) {
//   return num1 + num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// function substruct(num1, num2) {
//   return num1 - num2;
// }
// function divide(num1, num2) {
//   return num1 / num2;
// }

// console.log(sum(2, 3));
// console.log(multiply(2, 3));
// console.log(substruct(2, 3));
// console.log(divide(2, 3));

//---------Task-3

//----Ele bir funksiya yaazin ki 3 parametr qebul etsin, 2 eded ve 1 eded operator. Operatora uygun neticeni return etsin.

// function calculate(num1, num2, operator) {
//   let results;
//   if (operator === "+") {
//     results = num1 + num2;
//   } else if (operator === "*") {
//     results = num1 * num2;
//   } else if (operator === "-") {
//     results = num1 - num2;
//   } else if (operator === "/") {
//     results = num1 / num2;
//   }else {
//     results="Bele bir emeliyyat movcud degil"
//   }
//   return results;
// }
// console.log(calculate(2,3, "/"));
// console.log(calculate(2,3, "*"));
// console.log(calculate(2,3, "+"));
// console.log(calculate(2,3, "-"));

//----------------Task-4

//--------------filterEmployess adinda funksiya yaradin, parametr kimi bir array alsin ve salary>60000 olan objectleri return etsin

const employess = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "jALe", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnare", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

function filterEmployess(array) {
  let newEmployess = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].salary > 60000) {
      newEmployess.push(array[i]);
    }
  }
  return newEmployess;
}
console.log(filterEmployess(employess));

//Task-5
//---------ReverseString adinda bir function teyin edin, parametr kimi string gonderin ve ters cevirin
let newStr = "";
function reverseString(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  return newStr;
}
console.log(reverseString("Hello"));

//----Task-6

//----size verilen cumlenin nece herfden ibaret oldugunu tapin
let string =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";
function letterNumbers(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] !== "." && str[i]!==" '" && str[i]!== ",") {
      count++;
    }
  }
  return count;
} console.log(letterNumbers(string));
