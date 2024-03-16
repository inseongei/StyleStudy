// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
const text = "hello";
// text = "hi";

// 1. 상수, 상수변수 또는 변수 - 항상 대문자로
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: "apple",
  color: "red",
  display: "🍎",
};

console.log(apple);
apple.name = "orange"; // 값은 바뀔까 ?
console.log(apple);

/**
 * 당연히 바뀌지~ 재할당이 안될뿐 객체는 변경 가능한 특징을 가지고 있잖아 원시값( 변경 불가능한 값의 특징 )만 안바뀌는거야 !
 */
