/* 01:09 / 10:00 */
function solution(x1, x2, x3, x4) {
  let isA = x1 || x2;
  let isB = x3 || x4;

  return isA && isB;
}

// 1. 문제에서 원하는 식은 ( x1 || x2 ) && ( x3 || x4 )를 구하는 것이다.
