/* 시간초과💢 */
function solution(A, B) {
  if (A === B) return 0; // 이미 같은 경우

  let len = A.length;
  for (let i = 1; i <= len; i++) {
    A = A.slice(-1) + A.slice(0, -1); // 오른쪽으로 한 칸 밀기
    if (A === B) return i; // B와 일치하면 최소 횟수 반환
  }

  return -1; // 끝까지 확인해도 일치하지 않으면 -1 반환
}
