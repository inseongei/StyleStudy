// 논리연산자 Logical Operator
// && : 그리고 (두가지 표현식이 TRUE)
// || : 또는 (두가지중 하나만 TRUE 면 TRUE)
// 단축평가 : short-circuit evaluation
const obj1 = { name: "체리" };
const obj2 = { name: "냐옹이", owner: "인성" };

// obj1를 평가하고 그다음 obj2를 평가한다. (각각의 표현식들이 boolean 값으로 평가)
if (obj1 && obj2) {
  console.log("둘다 True");
}

// ojb1를 평가하고 true라면 뒤에껀 볼 필요도 없다.
if (obj1 || obj2) {
  console.log("둘다 True");
}

// obj1이 ture니깐 뒤에있는 obj2가 result에 할당
let result = obj1 && obj2;
console.log(result);

// obj1이 true니깐 뒤에있는 obj2를 확인할 필요가 없으므로 result에 obj1이 할당
result = obj1 || obj2;
result = false || obj2;
console.log(result);

// 활용예
// && 조건이 truthy일때, 무언가를 해야 할 경우
// || 조건이 falshy일때, 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 없어");
  }
  animal.owner = "바뀐주인!";
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error("주인이 있어");
  }
  animal.owner = "새로운주인!";
}

obj1.owner && changeOwner(obj1);
obj1.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

// obj1.owner || changeOwner(obj1);
// obj1.owner || changeOwner(obj2);
// console.log(obj1);
// console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 설정(할당) : 0, -0, null , undefined, ""

function print(message) {
  const text = message || "Hello";
  console.log(text);
}

print();
print(null);
