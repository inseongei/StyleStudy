/* 시간초과💢 */
function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}
