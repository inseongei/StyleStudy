/* 시간초과💢 */
function solution(n) {
  let result = [];
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      if (n % i === 0) result.push(i);
    }
  }

  return result;
}

// 소인수 분해를 찾는 식을 구해야한다.
// 소수들의 곱 === 소인수분해
