/* 02:01 / 15:00 */
function solution(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result.sort((a, b) => a - b);
}

// 정수 n이 매개변수로 주어질 때 n의 약수를 오름차순으로 담으래
