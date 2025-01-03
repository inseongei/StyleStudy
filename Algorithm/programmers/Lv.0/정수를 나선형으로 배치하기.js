/* 시간초과💢 */
function solution(n) {
  const result = Array.from({ length: n }, () => Array(n).fill(0)); // n x n 크기의 배열 생성
  let num = 1; // 채울 숫자
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;

  while (top <= bottom && left <= right) {
    // 상단 행 채우기
    for (let i = left; i <= right; i++) {
      result[top][i] = num++;
    }
    top++; // 상단 행 한 칸 내려가기

    // 오른쪽 열 채우기
    for (let i = top; i <= bottom; i++) {
      result[i][right] = num++;
    }
    right--; // 오른쪽 열 한 칸 왼쪽으로 이동

    // 하단 행 채우기
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result[bottom][i] = num++;
      }
      bottom--; // 하단 행 한 칸 위로 이동
    }

    // 왼쪽 열 채우기
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result[i][left] = num++;
      }
      left++; // 왼쪽 열 한 칸 오른쪽으로 이동
    }
  }

  return result;
}
