// Set
// Set은 빈 Set을 만들어도 되고 배열을 전달해도 된다.
const set = new Set([1, 2, 3]);
console.log(set);

// Set의 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회가 가능
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6); // 있는데 추가하면 무시된다.
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name: "사과", price: 8 };
const obj2 = { name: "바나나", price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// Quiz
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// 퀴즈
const obj3 = { name: "바나나", price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);
