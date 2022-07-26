// 런타임 에러  -- 더하는게 아님
// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// let answer=0
// for(i=0;i<input.length;i++){
//  answer+=input[i]
// }
// console.log(answer)

//-------------------
//런타임 에러 - 줄을 바꿔서 정렬해야함
// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// input.sort((a, b) => a - b);
// console.log(input.sort((a, b) => a - b));

//----------------
//런타임 에러 - 중복되는 수를 지우지 않음
// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// input.sort((a,b)=>a-b)
// for(i of input){

//   console.log(i)
// }

//--------------------------
//런타임 에러 - input.txt를 안바꿔줬음
// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// input.sort((a, b) => a - b);
// for (i = 0; i < input.length; i++) {
//   if (input[i] !== input[i - 1]) {
//     console.log(input[i]);
//   }
// }

//-----------------
// 출력형식이 잘못됨
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

input.sort((a, b) => a - b);
for (i = 0; i < input.length; i++) {
  if (input[i] !== input[i - 1]) {
    console.log(input[i]);
  }
}
