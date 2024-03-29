/** 동등 비교 관계 연산자 (equality Operators)
 *  == 값이 같음
 *  != 값이 다름
 *  === 값과 타입이 둘다 같음
 *  !== 값과 타입이 다름
 */

console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == "2"); // true 🚨 숫자와 문자열을 비교할 경우 문자열안에 있는 값만 확인
console.log(2 === "2"); // false - 안에 있는 값은 동일하지만 타입은 다르다.
console.log(true == 1); // 🚨 1을 boolean 변환하면 true이다.
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false

console.clear();

const obj1 = {
  name: "js",
};

const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); // false : 메모리에 들어가있는 메모리 주소가 다르기 때문 ( 객체 타입이 메모리에 어떻게 들어가는지 알 것)

console.log(obj1.name == obj2.name); // true
