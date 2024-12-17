/* 시간초과💢 */
function solution(board) {
  const n = board.length; // n * n 크기
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1], // 위쪽 대각선, 위, 위쪽 대각선
    [0, -1],
    [0, 1], // 왼쪽, 오른쪽
    [1, -1],
    [1, 0],
    [1, 1], // 아래쪽 대각선, 아래, 아래쪽 대각선
  ];

  // 새로운 배열을 만들어 위험지역을 표시 (deep copy)
  const dangerZone = Array.from(Array(n), () => Array(n).fill(0));

  // 지뢰(1)가 있는 곳을 기준으로 위험지역 표시
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        // 지뢰 발견
        dangerZone[i][j] = 1; // 지뢰 위치 자체도 위험지역

        // 8방향 탐색
        for (let [dx, dy] of directions) {
          const ni = i + dx;
          const nj = j + dy;

          // 배열 범위를 벗어나지 않도록 확인
          if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
            dangerZone[ni][nj] = 1; // 위험지역 표시
          }
        }
      }
    }
  }

  // 안전지역 카운트
  let safeZoneCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dangerZone[i][j] === 0) {
        // 위험지역이 아닌 곳
        safeZoneCount++;
      }
    }
  }

  return safeZoneCount;
}
