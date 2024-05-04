/**
 * Type Inference
 */

let text = "hello"; // 따로 타입을 명시하지 않아도 에러가 발생 X

text = "hi";
// text = 1; // 선언한 것과 동시에 문자열을 할당했기에 타입스크립트가 해당 text 변수를 string형으로 인식

function print(message = "hello") {
  console.log(message);
}

print("hello");
// print(1);

function add(x: number, y: number): number {
  return x + y;
}

const result = add(1, 2);

// 타입 추론은 알아서 자동으로 타입을 명시해주지만 , 규모가 큰 프로젝트를 할 경우는 타입을 적어주는 것이 좋다.
