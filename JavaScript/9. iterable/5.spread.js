// Spread 연산자, 전개구문
// 모든 Interable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// { ... obj }
// EcmaScript 의 2018에 도입되었음

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
// console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums));

// Rest parameters : 인자가 정해져있지 않다면
function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruit1 = ["사과", "키위"];
const fruit2 = ["딸기", "바나나"];
let arr = fruit1.concat(fruit2);
console.log(arr);
arr = [...fruit1, "레몬", ...fruit2];
console.log(arr);

// Object
const inseong = { name: "인성", age: 25, home: { address: "집" } };
const updated = {
  ...inseong,
  job: "개발자",
};

console.log(updated);
