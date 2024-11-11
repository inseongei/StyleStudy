/* 00:56 / 10:00 */
function solution(number) {
  let num = 0;

  for (let i = 0; i < number.length; i++) {
    num += +number[i];
  }

  return num % 9;
}

// 음이 아닌 정수를 9로 나눈 나머지
// 문자열 number의 각 자리수를 모두 더해 9로 나누면 된다.
