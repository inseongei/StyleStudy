/* 01:32 / 10:00 */
function solution(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 배열의 요소 만큼 배열을 넣어준다.
