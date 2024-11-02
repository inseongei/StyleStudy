/* 00:32 / 10:00 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  n = Number(input[0]);

  return n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
});

// 홀수짝수를 구분하는 n % 2 === 0 이라는 식을 기준으로 삼항 연산자를 돌려 콘솔 로그를 출력
