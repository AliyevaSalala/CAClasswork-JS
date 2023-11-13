//-------------------------TASK-1-----------------------//
//----------find_FirstNotRepeatedChar adli bir function yaradin. Bu function gonderdiyiniz string-in ilk tekrarlanmyan herfini qaytarsin.

// function FirstNotRepeatedChar(string) {
//   let array = "";

//   for (let i = 0; i < string.length; i++) {
//     if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
//       array += string[i];
//     }
//   }
//   return array[0];
// }

// console.log(FirstNotRepeatedChar("abacddbecz"));

//-------------TASK-2
//---------------charCount adli function yaradin. bu function 2 eded argument qebul edir. 2ci gonderdiginiz herf 1-nin icersinde nece defe tekrarlanibsa onun sayisini gosterin.

function charCount(str, char) {
  let count=0;
//   let findElem = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
    //   findElem = str[i];
    count++
    }
  }
  return count
}
// console.log(charCount('uw3rescource.com','c'));
//---------------TASK-3
//--------------MAKEDiD ADLI FUNCTION YARADIN. bu function qebul etdiyi reqem uzunlugunda random ID verilmelidir.

function madeId(params) {

}

console.log(madeId(8));
