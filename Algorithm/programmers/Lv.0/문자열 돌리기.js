/* 00:25 / 10:00 */
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
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
});

// 1. 주어지는 str의 문자열을 하나씩 출력하면 된다.
// 2. 반복문을 이용해서 str의 i번째를 콘솔로그로 출력
