/* 💢시간초과💢 */
function solution(numer1, denom1, numer2, denom2) {
  const num = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;

  return [num / gcd(num, denom), denom / gcd(num, denom)];

  function gcd(a, b) {
    let min = Math.min(a, b);
    let num;
    for (let i = 1; i <= min; i++) {
      if (a % i === 0 && b % i === 0) {
        num = i;
      }
    }
    return num;
  }
}

// 1. 분모를 서로 곱하고 분자는 각각의 분모끼리 크로스 형식으로 곱해준다.
// 2. 문제에서는 기약분수로 나타내야 하기 때문에 최대공약수를 구해서 나눠준다.

/** 최대 공약수 로직
 * 주어지는 a,b의 중 작은 값을 구해준다.
 * 반복문을 1부터 작은 값까지 돌린다. ( 최대 공약수이기 때문에 작은 값 이상으로 나올 수 없기 때문이다 )
 * a와 b를 반복문의 i와 나눴을 때 나머지가 0이라면 num 을 i로 할당한다.
 */
