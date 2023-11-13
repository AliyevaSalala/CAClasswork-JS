//----------------Task-1

//----------part-1

//--------Tek ededleri filter methodu vasitesile yeni bir degiskene menimset:

// const number = [1, 2, 3, 4, 5, 6, 7, 8];

// const oddNumber = number.filter((num) => num % 2 === 1);
// console.log(oddNumber);

//-----part-2

//---------1 ve 10 araligindaki reqemleri cixardin

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const Numbers=array.filter((num)=>num>=1 && num<=10)
// console.log(Numbers);

//---------------Task-2
//--Verilmis arrayde objectlerin first_name ve last_name deyiskennin asagidaki kimi gosterin.

const users = [
  {
    first_name: "Mike",
    last_name: "Sheridan",
  },
  {
    first_name: "Tim",
    last_name: "Lee",
  },
  {
    first_name: "John",
    last_name: "Carte",
  },
];

const userName = users.map((user) => {
  return user.first_name + "," + user.last_name;
});
console.log(userName);

//------------------------------------------------  TASK 3  -------------------------------------------------
//find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə mənimsədib console-a çıxardın.

const persons = [
  { name: "Akif", age: 25 },
  { name: "Aysu", age: 32 },
  { name: "Ali", age: 35 },
];

// const firstPerson = (persons.find(element => element.age>30));
// console.log(firstPerson);

//------------------------------ part II
//tapdığınız objectin index-ni də ikinci bir console-da çıxardın.(metod ilə)

const firstPerson = persons.findIndex((element) => element.age > 30);
console.log(firstPerson);

//------------------------------------------------  TASK 4  -------------------------------------------------

//Verilmiş array-in hər bir elementini qüvvətə yüksəldin.   ======> [ 1, 16, 81, 256 ]

const array1 = [1, 4, 9, 16];

const num1 = array1.map((item) => {
  return item * item;
});
console.log(num1);

//-------------------------------------------  TASK 5  ------------------------------------------------

//Verilmiş animals array-ni slice metodu vasitəsilə aşağıdaki kimi yazmağa çalışın.

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1));
console.log(animals.slice(3));
console.log(animals.slice(2, 4));
console.log(animals.slice());

//-------------------------------------------  TASK 6 ------------------------------------------------

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);
months.splice(-1, 1, "May");
console.log(months);

//-------------------------------------------  TASK 7 ------------------------------------------------

const company = [
  { firstName: "John", lastName: "Doe", salary: 50000, yearsWorked: 5 },
  { firstName: "Alice", lastName: "Johnson", salary: 60000, yearsWorked: 8 },
  { firstName: "Bob", lastName: "Smith", salary: 75000, yearsWorked: 3 },
  { firstName: "Eve", lastName: "Williams", salary: 55000, yearsWorked: 7 },
];

const companyName = company.map((item) => {
  return item.firstName + " "+ item.lastName + " "+ "illik" + " " + item.salary +"$" + " " + "maas alir ve" +  " " + item.yearsWorked 
   +"ildir calisir" ;
});
console.log(companyName);
