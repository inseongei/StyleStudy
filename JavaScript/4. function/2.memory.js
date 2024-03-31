function add(a, b) {
  return a + b;
}

// add가 가리키고 있는 메모리 주소를 받는 것
const sum = add;

console.log(sum(1, 2));
console.log(add(1, 2));
