/* 01:02 / 10:00 */
function solution(num_str) {
  let array = Array.from(num_str);
  return array.reduce((start, index) => (start += +index), 0);
}

// 한 자리 정수로 이루어진 문자열 num_str
// 각 자리수의 합
