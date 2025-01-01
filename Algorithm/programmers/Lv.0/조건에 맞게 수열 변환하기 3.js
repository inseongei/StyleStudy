/* 01:14 / 10:00 */
function solution(arr, k) {
  if (k % 2 === 0) {
    // 짝수
    return arr.map((item) => (item += k));
  } else {
    return arr.map((item) => (item *= k));
  }
}

// k가 홀수라면 arr의 모든 원소에 k를 곱하고 짝수라면 arr 모든 원소에 k를 더한다.
