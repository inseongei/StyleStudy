// 구조 분해 할당 - Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다.
const fruits = ["사과", "키위", "딸기", "바나나"];
const [first, second, ...others] = fruits;
console.log(fruits[0]);
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ["apple", "사과"];
}

const [enName, korName] = createEmoji();
console.log(enName);
console.log(korName);

const inseong = { name: "inseong", age: 25, job: "개발자" };
function display({ name, age, job }) {
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}
display(inseong);

const { name, age, job: occ, pet = "강아지" } = inseong;
console.log(name);
console.log(age);
console.log(occ);
console.log(pet);

// Quiz

const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
