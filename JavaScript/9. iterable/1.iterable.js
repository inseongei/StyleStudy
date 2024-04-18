// Iterable 하다는건! 순회가 가능하다는 것
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 어떤일을 할 수있는지 : for..of , spread 연산자 사용가능
const array = [1, 2, 3];
for (const item of array.entries()) {
  console.log(item);
}
const obj = { 0: 1, 1: 2 };
// Key를 출력
for (const item in obj) {
  console.log(item);
}

// console.log(iterator.next()); // 값을 감싸고 있는 객체가 리턴 {value,done(반복이 끝났는지 안끝났는지)}

console.clear();
const iterator = array.values();

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
