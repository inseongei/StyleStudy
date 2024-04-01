// object literal {key : value}
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
  name: "apple", // 대부분은 이게 좋은 예 ✅
  "hello-by": "👍",
  0: 1,
  ["hello-bye1"]: "👍",
};

// 속성, 데이터에 접근하기 위해서는
apple.name; // 마침표 표기법 dot notation
console.log(apple["hello-bye1"]); // 대괄호 표기법 bracket notation
apple["name"];

// 속성 추가 - 없는 키를 동적으로 만들어도 만들어진다.
apple.emoji = "🍎";
console.log(apple.emoji);
console.log(apple["emoji"]); // 대괄호 표기법은 문자열로 감싸야 한다.

// 속성 삭제
delete apple.emoji;
console.log(apple);
