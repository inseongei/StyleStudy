/* 00:20 / 10:00 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str1 = input[0];
  str2 = input[1];
  console.log(str1 + str2);
});

// 주어지는 str1과 str2를 붙혀 출력하면 된다.
