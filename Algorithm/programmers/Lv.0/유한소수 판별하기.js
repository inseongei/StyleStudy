/* 시간초과💢 */
function solution(a, b) {
  // a와 b의 최대공약수를 구해서 기약분수로 만들기
  function gcd(x, y) {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }

  let gcdValue = gcd(a, b);
  b /= gcdValue; // 기약분수로 만들기 위해 b를 최대공약수로 나눔

  // b의 소인수 중 2와 5가 아닌 다른 소인수가 존재하는지 확인
  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }

  // b가 1이 되면 2와 5만 소인수로 가지고 있는 것
  return b === 1 ? 1 : 2;
}
