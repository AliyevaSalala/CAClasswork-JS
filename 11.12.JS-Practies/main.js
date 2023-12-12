//---------------TASK 1

const employees = [
  { name: "Jamil", salary: 1500, department: "IT" },
  { name: "Jale", salary: 5000, department: "HR" },
  { name: "Bayram", salary: 24000, department: "IT" },
  { name: "Sahil", salary: 6000, department: "HR" },
  { name: "Maryam", salary: 18000, department: "IT" },
  { name: "Elnara", salary: 20000, department: "HR" },
  { name: "Davud", salary: 14000, department: "IT" },
];

//---#ortalama maaşı 20000-dən çox olan departamentləri çapa verən program tərtib edin.

let filtered = employees.filter((item) => item.salary > 20000);
// console.log(filtered);

//=----#ortalama maaşı 10000-dən çox olan və departamenti "IT" olanları çapa verən program tərtib edin.

let filtered2 = employees.filter(
  (item) => item.salary > 10000 && item.department == "IT"
);
// console.log(filtered2);
//-----#sadecə department "HR" olanları yeni array'a yığıb, həmin arrayı console edin

let filtered3 = employees.filter((item) => item.department == "HR");
// console.log(filtered3);
// ------------------
//----TASK 2

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   city: "Ganja",
//   website: "code.edu.az",
//   languageInfo: {
//     eng: "Advance",
//     aze: "Fluenty",
//     rus: "Intermediate",
//   },
// };

//----person adlı object-dən firstName-i, languageInfo-dan eng və rus property-ni destructing edin, əlavə olaraq personda yerdə qalan bütün property-ləri otherInfo adı altında rest operatoru ilə bir dəyişənə çıxarın.

// let {
//   firstName,
//   languageInfo: { eng, rus },
// } = person;

// console.log(eng);

// let {
//   firstName,
//   languageInfo: { eng, rus },
//   ...otherInfo
// } = person;
// console.log(eng); // "Advance"
// console.log(otherInfo); // {lastName: 'Doe', city: 'Ganja', website: 'code.edu.az'}

//-------------------------

//---TASK 3

const person = {
  firstName: "Michael",
  lastName: "Pam",
  age: 26,
  city: "Poland",
};

//--1. employees object-nin sadəcə key-lərini console-a çıxardın.

// console.log(Object.keys(person));

// ---2. employees object-nin sadəcə value-lərini console-a çıxardın.
// console.log(Object.values(person));

//-
//---3. Aşağıdakı kimi console-a çıxardın.
// [firstName: 'Michael']
// [lastName: 'Pam']
// [age:26]
// [city: 'Poland']

// console.log(Object.entries(person));

//--4. object-in age propertysini silin.

delete person.age;
console.log(person);

// -5. Ən uzun string value-nu console-a çıxardın.

//------------------------------

//TASK 4

const text = "Java is awesome. Java is fun.";

//text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
//===>> JavaScript is awesome. Javascript is fun.

// let str = text.replaceAll("Java", "Javascript");
// console.log(str);

//---------------------

//TASK 5

//Sözün palindrom olub olmadığını yoxlayın.

function isPalindrome(str) {
  let reversStr = str.split("").reverse().join("");
  return str == reversStr ? `${str} is polindrom` : `${str} is not polindrom`;
}

// console.log(isPalindrome("hello"));

//-----------------

//TASK 6

// console.log(longestWord("Hello word hi programmers"));

//Ən uzun sözü tapın.  ======>> programmers

function longestWord(element) {
  let array = element.split(" ").sort((a, b) => {
    return b.length - a.length;
  });
  return array[0];
}
console.log(longestWord("Hello word hi programmers"));

//-----------------

//TASK 7

const persons = [
  { name: "Akif", age: 25 },
  { name: "Aysu", age: 32 },
  { name: "Ali", age: 35 },
];

//find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə
//mənimsədib console-a çıxardın. ====> { name: 'Aysu', age: 32 }
let { name: firstPerson } = persons;
let newPersons = persons.find((item) => item.age > 30);
console.log(newPersons);
//------------------------------ part II

//---tapdığınız objectin index-ni də ikinci bir console-da çıxardın.(metod ilə)

let newsPersonsIndex=persons.findIndex((elem) => elem.age>30)
console.log(newsPersonsIndex);