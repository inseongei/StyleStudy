/** 삼항 조건 연산자 Ternary Operator
 *  조건식 ? 참인경우 : 거짓인경우
 */

// 조건이 2개인경우에 코드를 간단하게 작성할 수 있게 도와준다.
let fruit = "apple";
if (fruit === "apple") {
  console.log("🍎");
} else {
  console.log("🥲");
}

fruit === "apple" ? console.log("🍎") : console.log("🥲");

let emoji = fruit === "apple" ? "🍎" : "🥲";
console.log(emoji);
