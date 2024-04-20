// 옵셔널 체이닝 연산자 Optional Chaing Operator
// ES11 (ECMAScript 2020)
// ?..
// null 또는 undefined를 확인할 때
let item = { price: 1 };
const price = item?.price;
console.log(price);

let obj = { name: "체리", owner: { name: "인성" } };
function printName(obj) {
  const ownerName = obj && obj.owner && obj.owner.name;
  console.log(ownerName);
}

printName(obj);
