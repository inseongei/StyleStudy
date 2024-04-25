// 함수의 호이스팅 : 자바스크립트 엔진이 코드를 실행하기전에 함수의 선언을 최상단으로 끌어올려주기 때문
// 함수의 선언문은 함수 이전에도 호출이 가능함
print();
function print() {
  console.log("hello");
}

// 변수(let,const)와 클래스는 선언만 호이스팅 되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
// console.log(func1);
// let hi = "hi";
// console.log(hi);
// let func1 = function () {};

// let cat = new Cat();

// class Cat {}

let x = 1;
{
  console.log(x); // 오류
  let x = 2;
}
