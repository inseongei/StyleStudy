/* 00:27 / 10:00 */
function solution(n) {
  let array = Array.from(n + "");

  return array.reduce((start, item) => (start += +item), 0);
}

// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 리턴
