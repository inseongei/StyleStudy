/* 시간초과💢 */
function solution(my_string, s, e) {
  let array = my_string.split("");
  let changeArr = array.slice(s, e + 1).reverse();
  array.splice(s, changeArr.length, ...changeArr);
  return array.join("");
}

// 문자열 my_string
// 정수 s,e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스e까지 뒤집은 문자열을 return

// 1. reverse 메소드를 사용하기 위해 배열 형태로 바꿔준다.
// 2. splice 이용해서 기존 배열을 바꾼 배열과 교체
