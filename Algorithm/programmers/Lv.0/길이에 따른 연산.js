/* 01:45 / 15:00 */
function solution(num_list) {
  if (num_list.length >= 11) {
    let num = num_list.reduce((sum, value) => (sum += value), 0);
    return num;
  } else {
    let num = num_list.reduce((sum, value) => (sum *= value), 1);
    return num;
  }
}

// 리스트의 길이가 11이상이면 리스트에 있는 모든 원소의 합을
// 10이하면 모든 원소의 곱을 리턴
