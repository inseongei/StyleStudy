/* 00:41 / 10:00 */
function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

// 1. 두수의 num1과 num2를 나누고 곱하기 1000을 해주면 된다.
// 2. 하지만 소수로 나올 경우가 있으니 Math.floor를 사용하여 소수점을 버려준다.
