// // 런타임에러
// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// let n = Number(input[0].split(" ")[0]);
// let b = input[1].split(" ").sort((a, b) => a - b);

// let answer = 0;
// for (i = 0; i < b.length; i++) {
//   answer += b[i] * (n - i);
// }
// console.log(answer);
//----------------------------------------
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let b = input[1].split(" ").sort((a, b) => a - b);

let answer = 0;
for (i = 0; i < b.length; i++) {
  answer += b[i] * (n - i);
}
console.log(answer);
