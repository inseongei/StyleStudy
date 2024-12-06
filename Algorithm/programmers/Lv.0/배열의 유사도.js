/* 01:38 / 10:00 */
function solution(s1, s2) {
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    s2.includes(s1[i]) && result++;
  }
  return result;
}
