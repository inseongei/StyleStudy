/* 04:00 / 10:00 */
function solution(num_list) {
  if (num_list[num_list.length - 1] > num_list[num_list.length - 2]) {
    return [
      ...num_list,
      num_list[num_list.length - 1] - num_list[num_list.length - 2],
    ];
  } else {
    return [...num_list, num_list[num_list.length - 1] * 2];
  }
}

// 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값
// 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두배한 값

// 1. num_list의 마지막 원소의 값을 구한다. → num_list[num_list.length-1]
// 2. 그 전 원소의 값을 구한다. → num_list[num_list.length-2]
