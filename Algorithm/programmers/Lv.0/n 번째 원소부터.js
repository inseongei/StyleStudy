/* 02:37 / 15:00 */
function solution(num_list, n) {
  let result = [];
  for (let i = n - 1; i < num_list.length; i++) {
    result.push(num_list[i]);
  }

  return result;
}

// 정수 리스트 num_list 와 정수 n이 주어질 때, n번째 원소부터 마지막 원소까지 모든 원소를 담은 리스트

// 1. numlist의 n번째 요소부터 마지막 요소 까지니깐 n번째요소의 인덱스 값을 찾고
// 2. num_list의 배열의 길이만큼 반복을 해준다.
// 주의사항은 n의 -1을 해줘야 한다.
