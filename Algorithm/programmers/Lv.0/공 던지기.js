/* 시간초과💢 */
function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}

/* 시간초과💢 */
function solution(numbers, k) {
  // 시작 위치는 1번 사람 (배열의 인덱스는 0부터 시작)
  let index = 0;
  // 공을 k번 던집니다.
  for (let i = 1; i < k; i++) {
    index += 2; // 두 칸씩 이동
    index %= numbers.length; // 배열 길이를 초과하면 다시 처음으로 돌아옴
  }
  return numbers[index];
}
