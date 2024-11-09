/* 01:05 / 10:00 */
function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) result += i;
  }
  return result;
}

// 정수 n에 대한 짝수를 더한 값을 리턴

// 1. 반복문을 돌면서 n % 2 === 0인 조건에 true인 반복문 i의 합을 구함
