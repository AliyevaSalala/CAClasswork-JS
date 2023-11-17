//-------------TASK-1
//---------------Write a Javascript function thar reverse a number.

// Example x = 32243;
// Expected Output : 34223

function reverse(x) {
  x = x + "";
  return +x.split("").reverse().join("");
}
console.log(reverse(32243));

//----------------------- TASK 2 -------------------------------------------------------

//----Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

function string(string) {
  let result = string.split("").sort().join("");
  return result;
}
console.log(string("webmaster"));

//-------------------- TASK 3 -------------------------------------------------------

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function uppercase(str) {
  let array = str.split("");
  let newarray = [];
  for (let i = 0; i < array.length; i++) {
    newarray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  return newarray.join("")
}
console.log(uppercase("the quick brown fox"));


//------------------------------------- TASK 4 -------------------------

const person = {
    firstName: "John",
    lastName: "Doe",
    city: "Ganja",
    website: "code.edu.az",
    languageInfo: {
      eng: "Advance",
      aze: "Fluenty",
      rus: "Intermediate",
    },
  };
  
