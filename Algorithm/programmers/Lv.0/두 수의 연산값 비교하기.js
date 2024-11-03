/* 1:13 / 10:00 */
function solution(a, b) {
  let aNum = String(a) + String(b);
  let bNum = 2 * a * b;
  return Math.max(aNum, bNum);
}

// 1. a와 b의 숫자들을 문자열처럼 합친 값과 2 * a * b의 값 중 큰 값을 리턴하면 된다.
// 2. Math.max 메소드를 사용해서 둘 중 큰 값을 리턴하면 문제에서 원하는 답을 찾을 수 있다.
