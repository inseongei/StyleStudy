/* 1:08 / 10:00 */
function solution(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    i % 2 !== 0 && result.push(i);
  }
  return result;
}

// 1. result라는 배열에 홀수를 담으면 된다.
// 2. 반복문을 이용하여 i % 2 !== 0이라면 result에 push를 해주면 된다.
// && : 앞에 조건문이 true라면 뒤에 계산식을 수행해라 라는 뜻
