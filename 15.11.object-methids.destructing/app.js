//----------------------------------------------- TASK 1 --------------------------------------------

const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};

//-----------------1. employees object-nin sadəcə key-lərini console-a çıxardın.

// console.log(Object.keys(employees));
//-----------------2. employees object-nin sadəcə value-lərini console-a çıxardın.
// console.log(Object.values(employees));

//--------------3.
// console.log(Object.entries(employees));

//------------------------------TASK-2------------------
var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    readingStatus: true,
  },
  {
    title: "Suzanne Collins",
    author: "Mockingjay: The Final Book",
    readingStatus: false,
  },
];

//---"library" adlı array yaradın. İçərisində title, author və readingStatus adlı key-ləri olan objectlər yaradın. Əgər readingStatus true olarsa console-a "Already read 'title' by author' Əgər false olarsa "You still need to read 'title' by author' yazsın

// library.forEach((item) => {
//   if (item.readingStatus === true) {
//     console.log(` Already read ${item.title} by ${item.author}`);
//   } else {
//     console.log(` You still need to read ${item.title} ${item.author}`);
//   }
// });

//------------------------------------------- TASK 3 ----------------------------------------------------------

//---"employee" adlı object yaradın. Object-in name, jobTitle, salary və promote adında key-ləri var. promote bir anonim function-dır, 2 parametr qəbul edir. jobTitle-in value-ı ilk dəfə "Software Developer" salary isə 75000. Ən sonda employee.promote-a bir yeni vəzifə və yeni maaş göndərin.
//employee.promote('Senior Software Engineer', 90000);

//--Nəticə: Promotion: Alice is now Senior Software Engineer with a salary of $90000

const employee = {
  name: "Alice",
  jobTitle: "Software Developer",
  salary: 75000,

  promote: function (newTitle, newSalary) {
    this.jobTitle = newTitle;
    this.salary = newSalary;
    console.log(
      `Promotion:` +
        this.name +
        ` is now ` +
        this.jobTitle +
        ` with a salary of $ ` +
        this.salary
    );
  },
};
employee.promote("Senior Software Enginner ", 90000);

//---------------------------- TASK 4 ----------------------------------------------------------
//---Object methodu ilə character objecti təyin edib aşağıdakı kimi console-a çıxardın.

const name = {
  firstName: "Philip",
  lastName: "Fry",
};

const details = {
  job: "Delivery Boy",
  employer: "Planet Express",
};

let character = Object.assign({}, name, details);

console.log(character);

//--------------------------------------------- TASK 5 ----------------------------------------------------------

//--ladder adlı object yaradın. step adında dəyəri 0-olan key yazın. Bundan əlava object-in 2 ayrı function-ı olsun. up və down.
//--up function step-in dəyərin +1 artırsın. down isə -1 azaltsın.

const ladder = {
  step: 0,
  up: function () {
    return (this.step += 1);
  },
  down: function () {
    return (this.step -= 1);
  },
};
console.log(ladder.up());
console.log(ladder.up());
console.log(ladder.down());
console.log(ladder.down());
