/* 04:40 / 10:00 */
function solution(n, t) {
  for (let i = 1; i <= t; i++) {
    n = n * 2;
  }

  return n;
}

// 1시간에 두배 만큼 증식
