/* 07:24 / 10:00 */
function solution(n) {
  let result = [];

  while (n !== 1) {
    result.push(n);
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }
  return [...result, 1];
}

// n을 기준으로 n이 짝수일 때는 2로 나누고 n이 홀수 일 때는 3 * n + 1

// 1. result 변수 만들고
// 2. while문 사용해서 n이 1이면 반복 종료
// 3. 짝수 일 경우 홀수 일 경우 판별
