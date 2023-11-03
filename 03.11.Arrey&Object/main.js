///Task 1
// Verilmis array-da en boyuk ve en kicik elementi tapin.
// let numbers = [12, 45, 6, 78, 34, 99, 23];
// let max = numbers[0];
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   } else if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(`En boyuk reqem:`, max, `En kicik reqem:`, min);

//Task-2

//verilmis arrayin elementlerinin cemini hesablayin

// let array = [12, 45, 6, 78, 34, 99, 23];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log("SUM:", sum);

//Task-3

//verilmis arrayda 2ci index ile 3cu index-in yerini deyisdirin.

// let num = [1, 2, 3, 4, 5];
// let temp;
// temp = num[2];
// num[2] = num[3];
// num[3] = temp;
// console.log(num);

//Task-4

//verilmis arrayda musbet reqemleri cixardin/

let results = [12, -5, 6, -3, 34, -1, 23];
let positive = [];
for (let i = 0; i < results.length; i++) {
  if (results[i] > 0) {
    positive =results[i];
    console.log(positive);
  }
}

