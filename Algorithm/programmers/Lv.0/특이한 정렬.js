/* 시간초과💢 */
function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const diffA = Math.abs(a - n);
    const diffB = Math.abs(b - n);

    // 거리 기준으로 정렬
    if (diffA !== diffB) {
      return diffA - diffB;
    }

    // 거리가 같다면 큰 수를 우선
    return b - a;
  });
}
