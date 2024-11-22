/* 03:03 / 10:00 */
function solution(arr, intervals) {
  let array = [];
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    array = arr.slice(intervals[i][0], intervals[i][1] + 1);
    result.push(...array);
  }
  return result;
}

// 정수 배열 arr와 2개의 구간이 담긴 배열 intervals

// 1. intervals를 반복을 하면서 각각의 인덱스의 arr들을 모은다.
// 2. 스프레드 연산자를 통해서 새로운 result 배열을 생성한다.
