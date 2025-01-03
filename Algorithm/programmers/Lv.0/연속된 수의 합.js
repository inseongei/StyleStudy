/* 시간초과💢 */
function solution(num, total) {
  const start = (total - (num * (num - 1)) / 2) / num; // 첫 번째 숫자 계산
  return Array.from({ length: num }, (_, i) => start + i); // 연속된 숫자 배열 생성
}
