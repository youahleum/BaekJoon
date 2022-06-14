// Replit에서 문제풀이 할때

// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// let a = Number(input[0].split(" ")[0]);
// let b = Number(input[0].split(" ")[1]);
// console.log(a + b);
//-----------------------------------------

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);
console.log(a + b);
