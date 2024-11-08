/* 01:04 / 10:00 */
function solution(num_list) {
  let odd = 0; // 홀수
  let even = 0; // 짝수

  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 !== 0 ? odd++ : even++;
  }
  return [even, odd];
}

// 1. 반복문을 돌면서 num_list의 i번째가 홀수인지 짝수인지 판별하여 변수값 증가
