//------------TASK-1/
//-----arrayin icindeki musbet ededleri tapin.

// let arr = [2, 4, -3, 43, 41, -3];
// function findPositives(arr) {
//   const newArr = arr.filter((num) => num > 0);
//   return newArr;
// }
// console.log(findPositives(arr));

//------TASK-2---//
//Ucbucagin terefleri verilib, duzbucaqli ucbucaq olub olmamasini tapin.
function isRectangle(a, b, c) {
  if (
    a ** 2 + b ** 2 === c ** 2 ||
    b ** 2 + a ** 2 === c ** 2 ||
    a ** 2 + c ** 2 === b ** 2
  ) {
    return "yes";
  } else {
    return "No";
  }
}

// console.log(isRectangle(3, 4, 5));
// console.log(isRectangle(3, 6, 5));
// console.log(isRectangle(4, 5, 3));

//----------TASK-3---//
//----------Arrayin icindeki butun herfleri boyuk oln elementin indeksini tapin.

const webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];

// console.log(webTechs.findIndex((item) => item === item.toLocaleUpperCase()));

//---------TSK-4
//--------

const webtechs2 = ["HTML", "CSS", "JS", "REACT", "Redux", "Node", " Mongdb"];
// console.log(webtechs2.filter((item) => item === item.toLocaleUpperCase()));

//-----------TASK-5
//-----Given a string, create a function called "reverseCase(str)" that to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

function reverseCase(str) {
  if (str === str.toLocaleUpperCase()) {
    return str.toLocaleUpperCase();
  } else {
    return str.toLocaleLowerCase();
  }
}
// console.log(reverseCase("MANY THANK"));
// console.log(reverseCase("many thank"));

const users = [
  {
    name: "Anar",
    surname: "Hesenli",
    age: "22",
    uni: "ADA",
    gender: "male",
    salary: "3001",
  },
  {
    name: "Nicat",
    surname: "Sadiqov",
    age: "25",
    uni: "GDU",
    gender: "male",
    salary: "200",
  },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
    salary: "300",
  },
  {
    name: "Hikmet",
    surname: "Hesenov",
    age: "22",
    uni: "UNEC",
    gender: "male",
    salary: "320",
  },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "GDU",
    gender: "male",
    salary: "420",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
    salary: "3210",
  },
];

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.

// console.log(users.filter((item) => item.uni === "UNEC" && item.surname[0] === "R"));

// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
// console.log(users.filter((item) => +item.age === 22 && item.name[0] === "A"));

// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').

// console.log(
//   users.map((item) => {
//     if (item.gender === "male") {
//       return { ...item, name: ` Mr. ${item.name}` };
//     } else {
//       return { ...item, name: ` Mrs. ${item.name}` };
//     }
//   })
// );

// 2.4.Sort users by age (ascending)

// const newAge = users.sort((a, b) => a.age-b.age);
// console.log(newAge);



let employees = [
    {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30,
    },
    {
      email: "asab@asab.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Redux",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 25,
      isLoggedIn: false,
      points: 50,
    },
    {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50,
    },
    {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50,
    },
    {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    {
      email: "paul@paul.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
  ];


  //--- Find the employee who has many skills in the employees object.

  //---- isLoggedIn true olanları array şəklində return edin

  

//---- age'ə görə sort edin
const newAge = employees.sort((a, b) => a.age-b.age);
console.log(newAge);

//--- Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
