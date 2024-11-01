/* 01:45 / 10:00 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let result = "";

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toUpperCase()
      ? (result += str[i].toLowerCase())
      : (result += str[i].toUpperCase());
  }
  console.log(result);
});

// 1. 주어지는 문자열을 반복을 시키면서 str[i]번째가 str[i]를 대문자로 했을 때 같다면 소문자로 , 같지 않다면 대문자로 바꿔준다.
// 2. 대문자로 변환하는 메소드 : toUpperCase() , 소문자로 변환하는 메소드 : toLowerCase();
