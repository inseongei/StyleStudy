/* 01:23 / 10:00 */
function solution(num_list) {
  num_list.sort((a, b) => a - b);
  return num_list.slice(0, 5);
}

// 정수로 이루어진 num_list

// 가장 작은 5개의 수를 오름차순으로 담는다.
// num_list 정렬 시킨다. 오름차순으로
// 앞에서부터 5개를 잘라내면 된다
