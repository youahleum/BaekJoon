let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);
console.log(a * b);

function a() {
  {
    setTimeout(() => {
      console.log(1);
    }, 2000);
  }
  console.log("2");
}
