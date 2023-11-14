//---------------------------task-1---------------/
//------------------text degisende Java sozunun evezine Javascript yazdirin.

const text = "Java is awesome . Java is fun";
// const regex =/Java/i;
// console.log(text.replace(regex, "Javascript"));

console.log(text.replaceAll("Java", "javascript"));

//--------------------TASK-2-----------//
//-------------mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi nəticə çıxardın--///

function mixUp(a, b) {
  let string = b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
  return string;
}

console.log(mixUp("val", "pur")); //'pul var'
console.log(mixUp("donce", "gevlet")); //'gence dovlet

//-----------------TASK-3--------/
//-------------verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər hallarda sözün sonuna "ing" əlaavə edin

function verbing(word) {
  if (word.endsWith("ing")) {
    return word + "ly";
  } else if (word.length > 3) {
    return word + "ing";
  } else {
    return word;
  }
}

console.log(verbing("go"));
console.log(verbing("swim"));
console.log(verbing("swiming"));

//---------------TASK-4--------//
//----------------Sözün palindrom olub olmadığını yoxlayın

function isPalindrome(string) {
  return true;
}
console.log(isPalindrome("radar"));

//--------------------------------------- TASK 5 --------------------------------------------

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const length = 4;

function splitIntoChunk(arr, len) {
  for (let i = 0; i < arr.length; i += len) {
    let tempArray = [];
    tempArray = arr.slice(i, i + len);
    console.log(tempArray);
  }
}

splitIntoChunk(array, length);

//----------------------------------- TASK 6 --------------------------------------------

// console.log(longestWord("Hello word hi programmers"));

