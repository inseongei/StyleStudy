/* 05:34 / 10:00 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  console.log(`!@#$%^&*(\\'"<>?:;`);
});

// 1. (``)백틱을 사용하게 되면 escape 문자로 인해 사라지게 될 백슬래시를 넣어주어야 한다.
