/* 01:31 / 10:00 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  console.log(str);
});

// 출력 방법이 달라서 주의할 것
// 문자열을 출력하기 위해서 문자열이 담긴 str을 출력해주면 된다.
