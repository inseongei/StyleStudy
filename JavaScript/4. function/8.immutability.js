// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 옳지 않다 👎
// 상태변경이 필요한 경우에는 새로운 상태를(오브젝트,값)을 만들어서 반환해야 한다.
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (값이 아닌 메모리 주소)
function display(num) {
  num = 5;
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

// 불변성을 지키지 않을 경우
function displayObj(obj) {
  obj.name = "who"; // 👎 외부로부터 주어진 인자(오브젝트)를 내부에서 변경하지 않아야 한다.
  console.log(obj);
}
const inseong = { name: " inseong" };
displayObj(inseong);
console.log(inseong);

// 굳이 변경해야 한다면?
function changeName(obj) {
  // 이름부터 변경한다는 느낌을 줘야 한다.
  return { ...obj, name: "Bob" }; // 반환할때는 새로운 오브젝트를 만듬
}

console.log(changeName(inseong));
