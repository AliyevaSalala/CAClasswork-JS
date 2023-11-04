// let array = Array();

// let itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
// console.log(itCompanies.length);
// console.log(itCompanies);

// console.log(
//   "ilk elementi:",
//   itCompanies[1],
//   "sonuncu elementi:",
//   itCompanies[itCompanies.length - 1]
// );
// console.log("orta elementi:", itCompanies[parseInt(itCompanies.length / 2)]);

// for (let i = 0; i < itCompanies.length; i++) {

//   array.push(itCompanies[i].toLocaleUpperCase());
// }

// console.log(array);

// console.log(itCompanies.toString(), "boyuk IT sirketlerdir");

//Verilmis array-in en uzun sozunu ekrana cixaran proqram yazin.

// let maxLength = itCompanies[0].length;
// let maxIndex = 0;
// for (let i = 0; i < itCompanies.length; i++) {
//   if (itCompanies[i].length > maxLength) {
//     maxLength = itCompanies[i].length;
//     maxIndex = i;
//   }
// }
// console.log(maxLength);
// console.log(itCompanies[maxIndex]);

let compaines = ["Facebook", "Google", "Microsoft" ,"APPLE", "IBM" , "Oracle", "Amazon"];
for (let i = 0; i < compaines.length; i++) {
  if (compaines[i]===compaines[i].toLocaleUpperCase()) {
 console.log(` ${i}. ${compaines[i]}`);
  } 
}  

