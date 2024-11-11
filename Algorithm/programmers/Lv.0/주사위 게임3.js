/* 시간초과💢 */
function solution(a, b, c, d) {
  let array = [a, b, c, d];
  let frequency = {};

  // 등장 빈도 카운트
  array.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  // 빈도수를 기준으로 배열을 생성
  let values = Object.keys(frequency).map(Number);
  let counts = Object.values(frequency);

  if (counts.length === 1) {
    // 모든 숫자가 같다면 1111 * p
    return 1111 * values[0];
  } else if (counts.length === 2) {
    if (counts.includes(3)) {
      // 세 주사위는 같고 나머지 하나는 다른 경우
      let p = values[counts.indexOf(3)];
      let q = values[counts.indexOf(1)];
      return (10 * p + q) ** 2;
    } else {
      // 두 개씩 같은 경우
      let [p, q] = values;
      return (p + q) * Math.abs(p - q);
    }
  } else if (counts.length === 3) {
    // 두 주사위는 같고 나머지 두 주사위는 각각 다른 경우
    let q = values[counts.indexOf(1)];
    let r = values[counts.lastIndexOf(1)];
    return q * r;
  } else {
    // 모든 숫자가 다 다른 경우
    return Math.min(...values);
  }
}
