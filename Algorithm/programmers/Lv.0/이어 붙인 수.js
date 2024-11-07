/* 05:13 / 10:00 */
function solution(num_list) {
  let even = ""; // 짝수
  let odd = ""; // 홀수
  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 === 0 ? (even += num_list[i]) : (odd += num_list[i]);
  }

  return Number(even) + Number(odd);
}

// 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 리턴

// 1. 짝수의 값을 담을 문자열 변수와 홀수의 값을 담을 문자열 변수를 만들어준다.
// 2. 반복문을 통해서 num_list i번째가 홀수인지 짝수인지를 판별해서 해당되는 문자열에 넣어준다.
// 3. 리턴할 때는 문자열 + 문자열이 아니라 숫자 + 숫자로 리턴해준다.
