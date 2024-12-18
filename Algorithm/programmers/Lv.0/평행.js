/* 시간초과💢 */
function solution(dots) {
  // 두 점의 기울기를 계산하는 함수
  const getSlope = (dot1, dot2) => {
    const [x1, y1] = dot1;
    const [x2, y2] = dot2;
    return (y2 - y1) / (x2 - x1);
  };

  // 네 점의 조합 중 두 쌍의 직선 기울기를 비교
  const slopes = [
    [0, 1, 2, 3], // 점 0-1과 점 2-3 연결
    [0, 2, 1, 3], // 점 0-2와 점 1-3 연결
    [0, 3, 1, 2], // 점 0-3과 점 1-2 연결
  ];

  for (const [a, b, c, d] of slopes) {
    if (getSlope(dots[a], dots[b]) === getSlope(dots[c], dots[d])) {
      return 1; // 평행인 경우
    }
  }

  return 0; // 평행인 경우가 없음
}
