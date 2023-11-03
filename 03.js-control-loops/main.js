// for (let index = 1; index < 100; index++) {
//   if (index % 2 === 0) {
//     console.log(index);
//   }
// }

//TASK-2

// let str = "sharifa";
// let strLength = str.length;

// for (i = 0; i < strLength; i++) {
//   console.log(str[i]);
// }

//TASK-3

// let a = 0;
// while (a < 100) {
//   a++;
//   if (a % 10 === 7) console.log(a);
// }

//TASK-4

// let b=0;
// while (b<100) {
//     b++;
//     if(b%11===0)
//     console.log(b)

// }

//TASK-5

// let number = 25;
// for (let index = 0; index < 25; index++) {
//   if (number % index == 0) console.log(index);
// }

//0 dan 15-e qeder reqemleri cap edin
// let a = 0;
// while (a <15) {
//   a++;
//   console.log(a);
// }

//12den 24e qeder reqemleri cap edin

// let a=12;
// while (a<24) {
//     a++;
//     console.log(a)

// }

//7den 31 qeder tek ededleri cixardin

// let a = 7;
// for (let i = 0; i < 31; i++) {
//   a++;
//   if (a % 2 == 1) console.log(a);
// }

//10 dan 20 kimi cut ededdleri cixardin
// let a=10;
// for (let i = 0; i < 20; i++) {
//     a++;
//     if(a%2==0){
//         console.log(a)
//     }

// }

//1-den 255e qeder 3 bolunenlerde "Fizz", 5e bolunenlerde"Buzz", 3 ve 5 bolunenlerde "FizzBuzz"

let a = 0;
while (a < 255) {
  a++;
  if (a % 3 == 0 && a % 5 == 0) {
    console.log(`${a} FizzBuzz`);
  } else if (a % 3 == 0) {
    console.log(`${a} Fizz`);
  } else if (a % 5 == 0) {
    console.log(`${a} Buzz`);
  }
}

// Calculating the Factorial of the Number Entered bt the User:

// let a = 5;
// let factorial = 1;
// for (let i = 1; i<a; i++) {
//     factorial *=i

// }    console.log(`factorial ${factorial}`)
