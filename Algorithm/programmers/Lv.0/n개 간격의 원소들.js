/* 01:26 / 15:00 */
function solution(num_list, n) {
  let result = [];

  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list[i]);
  }
  return result;
}

// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫번째 원소부터 마지막 원소까지 n개 간격으로

// 1. n을 기준으로 i를 증가시키면서 result배열에 num_list의 i번째를 넣어주면 된다.
