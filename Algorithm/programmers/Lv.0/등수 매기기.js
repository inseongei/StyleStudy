/* 시간초과💢 */
function solution(score) {
  // 평균 점수 계산
  const avg = score.map(([en, ma]) => (en + ma) / 2);

  // 평균 점수를 내림차순 정렬하면서 원래의 인덱스를 유지
  const sorted = avg
    .map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value);

  // 등수를 저장할 배열
  const ranks = new Array(score.length);

  // 등수 계산
  let rank = 1;
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i].value === sorted[i - 1].value) {
      // 동일한 평균 점수는 같은 등수
      ranks[sorted[i].index] = ranks[sorted[i - 1].index];
    } else {
      ranks[sorted[i].index] = rank;
    }
    rank++;
  }

  return ranks;
}
