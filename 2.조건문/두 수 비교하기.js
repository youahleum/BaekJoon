let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);
let answer = "";

if (a > b) {
  answer = ">";
} else if (a < b) {
  answer = "<";
} else {
  answer = "==";
}
console.log(answer);
