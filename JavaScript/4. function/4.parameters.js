// 매개변수의 기본값 : undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장된다.
// 매개변수 기본값 Default Parameters a = 1, b = 1
function add(a = 1, b = 1) {
  // 아무런 값이 전달되지 않았다면 1 , 전달됬다면 해당 되는 값
  console.log(a);
  console.log(b);
  console.log(arguments);
  return a + b;
}

/** arguments
 * 함수에 전달된 매개변수들의 정보를 알 수 있다.
 */

// 추가적으로 값이 전달되면 값이 무시된다.
add(1, 2, 3);

console.clear();

// Rest 매개변수 Rest Parameters : 얼마나 많은 개수의 매개변수가 전달될지 모를 경우에 사용
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8);
