/* 02:37 / 10:00 */
function solution(num_list) {
  num_list.sort((a, b) => a - b);

  return num_list.slice(5, num_list.length);
}

// num_list 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트
