// 객체 : 복합 데이터 { key : value }
/**
 * value : 원시 & 객체 어떤 값이 들어와도 된다.
 * 객체의 메모리 저장 방식 : 객체 자체는 Heap 메모리 안에 저장이 되며 그 객체를 참조하는 식별자는 객체를 가리키는 참조값을 저장한다.*/

let name = "apple";
let color = "red";
let display = "🍎";

let orangeName = "orange";

let apple = {
  name: "apple",
  color: "red",
  display: "🍎",
};

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

let orange = {
  name: "orange",
  color: "orangeColor",
  display: "🍊",
};

console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);
