/* 02:07 / 10:00 */
function solution(num_list) {
  let sum = 0; // 합
  let cal = 1; // 곱
  for (let i = 0; i < num_list.length; i++) {
    sum += num_list[i];
    cal *= num_list[i];
  }

  return cal < sum ** 2 ? 1 : 0;
}

// 모든 원소들의 곱
// 모든 원소들의 합

// 1. sum과 cal의 변수에 반복문을 이용해서 각각의 합과 곱을 구해줍니다.
// 2. 리턴문에서 삼항 연산자를 이용하여 곱이 합의 제곱보다 작을 경우 1 클경우 0을 리턴해줍니다.
