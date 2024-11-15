/* 01:43 / 10:00 */
function solution(n, k) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) result.push(i);
  }
  return result.sort((a, b) => a - b);
}

// 정수 n과 k가 주어질 때 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 정렬
// 1. n을 반복문으로 돌리면서 반복문의 i번째가 k와 나눴을 때 나머지가 0이라면 result 배열에 넣어준다.
// 2. 오름차순이기 때문에 sort() 메소드를 사용해서 돌려준다.
