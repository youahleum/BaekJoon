// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let x=Number(input[0])
// let y=Number(input[1])
// // console.log(x,y)

// if(x>0 && y>0 ){
//   console.log(1);
// }else if(x<0 && y>0 ){
//   console.log(2);
// }else if(x<0 && y<0 ){
//   console.log(3);
// }else {
//   console.log(4)
// }
//--------------------
let fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let x = Number(input[0]);
let y = Number(input[1]);
// console.log(x,y)

if (x > 0 && y > 0) {
  console.log(1);
} else if (x < 0 && y > 0) {
  console.log(2);
} else if (x < 0 && y < 0) {
  console.log(3);
} else {
  console.log(4);
}
