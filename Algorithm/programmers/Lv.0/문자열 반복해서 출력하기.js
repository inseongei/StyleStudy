/* 00:27 / 10:00 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);
  console.log(str.repeat(n));
});

// 1. 문자열 : str , 반복해야할 횟수 : n
// 2. repeat 메소드를 사용해서 문자열을 반복해 주면 된다.
