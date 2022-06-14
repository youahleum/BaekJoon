// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// let x=Number(input[0])
// let y=input[1].split(' ')
// console.log(x,y)

// y.sort((a,b)=>a-b)
// console.log(y[0],y[x-1])

//--------------------
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let x = Number(input[0]);
let y = input[1].split(" ");

y.sort((a, b) => a - b);
console.log(y[0], y[x - 1]);
