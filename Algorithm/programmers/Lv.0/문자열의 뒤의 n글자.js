/* 02:25 : 10:00 */
function solution(my_string, n) {
  return my_string.substring(my_string.length - n, my_string.length + 1);
}

// 문자열 my_string
// 정수 n
// n글짜로 이루어진 문자열을 리턴한다.

// 1. substring 메소드를 이용해서 뒤에서 부터 n글자 만큼 리턴
