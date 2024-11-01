/* 00:54 / 10:00 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  console.log("a =", Number(input[0]));
  console.log("b =", Number(input[1]));
});

// 출력 방법이 달라서 주의할 것
// 문제에서 주어지는 숫자 2개는 각각 input[0] , input[1]에 담기기 때문에 console.log를 이용해서 찍어주면 된다.
