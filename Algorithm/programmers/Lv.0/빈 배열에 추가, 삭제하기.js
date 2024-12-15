/* 03:47 / 10:00 */
function solution(arr, flag) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        result.push(arr[i]);
      }
    } else {
      for (let j = 0; j < arr[i]; j++) {
        result.pop();
      }
    }
  }
  return result;
}

// flag의 true & false 여부
// true : arr[i]를 * 2
// false : arr[i]를 마지막 arr[i]를 제거
