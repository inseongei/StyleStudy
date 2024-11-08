/* 00:52 / 10:00 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  for (let i = 1; i <= Number(input[0]); i++) {
    console.log("*".repeat(i));
  }
});

// 1. 반복문과 "*"을 repeat 메소드 사용
