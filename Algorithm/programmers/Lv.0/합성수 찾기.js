/* 03:32 / 10:00 */
function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    let check = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) check++;
    }
    check >= 3 && result++;
  }
  return result;
}

// 약수의 개수가 세 개 이상인 수를 합성수라고 한다.
// 자연수 n이 주어질 때 n이하의 합성수의 개수

// 1. n을 반복하면서 각각의 n의 약수가 3개이상인지를 확인 후 result에 +1을 해준다.
