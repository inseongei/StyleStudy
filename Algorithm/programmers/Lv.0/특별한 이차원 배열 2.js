/* 시간초과💢 */
function solution(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0; // 대칭이 아닌 경우
      }
    }
  }

  return 1; // 대칭을 만족하는 경우
}
