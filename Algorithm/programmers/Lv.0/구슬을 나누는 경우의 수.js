/* 05:48 / 10:00 */
function solution(balls, share) {
  return Math.round(fact(balls) / (fact(balls - share) * fact(share)));
}

function fact(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
