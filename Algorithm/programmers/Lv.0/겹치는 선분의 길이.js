/* 시간초과💢 */
function solution(lines) {
  // 선분의 시작점과 끝점을 기준으로 범위를 표시
  const ranges = new Array(201).fill(0); // 선분 범위는 -100 ~ 100 (총 201칸)

  // 각 선분의 범위를 증가
  lines.forEach(([start, end]) => {
    for (let i = start + 100; i < end + 100; i++) {
      ranges[i]++;
    }
  });

  // 두 개 이상의 선분이 겹치는 구간의 길이를 계산
  return ranges.reduce((acc, cur) => (cur >= 2 ? acc + 1 : acc), 0);
}
