/* 08:16 / 10:00 */
function solution(arr) {
  let first = arr.indexOf(2);
  let last = arr.lastIndexOf(2);

  return first !== -1 ? arr.slice(first, last + 1) : [-1];
}

// 정수 배열 arr
// 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열 리턴

// 1. arr안에 indexOf 통해서 2를 찾는다.
// 2. arr안에 lastIndexOf를 통해서 2를 찾는다.
// 3. 1번과 2번의 인덱스만큼 arr를 잘라준다.
