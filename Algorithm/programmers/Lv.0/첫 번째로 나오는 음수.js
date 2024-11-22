/* 01:06 / 10:00 */
function solution(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) return i;
  }
  return -1;
}

// 정수 리스트 num_list
// 첫 번째로 나오는 음수의 인덱스를 return

// 1. 배열을 맵으로 돌면서 해당되는 i를 찾는다.
// 2. 반복문에 걸리지 않을 경우 -1을 리턴해준다.
