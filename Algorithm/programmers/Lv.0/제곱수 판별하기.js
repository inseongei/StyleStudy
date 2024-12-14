/* 02:44 / 10:00 */
function solution(n) {
  let num = Math.sqrt(n);
  return Number.isInteger(num) ? 1 : 2;
}

// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱 수
// 정수 n n이 제곱수라면 1 아니라면 2
