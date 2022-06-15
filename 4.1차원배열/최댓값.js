// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// let x=[...input]
// console.log(input)
// let arr= x.sort((a,b)=>b-a)
// console.log(input)
// let b=0
// for(i=0; i<x.length;i++){
//   if(input[i]===arr[0]){
//     return console.log(arr[0],i+1)
//   }
// }

//----------------------
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let x = [...input];

let arr = x.sort((a, b) => b - a);

let b = 0;
for (i = 0; i < x.length; i++) {
  if (input[i] === arr[0]) {
    console.log(arr[0], i + 1);
  }
}
