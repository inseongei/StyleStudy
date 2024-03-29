/** 산술 연산자 (Arithemtic operators)
 * + 더하기
 * - 빼기
 * * 곱하기
 * / 나누기
 * % 나머지
 * ** 지수 (거듭제곱)
 */

console.log(5 + 2); // 7
console.log(5 - 2); // 3
console.log(5 % 2); // 1
console.log(5 ** 2); // 25 → es7에 추가 그전엔 Math.pow(5,2)

// + 연산자 주의점!
let text = "두개의" + "문자를" + "연결";
console.log(text);
text = "1" + 1; // 11
console.log(text); // 문자열로 11이 나옴 (숫자와 문자를 더하면 문자열로 암묵적 타입 변환이 된다.)
