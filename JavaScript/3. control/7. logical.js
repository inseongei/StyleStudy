/** 논리연산자 Logical Operator
 * && 그리고
 * || 또는
 * ! 부정(단항연산자에서 온것)
 * !! Boolean 값으로 변환 (단항연산자 응용버전)
 */

let num = 8;
// && : ~이면 (그리고) **둘다 참** 이여야 한다.
// || : ~하거나 (또는) **둘중 하나** 만 참이여도 된다.
if (num >= 0 && num < 9) {
  console.log("실행");
}

if (num != 9) {
  console.log("실행2");
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log("---------------------");

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log("---------------------");
console.log(!"text"); // false
console.log(!!"text"); // true
